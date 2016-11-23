import React, {Component, PropTypes} from 'react'
import './less/index.less'

export default class CalenderWeek extends Component {
    static propTypes = {
        startWeek: 1,
        days: PropTypes.array,
        activeDate: PropTypes.string,
        activeWeek: PropTypes.number,
        selectCallback: PropTypes.object,
        children: React.PropTypes.element.isRequired
    };

    static defaultProps={
        activeDate: '2016-11-23'
    };

    constructor(props, context) {
        super(props, context)
        this.state = {
            weekLabel: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
            activeDate: props.activeDate,
            days: []
        }
    }

    selectWeekDay(date) {
        this.props.selectCallback(date)
    }
    getWeekDays() {
        const activeDate = new Date(this.props.activeDate)
        const week = activeDate.getDay()
        const day = activeDate.getDate()
        activeDate.setDate(day - week)
        return [1,2,3,4,5,6,7].map(()=>{
            return new Date(activeDate.setDate(activeDate.getDate() + 1))
        })
    }
    componentWillMount() {}

    componentDidMount() {}

    componentWillReceiveProps(nextProps) {
        this.setState({
            activeDate: nextProps.activeDate
        })
    }

    shouldComponentUpdate() {return true}

    render() {
        const today = (new Date()).getDate()
        const days = this.getWeekDays()
        return (
            <div className="rcs-week">
                <ul className="clearfix week-list">
                    {
                        days.map((item, index)=>(
                            <li key={index} className="week-item" onClick={()=>this.selectWeekDay(item)}>
                                <p className="week-label">{ today === item.getDate() ? '今日' : this.state.weekLabel[item.getDay()]}</p>
                                <p className="day-label"><i>{item.getDate()}</i></p>
                            </li>
                        ))
                    }
                </ul>
                <div className="select-day-show">
                    {this.props.children}
                </div>
            </div>
        )
    }
}