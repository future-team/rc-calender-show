import React, {Component, PropTypes} from 'react'
import './less/index.less'

export default class CalenderYear extends Component {
    static propTypes = {
        maxYear: PropTypes.number,
        minYear: PropTypes.number,
        year: PropTypes.number,
        changeCallback: PropTypes.function
    };
    constructor(props, context) {
        super(props, context)
        this.state = {
            year: props.year
        }
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps() {

    }

    shouldComponentUpdate () {
        return true
    }

    prevYear(e) {
        const curYear = this.state.year - 1
        if(curYear < this.props.minYear) {
            return false
        }
        this.setState({
            year: curYear
        })
        this.props.changeCallback(e, this.state.year)
    }
    nextYear(e) {
        const curYear = this.state.year + 1
        if(curYear > this.props.maxYear) {
            return false
        }
        this.setState({
            year: curYear
        })
        this.props.changeCallback(e, this.state.year)
    }

    render() {
        return (
            <div className="rcs-year">
                <i className="rcs-iconfont next" onClick={::this.nextYear}/><i className="rcs-iconfont prev" onClick={::this.prevYear}/>
                <span className="content">{this.state.year}</span>
            </div>
        )
    }
}