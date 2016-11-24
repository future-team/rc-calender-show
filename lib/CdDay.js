'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./less/index.less');

var CalenderDay = (function (_Component) {
    _inherits(CalenderDay, _Component);

    _createClass(CalenderDay, null, [{
        key: 'propTypes',
        value: {
            year: _react.PropTypes.number,
            month: _react.PropTypes.number,
            changeCallback: _react.PropTypes['function']
        },
        enumerable: true
    }]);

    function CalenderDay(props, context) {
        _classCallCheck(this, CalenderDay);

        _Component.call(this, props, context);
        var days = new Date(props.year, props.month, 0).getDate();
        this.state = {
            weekIndex: 0,
            weeks: []
        };
        this.setWeeks(days);
    }

    CalenderDay.prototype.componentWillMount = function componentWillMount() {};

    CalenderDay.prototype.componentDidMount = function componentDidMount() {};

    CalenderDay.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
        return true;
    };

    CalenderDay.prototype.setWeeks = function setWeeks(days) {
        //  构造需要显示的数据
        var weekWrap = [],
            week = [];
        for (var i = 1; i < days; i++) {
            week.push(i);
            if (week.length === 7) {
                weekWrap.push(week);
                week = [];
            }
        }
        if (week.length) {
            weekWrap.push(week);
        }
        this.setState({
            weeks: weekWrap
        });
    };

    CalenderDay.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        var days = new Date(nextProps.year, nextProps.month, 0).getDate();
        this.setWeeks(days);
    };

    CalenderDay.prototype.prevWeek = function prevWeek(e) {
        // TODO
        if (this.state.weekIndex < 1) return;
        this.setState({
            weekIndex: --this.state.weekIndex
        });
        this.props.changeCallback(e, this.state.weeks[this.state.weekIndex] || []);
    };

    CalenderDay.prototype.nextWeek = function nextWeek(e) {
        // TODO
        if (this.state.weekIndex > this.state.weeks.length - 2) return;
        this.setState({
            weekIndex: ++this.state.weekIndex
        });
        this.props.changeCallback(e, this.state.weeks[this.state.weekIndex] || []);
    };

    CalenderDay.prototype.render = function render() {
        return _react2['default'].createElement(
            'div',
            { className: 'rcs-day' },
            _react2['default'].createElement('i', { className: 'rcs-iconfont next ' + (this.state.weekIndex > 3 ? 'disabled' : ''), onClick: this.nextWeek.bind(this) }),
            _react2['default'].createElement('i', { className: 'rcs-iconfont prev ' + (this.state.weekIndex < 1 ? 'disabled' : ''), onClick: this.prevWeek.bind(this) })
        );
    };

    return CalenderDay;
})(_react.Component);

exports['default'] = CalenderDay;
module.exports = exports['default'];