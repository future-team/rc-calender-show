import React, {Component, PropTypes} from 'react'
import './less/index.less'

export default class CalenderShow extends Component {
    static propTypes = {
        dateChanged: PropTypes.function,
        defaultDate: PropTypes.object
    };
    static defaultProps={
        weekStart: 0,
        weekLabel: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
        defaultDate: new Date(),
        dateChanged: function(){}
    };

    constructor(props, context) {
        super(props, context)
        this.screen = window.screen
        this.state = {
            activeDate: props.defaultDate ? props.defaultDate : new Date(),
            classPrefix: this.detachEnv()
        }
    }
    componentWillMount() {}
    componentDidMount() {
        this.props.dateChanged(this.state.activeDate)
    }
    shouldComponentUpdate() {return true}
    componentWillReceiveProps() {
        /*nextProps.defaultDate && this.setState({
            activeDate: nextProps.defaultDate
        })*/
    }

    /**
     * detach env prefix
     * @returns {string}
     */
    detachEnv(){
        let classPrefix = 'rcs-pc'
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            classPrefix = 'rcs-mobile'
        }
       return classPrefix
    }
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
            return new Date(activeDate.setDate(activeDate.getDate() + 1))
        })
        return days
    }

    /**
     * set active date and call callback
     * @param date
     */
    setActiveDate(date) {
        this.setState({
            activeDate: date
        })
        this.props.dateChanged(date)
    }

    /**
     * change week range show
     * @param flag prev:-1 | next: 1
     */
    changeWeek(flag) {
        const date = new Date(this.state.activeDate)
        const newDate = new Date(date.setDate(date.getDate()+(flag * 7)))
        this.setActiveDate(newDate)
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
        const today = (new Date()).getDate()
        const days = this.getWeekDays()
        return (
            <div className={'rcs-panel '+ this.state.classPrefix}>
                <div className="clearfix">
                    <div className="right">
                        <div className="rcs-day">
                            <i className="rcs-iconfont next"  onClick={()=>this.changeWeek(1)}/>
                            <i className="rcs-iconfont prev"  onClick={()=>this.changeWeek(-1)}/>
                        </div>
                    </div>
                    <div className="left">
                        <div className="rcs-select-year-month">{yearMonth}</div>
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
                                <li key={index} className={'week-item ' + (this.state.activeDate.getDay() === item.getDay() ? 'active': '')} onClick={()=>this.setActiveDate(item)}>
                                    <p className="week-label">{ today === item.getDate() ? '今日' : this.props.weekLabel[item.getDay()]}</p>
                                    <p className="day-label"><i>{item.getDate()}</i></p>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="select-day-show">
                        <div className="select-day-show-content">{this.props.children}</div>
                    </div>
                </div>
            </div>
        )
    }
}