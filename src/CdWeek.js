import React, {Component, PropTypes} from 'react'
import './less/index.less'

export default class CalenderWeek extends Component {
    static propTypes = {
        days: PropTypes.array,
        activeWeek: PropTypes.number,
        selectCallback: PropTypes.object,
        children: React.PropTypes.element.isRequired
    };

    constructor(props, context) {
        super(props, context)
        this.state = {
            weekLabel: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            activeWeek: props.activeWeek
        }
        this.selectWeekDay = this.selectWeekDay.bind(this)
    }

    selectWeekDay() {

    }
    componentWillMount() {
        
    }

    componentDidMount() {
        
    }

    componentWillReceiveProps() {

    }
    shouldComponentUpdate() {
        return true
    }
    render() {
        const today = (new Date()).getDate()
        return (
            <div className="rcs-week">
                <ul className="clearfix week-list" onClick={this.selectWeekDay}>
                    {
                        (this.props.days || []).map((item, index)=>(
                            <li className="week-item">
                                <p className="week-label">{ today === item ? '今日' : this.state.weekLabel[index]}</p>
                                <p className="events"><i>{item}</i></p>
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