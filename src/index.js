import React, {Component, PropTypes} from 'react'
import CdDay from './CdDay'
import CdMonth from './CdMonth'
import CdYear from './CdYear'
import CdWeek from './CdWeek'
const loop = function(){}
export default class CalenderShow extends Component {
    static propTypes = {
        yearMonthActive: PropTypes.boolean,
        dayChanged: PropTypes.function,
        yearChanged: PropTypes.function,
        monthChanged: PropTypes.function
    };
    static defaultProps={
        yearMonthActive: false,
        dayChanged: loop,
        yearChanged: loop,
        monthChanged: loop
    };
    constructor(props, context) {
        super(props, context)
        this.state = {
            yearMonthActive: props.yearMonthActive,
            year: 2016,
            month: 11,
            days: [1, 2, 3, 4, 5, 6, 7],
            day: 20
        }
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillReceiveProps() {
    }

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
    changeDay(e, day) {
        e && e.preventDefault()
        this.setState({
            day: day
        })
        this.props.dayChanged(e, day)
    }
    clickChangeYearMonth() {
        this.setState({
            yearMonthActive: !this.state.yearMonthActive
        })
    }
    shouldComponentUpdate() {
        return true
    }
    render() {
        const {year, month} = this.state
        const yearMonth = year + '-' + month
        return (
            <div className="rcs-panel">
                <div className="clearfix">
                    <div className="right">
                        <div className={ 'rcs-select-year-month ' + (this.state.yearMonthActive? 'active': '')}
                             onClick={::this.clickChangeYearMonth}>{yearMonth}<i className={'rcs-iconfont ' + (this.state.yearMonthActive? 'up': 'down')}/></div>
                        {
                            this.state.yearMonthActive && (
                                <div className="rcs-select-year-month-panel">
                                    <CdYear year={this.state.year} changeCallback={::this.changeYear}/>
                                    <CdMonth activeMonth={this.state.month} selectCallback={::this.changeMonth}/>
                                </div>
                            )
                        }
                    </div>
                    <div className="left">
                        <CdDay year={this.state.year} month={this.state.month} changeCallback={::this.changeDays}/>
                    </div>
                </div>
                <CdWeek days={this.state.days} activeWeek={this.state.day} selectCallback={::this.changeDay}>
                    <p>还没想好要怎么弄</p>
                </CdWeek>
            </div>
        )
    }
}