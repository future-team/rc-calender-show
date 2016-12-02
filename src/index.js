import React, {Component, PropTypes} from 'react'
import Utils from './utils'
import './less/index.less'
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
            weekPrefix: isMobile? '' : '周'
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
        activeDate.setDate(day - week - 1 + this.props.weekStart)
        const days =  [1,2,3,4,5,6,7].map(()=>{
            return {
                date: new Date(activeDate.setDate(activeDate.getDate() + 1))
            }
        })
        return days
    }

    getWeekRange() {
        const days = this.getWeekDays()
        const weekRange = {
            weekStart: days[0]['date'],
            weekEnd: days[days.length-1]['date']
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
                    return new Date(obj.date).toLocaleDateString() === date
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
        const _self = this
        // Test for flick.
        this.longTouch = false
        setTimeout(function() {
            _self.longTouch = true
        }, 200)
        // Get the original touch position.
        this.touchstartx =  evt.touches[0].pageX
        this.setState({
            swipeClass: ''
        })
    }
    // TODO animation
    onTouchMoveHandler(evt) {
        this.touchmovex =  evt.touches[0].pageX
        this.movex = this.touchstartx - this.touchmovex
        this.setState({
            distance: this.movex
        })
    }

    onTouchEndHandler(evt) {
        const clientWidth = this.screen.width
        var absMove = Math.abs(this.movex)
        if (absMove > clientWidth/4 && this.longTouch === true) {
            if(this.movex > 0) {
                this.changeWeek(1)
            } else
            {
                this.changeWeek(-1)
            }
            evt.preventDefault()
            evt.stopPropagation()
        }
        this.setState({
            distance: absMove, //curIndex * clientWidth,
            swipeClass: 'ph-img-slider-animation'
        })
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
                    <ul className="clearfix week-list"
                        onTouchStart={::this.onTouchStartHandler}
                        onTouchMove={::this.onTouchMoveHandler}
                        onTouchEnd={::this.onTouchEndHandler}
                    >
                        {
                            days.map((item, index)=>(
                                <li key={index} className={'week-item' + (this.state.activeDate.getDay() === item.date.getDay() ? ' active': '') + (today === item.date.toLocaleDateString()? ' today':'')} onClick={()=>this.setActiveDate(item.date)}>
                                    <div className="week-label">{this.state.weekPrefix + this.props.weekLabel[item.date.getDay()]}</div>
                                    <div className="day-num"><div className="inner"><div className="num">{today === item.date.toLocaleDateString() &&  this.state.isMobile? '今' : item.date.getDate()}</div></div></div>
                                    <div className={'day-label ' + (item.mark? 'mark': '')}></div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="select-day-show">
                    <div className="select-day-show-content">{this.props.children}</div>
                </div>
            </div>
        )
    }
}