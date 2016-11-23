import React, {Component, PropTypes} from 'react'
import './less/index.less'

export default class CalenderMonth extends Component {
    static propTypes = {
        activeMonth: PropTypes.number,
        selectCallback: PropTypes.function
    };

    constructor(props, context) {
        super(props, context)
        this.state = {
            activeMonth: props.activeMonth
        }
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps() {

    }

    selectMonth(e) {
        const month = parseInt(e.currentTarget.dataset.month)
        this.setState({
            activeMonth: month
        })
        this.props.selectCallback(e, this.state.activeMonth)
    }

    shouldComponentUpdate () {
        return true
    }

    render() {

        return (
            <div className="rcs-month">
                <ul className="clearfix rcs-month-list">
                    {
                        [1,2,3,4,5,6,7,8,9,10,11,12].map((index)=>(
                            <li key={index} onClick={::this.selectMonth} data-month={index}  className={'rcs-month-item '+(index == this.state.activeMonth? 'active': '')}><span className="rcs-month-content">{index}月</span></li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}