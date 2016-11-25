import React, {Component, PropTypes} from 'react'
import ReactDom from 'react/lib/ReactDOM'
import CalenderShow from '../../src/index.js'
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
    componentWillMount() {}
    componentDidMount() {}
    componentWillReceiveProps() {}
    shouldComponentUpdate() {return true}
    dateChanged(date) {
        this.setState({
            date: date
        })
    }
    weekChanged(weekRange) {
        this.setMark(weekRange)
    }
    renderList() {
        const date = this.state.date
        return date ? (<p>这个列表渲染呢的时间为{date.getFullYear()} - {date.getMonth()+1} - {date.getDate()}</p>) : (<p><strong>出错啦！</strong></p>)
    }
    setMark() {
        const mark = [
            {
                date: '2016-11-20',
                count: 1
            },
            {
                date: '2016-11-23',
                count: 100
            },
            {
                date: '2016-11-26',
                count: 10
            },
            {
                date: '2016-11-21',
                count: 0
            },
            {
                date: '2016-11-22',
                count: 0
            }
        ]
        this.setState({
            mark: mark
        })
    }
    render() {
        return (
            <div className="rcs-demo">
                <p><a href="javascript:;" onClick={::this.setMark}>设置红点</a></p>
                { this.state.date && <p>你选择的日期是：{this.state.date.getFullYear()},{this.state.date.getMonth()+1},{this.state.date.getDate()}</p> }
                <CalenderShow dateChanged={(date)=>{this.dateChanged(date)}} defaultDate={this.state.defaultDate} setMark={this.state.mark} weekChanged={::this.weekChanged}>
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