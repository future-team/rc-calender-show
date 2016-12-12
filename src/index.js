import React, {Component, PropTypes} from 'react'
import Utils from './utils'
import './less/index.less'

// element-closest | CC0-1.0 | github.com/jonathantneal/closest
(function (ElementProto) {
    if (typeof ElementProto.matches !== 'function') {
        ElementProto.matches = ElementProto.msMatchesSelector || ElementProto.mozMatchesSelector || ElementProto.webkitMatchesSelector || function matches(selector) {
                var element = this
                var elements = (element.document || element.ownerDocument).querySelectorAll(selector)
                var index = 0

                while (elements[index] && elements[index] !== element) {
                    ++index
                }

                return Boolean(elements[index])
            }
    }
    if (typeof ElementProto.closest !== 'function') {
        ElementProto.closest = function closest(selector) {
            var element = this

            while (element && element.nodeType === 1) {
                if (element.matches(selector)) {
                    return element
                }

                element = element.parentNode
            }

            return null
        }
    }
})(window.Element.prototype)
export default class CalenderShow extends Component {
    static propTypes = {
        weekStart: PropTypes.number,
        weekLabel: PropTypes.array,
        dateChanged: PropTypes.func,
        weekChanged: PropTypes.func,
        defaultDate: PropTypes.object,
        setMark: React.PropTypes.arrayOf(PropTypes.shape({
            date: PropTypes.string,
            count: PropTypes.number,
            format: PropTypes.function
        }))
    };
    static defaultProps={
        weekStart: 0,
        weekLabel: ['日', '一', '二', '三', '四', '五', '六'],
        defaultDate: new Date(),
        dateChanged: function(){},
        weekChanged: function(){}
    };

    constructor(props, context) {
        super(props, context)
        const isMobile = Utils.isMobile()
        this.screen = window.screen
        this.state = {
            activeDate: props.defaultDate ? props.defaultDate : new Date(),
            isMobile: isMobile,
            classPrefix: isMobile? 'rcs-mobile' : 'rcs-pc',
            weekPrefix: isMobile? '' : '周',
            swipeClass: '',
            distance: 0
        }
    }
    componentWillMount() {}
    componentDidMount() {
        this.props.dateChanged(this.state.activeDate)
        this.props.weekChanged(this.getWeekRange())
    }
    shouldComponentUpdate() {return true}
    componentWillReceiveProps() {}
    /**
     * render current week show
     * @returns {Array}
     */
    getWeekDays() {
        const activeDate = new Date(this.state.activeDate)
        const week = activeDate.getDay()
        const day = activeDate.getDate()
        const dis = 8
        activeDate.setDate(day - week - dis + this.props.weekStart)
        // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
        const days =  [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, -1, -1, -1, -1].map(()=>{
            return {
                date: new Date(activeDate.setDate(activeDate.getDate() + 1))
            }
        })
        return days
    }

    getWeekRange() {
        const days = this.getWeekDays()
        const weekRange = {
            weekStart: days[7]['date'],
            weekEnd: days[13]['date']
        }
        return weekRange
    }

    /**
     * set active date and call callback
     * @param date
     */
    setActiveDate(date) {
        this.setState({
            activeDate: date
        })
        setTimeout(()=>{
            this.props.dateChanged(date)
        }, 100)
    }

    /**
     * change week range show
     * @param flag prev:-1 | next: 1
     */
    changeWeek(flag) {
        const date = new Date(this.state.activeDate)
        const newDate = new Date(date.setDate(date.getDate()+(flag * 7)))
        this.setActiveDate(newDate)
        setTimeout(()=>{
            this.props.weekChanged(this.getWeekRange())
        }, 100)
    }
    formatDays() {
        let days = this.getWeekDays()
        const {setMark} = this.props
        if(setMark && Utils.checkType(setMark, 'array')) {
            days = days.map((item)=>{
                const date = item.date.toLocaleDateString()
                let find = setMark.filter(function (obj) {
                    return new Date(obj.date.replace(/-/gi,'/')).toLocaleDateString() == date
                })[0]
                if(find) {
                    item.mark = !!find.count
                    if(Utils.checkType(find.format, 'function')){
                        item.label = find.format(find) || ''
                    }else{
                        item.label = find.count
                    }
                }
                return item
            })
        }
        return days
    }

    onTouchStartHandler(evt) {
        evt.stopPropagation()
        evt.preventDefault()
        const _self = this
        this.longTouch = false
        setTimeout(function() {
            _self.longTouch = true
        }, 200)
        // Get the original touch position.
        this.touchstartx =  evt.touches[0].pageX
        this.setState({
            swipeClass: 'rc-calender-show-week-touch-start'
        })
    }
    onTouchMoveHandler(evt) {
        evt.stopPropagation()
        evt.preventDefault()
        this.touchmovex =  evt.touches[0].pageX
        this.movex = this.touchstartx - this.touchmovex
        this.setState({
            distance: this.movex,
            swipeClass: 'rc-calender-show-week-touch-move'
        })
    }

    onTouchEndHandler(evt) {
        evt.stopPropagation()
        evt.preventDefault()
        const clientWidth = this.screen.width
        const absMove = Math.abs(this.movex)
        let swipeClass = 'rc-calender-show-week-touch-recover'
        if(this.longTouch === true) {
            if (absMove > clientWidth/6) {
                if(this.movex > 0) {
                    this.changeWeek(1)
                    swipeClass = 'rc-calender-show-week-touch-end-left'
                } else
                {
                    this.changeWeek(-1)
                    swipeClass = 'rc-calender-show-week-touch-end-right'
                }
                setTimeout(()=>{
                    this.setState({
                        swipeClass: ''
                    })
                },500)
            }
        }else {
            // click
            const clickDate = evt.target.closest('.week-item').dataset.date
            this.setActiveDate(new Date(clickDate))
        }
        this.setState({
            distance: 0,
            swipeClass: swipeClass
        })
    }
    renderStyle(){
        const distance = this.state.distance * -1
        const translate = `translate(${distance}px, 0)`
        return {
            WebkitTransform: translate,
            MozTransform:    translate,
            msTransform:     translate,
            OTransform:      translate,
            transform:       translate
        }
    }
    render() {
        const {activeDate} = this.state
        const yearMonth = activeDate.getFullYear() + '年' + (activeDate.getMonth() + 1) + '月'
        const today = (new Date()).toLocaleDateString()
        const days = this.formatDays()
        return (
            <div className={'rcs-panel '+ this.state.classPrefix}>
                <div className="clearfix rcs-option">
                    <div className="right">
                        <div className="rcs-day">
                            <span className="rcs-iconfont next"  onClick={()=>this.changeWeek(1)}/>
                            <span className="rcs-iconfont prev"  onClick={()=>this.changeWeek(-1)}/>
                        </div>
                    </div>
                    <div className="left">
                        <div className="rcs-date">{yearMonth}</div>
                    </div>
                </div>
                <div className="rcs-week">
                    <div className="rsc-week-inner">
                        <ul style={this.renderStyle()}
                            className={'clearfix week-list '+ this.state.swipeClass }
                            onTouchStart={::this.onTouchStartHandler}
                            onTouchMove={::this.onTouchMoveHandler}
                            onTouchEnd={::this.onTouchEndHandler}
                        >
                            {
                                days.map((item, index)=>(
                                    <li key={index}
                                        className={'week-item' + (this.state.activeDate.getDay() === item.date.getDay() ? ' active': '') + (today === item.date.toLocaleDateString()? ' today':'')}
                                        data-date={item.date}
                                        onClick={()=>this.setActiveDate(item.date)}>
                                        <div className="week-label">{this.state.weekPrefix + this.props.weekLabel[item.date.getDay()]}</div>
                                        <div className="day-num"><div className="inner"><div className="num">{today === item.date.toLocaleDateString() &&  this.state.isMobile? '今' : item.date.getDate()}</div></div></div>
                                        <div className={'day-label ' + (item.mark ? 'mark': '')}></div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="select-day-show">
                    <div className="select-day-show-content">{this.props.children}</div>
                </div>
            </div>
        )
    }
}