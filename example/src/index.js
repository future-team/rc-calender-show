import React, {Component, PropTypes} from 'react'
import ReactDom from 'react/lib/ReactDOM'
import CalenderShow from '../../src/index.js'
// import CalenderShow from '../../dist/rc-calender-show.js'
// import '../../dist/rc-calender-show.css'
import '../less/demo.less'

class Demo extends Component {
    static propTypes = {
        date: PropTypes.object
    };
    static defaultProps={
        date: new Date()
    };
    constructor(props, context) {
        super(props, context)
        this.state = {
            defaultDate: null,
            date: null
        }
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps() {

    }
    dateChanged(date) {
        this.setState({
            date: date
        })
    }
    shouldComponentUpdate() {
        return true
    }
    renderList() {
        const date = this.state.date
        return date ? (<p>这个列表渲染呢的时间为{date.getFullYear()} - {date.getMonth()+1} - {date.getDate()}</p>) : (<p><strong>出错啦！</strong></p>)
    }
    render() {
        return (
            <div className="rcs-demo">
                { this.state.date && <p>你选择的日期是：{this.state.date.getFullYear()},{this.state.date.getMonth()+1},{this.state.date.getDate()}</p> }
                <CalenderShow dateChanged={(date)=>{this.dateChanged(date)}} defaultDate={this.state.defaultDate}>
                    {
                        this.renderList()
                    }
                </CalenderShow>
            </div>
        )
    }
}

ReactDom.render(
    <Demo/>
    , document.getElementById('root')
)