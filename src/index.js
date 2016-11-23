import React, {Component, PropTypes} from 'react'
import CdWeek from './CdWeek'
const loop = function(){}
export default class CalenderShow extends Component {
    static propTypes = {
        yearMonthActive: PropTypes.boolean,
        dayChanged: PropTypes.function,
        yearChanged: PropTypes.function,
        monthChanged: PropTypes.function,
        dateChanged: PropTypes.function
    };
    static defaultProps={
        activeDate: new Date(),
        dayChanged: loop,
        yearChanged: loop,
        monthChanged: loop,
        dateChanged: loop
    };
    constructor(props, context) {
        super(props, context)
        this.state = {
            yearMonthActive: props.yearMonthActive,
            activeDate: props.date,
            year: 2016,
            month: 11,
            days: [1, 2, 3, 4, 5, 6, 7],
            day: 20
        }
    }

    componentWillMount() {}

    componentDidMount() {}

    componentWillReceiveProps() {}

    shouldComponentUpdate() {return true}

    changeDays(e, days) {
        e && e.preventDefault()
        this.setState({
            days: days
        })
    }
    changeYear(e, year) {
        e && e.preventDefault()
        this.setState({
            year: year
        })
        this.props.yearChanged(e, year)
    }
    changeMonth(e, month) {
        e && e.preventDefault()
        this.setState({
            month: month
        })
        this.props.monthChanged(e, month)
    }
    weekDaySelected(day) {
        this.setState({
            activeDate: day
        })
        this.props.dateChanged(day)
    }
    clickChangeYearMonth() {
        this.setState({
            yearMonthActive: !this.state.yearMonthActive
        })
    }
    nextWeek() {
        const date = new Date(this.state.activeDate)
        this.setState({
            activeDate: new Date(date.setDate(date.getDate()+7))
        })
    }
    prevWeek() {
        const date = new Date(this.state.activeDate)
        this.setState({
            activeDate: new Date(date.setDate(date.getDate()-7))
        })
    }
    render() {
        const {year, month} = this.state
        const yearMonth = year + '-' + month
        return (
            <div className="rcs-panel">
                <div className="clearfix">
                    <div className="right">
                        <div className="rcs-day"><i className="rcs-iconfont next"  onClick={::this.nextWeek}/><i className="rcs-iconfont prev"  onClick={::this.prevWeek}/></div>
                    </div>
                    <div className="left">
                        <div className="rcs-select-year-month">{yearMonth}</div>
                    </div>
                </div>
                <CdWeek activeDate={this.state.activeDate} selectCallback={::this.weekDaySelected}>
                    <p>还没想好要怎么弄</p>
                </CdWeek>
            </div>
        )
    }
}