import React, {Component, PropTypes} from 'react'
import './less/index.less'

export default class CalenderDay extends Component {
    static propTypes = {
        year: PropTypes.number,
        month: PropTypes.number,
        changeCallback: PropTypes.function
    };
    constructor(props, context) {
        super(props, context)
        const days = (new Date(props.year, props.month, 0)).getDate()
        this.state = {
            weekIndex: 0,
            weeks: []
        }
        this.setWeeks(days)
    }

    componentWillMount() {
    }

    componentDidMount() {

    }
    setWeeks(days) {
        //  构造需要显示的数据
        let weekWrap = [], week = []
        for(let i = 1; i < days; i++) {
            week.push(i)
            if(week.length === 7){
                weekWrap.push(week)
                week = []
            }
        }
        if(week.length){
            weekWrap.push(week)
        }
        this.setState({
            weeks: weekWrap
        })
    }
    componentWillReceiveProps(nextProps) {
        const days = (new Date(nextProps.year, nextProps.month, 0)).getDate()
        this.setWeeks(days)
    }
    shouldComponentUpdate() {
        return true
    }
    prevWeek(e) {
        // TODO
        if(this.state.weekIndex < 1) return
        this.setState({
            weekIndex: --this.state.weekIndex
        })
        this.props.changeCallback(e, this.state.weeks[this.state.weekIndex] || [])
    }

    nextWeek(e) {
        // TODO
        if(this.state.weekIndex > (this.state.weeks.length-2)) return
        this.setState({
            weekIndex: ++this.state.weekIndex
        })
        this.props.changeCallback(e, this.state.weeks[this.state.weekIndex] || [])
    }
    render() {
        const week = this.state.weeks[this.state.weekIndex] || []
        const start = week[0] || ''
        const end = week[week.length-1]  || ''
        return (
            <div className="rcs-day">
                <i className={'rcs-iconfont next ' + (this.state.weekIndex > 3? 'disabled':'')}  onClick={::this.nextWeek}/>
                <i className={'rcs-iconfont prev ' + (this.state.weekIndex < 1? 'disabled':'')}  onClick={::this.prevWeek}/>
                <div className="content">
                    <span className="end">{end}日</span><span className="start">{start}日</span>
                    <div className="rcs-iconfont split"></div>
                </div>
            </div>
        )
    }
}