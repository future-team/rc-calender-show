# Calender events show[deprecated]
A component like iphone calender events show.

## Usage

Install
```bash
$ npm install rc-calender-show --save
```

Use in react
```javascript
import React, {Component, PropTypes} from 'react'
import ReactDom from 'react/lib/ReactDOM'
import CalenderShow from 'rc-calender-show'
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
    componentWillMount() {}
    componentDidMount() {}
    componentWillReceiveProps() {}
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
                <p>you choose date is：{this.state.year},{this.state.month},{this.state.day}</p>
                <CalenderShow dayChanged={::this.dayChanged} yearChanged={::this.yearChanged} monthChanged={::this.monthChanged}/>
            </div>
        )
    }
}
ReactDom.render(
    <Demo/>
    , document.getElementById('root')
)
```

the detail please checkout repo and run demo.
```bash
$ git clone https://github.com/future-team/rc-calender-show.git && cd rc-calender-show && npm install && npm run demo
```

## Contribute
Welcome create issue or pull request,:)


