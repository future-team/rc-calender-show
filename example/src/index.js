import React, {Component, PropTypes} from 'react'
import ReactDom from 'react/lib/ReactDOM'
import CalenderShow from '../../src/index.js'
// import CalenderShow from '../../dist/rc-calender-show.js'
// import '../../dist/rc-calender-show.css'
import '../less/demo.less'

class Demo extends Component {
    static propTypes = {
        date: PropTypes.string
    };
    static defaultProps={
        date: '2016-11-21'
    };
    constructor(props, context) {
        super(props, context)
        this.state = {
            evt: null,
            year: 2016,
            month: 11,
            day: 21,
            date: new Date()
        }
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps() {

    }
    dayChanged(day) {
        this.setState({
            day: day
        })
    }
    yearChanged(evt, year) {
        this.setState({
            evt: evt,
            year: year
        })
    }
    dateChanged(date) {
        this.setState({
            date: date
        })
    }
    shouldComponentUpdate() {
        return true
    }
    render() {
        return (
            <div className="rcs-demo">
                <p>你选择的日期是：{this.state.date.getFullYear()},{this.state.date.getMonth()+1},{this.state.date.getDate()}</p>
                <CalenderShow dayChanged={::this.dayChanged} yearChanged={::this.yearChanged} dateChanged={::this.dateChanged}/>
            </div>
        )
    }
}

ReactDom.render(
    <Demo/>
    , document.getElementById('root')
)