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
            day: 21
        }
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps() {

    }
    dayChanged(evt, day) {
        this.setState({
            evt: evt,
            day: day
        })
    }
    yearChanged(evt, year) {
        this.setState({
            evt: evt,
            year: year
        })
    }
    monthChanged(evt, month) {
        this.setState({
            evt: evt,
            month: month
        })
    }
    shouldComponentUpdate() {
        return true
    }
    render() {
        return (
            <div className="rcs-demo">
                <p>你选择的日期是：{this.state.year},{this.state.month},{this.state.day}</p>
                <CalenderShow dayChanged={::this.dayChanged} yearChanged={::this.yearChanged} monthChanged={::this.monthChanged}/>
            </div>
        )
    }
}

ReactDom.render(
    <Demo/>
    , document.getElementById('root')
)