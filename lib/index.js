'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CdDay = require('./CdDay');

var _CdDay2 = _interopRequireDefault(_CdDay);

var _CdMonth = require('./CdMonth');

var _CdMonth2 = _interopRequireDefault(_CdMonth);

var _CdYear = require('./CdYear');

var _CdYear2 = _interopRequireDefault(_CdYear);

var _CdWeek = require('./CdWeek');

var _CdWeek2 = _interopRequireDefault(_CdWeek);

var loop = function loop() {};

var CalenderShow = (function (_Component) {
    _inherits(CalenderShow, _Component);

    _createClass(CalenderShow, null, [{
        key: 'propTypes',
        value: {
            yearMonthActive: _react.PropTypes.boolean,
            dayChanged: _react.PropTypes['function'],
            yearChanged: _react.PropTypes['function'],
            monthChanged: _react.PropTypes['function']
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            yearMonthActive: false,
            dayChanged: loop,
            yearChanged: loop,
            monthChanged: loop
        },
        enumerable: true
    }]);

    function CalenderShow(props, context) {
        _classCallCheck(this, CalenderShow);

        _Component.call(this, props, context);
        this.state = {
            yearMonthActive: props.yearMonthActive,
            year: 2016,
            month: 11,
            days: [1, 2, 3, 4, 5, 6, 7],
            day: 20
        };
    }

    CalenderShow.prototype.componentWillMount = function componentWillMount() {};

    CalenderShow.prototype.componentDidMount = function componentDidMount() {};

    CalenderShow.prototype.componentWillReceiveProps = function componentWillReceiveProps() {};

    CalenderShow.prototype.changeDays = function changeDays(e, days) {
        e && e.preventDefault();
        this.setState({
            days: days
        });
    };

    CalenderShow.prototype.changeYear = function changeYear(e, year) {
        e && e.preventDefault();
        this.setState({
            year: year
        });
        this.props.yearChanged(e, year);
    };

    CalenderShow.prototype.changeMonth = function changeMonth(e, month) {
        e && e.preventDefault();
        this.setState({
            month: month
        });
        this.props.monthChanged(e, month);
    };

    CalenderShow.prototype.changeDay = function changeDay(e, day) {
        e && e.preventDefault();
        this.setState({
            day: day
        });
        this.props.dayChanged(e, day);
    };

    CalenderShow.prototype.clickChangeYearMonth = function clickChangeYearMonth() {
        this.setState({
            yearMonthActive: !this.state.yearMonthActive
        });
    };

    CalenderShow.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
        return true;
    };

    CalenderShow.prototype.render = function render() {
        var _state = this.state;
        var year = _state.year;
        var month = _state.month;

        var yearMonth = year + '-' + month;
        return _react2['default'].createElement(
            'div',
            { className: 'rcs-panel' },
            _react2['default'].createElement(
                'div',
                { className: 'clearfix' },
                _react2['default'].createElement(
                    'div',
                    { className: 'right' },
                    _react2['default'].createElement(
                        'div',
                        { className: 'rcs-select-year-month ' + (this.state.yearMonthActive ? 'active' : ''),
                            onClick: this.clickChangeYearMonth.bind(this) },
                        yearMonth,
                        _react2['default'].createElement('i', { className: 'rcs-iconfont ' + (this.state.yearMonthActive ? 'up' : 'down') })
                    ),
                    this.state.yearMonthActive && _react2['default'].createElement(
                        'div',
                        { className: 'rcs-select-year-month-panel' },
                        _react2['default'].createElement(_CdYear2['default'], { year: this.state.year, changeCallback: this.changeYear.bind(this) }),
                        _react2['default'].createElement(_CdMonth2['default'], { activeMonth: this.state.month, selectCallback: this.changeMonth.bind(this) })
                    )
                ),
                _react2['default'].createElement(
                    'div',
                    { className: 'left' },
                    _react2['default'].createElement(_CdDay2['default'], { year: this.state.year, month: this.state.month, changeCallback: this.changeDays.bind(this) })
                )
            ),
            _react2['default'].createElement(
                _CdWeek2['default'],
                { days: this.state.days, activeWeek: this.state.day, selectCallback: this.changeDay.bind(this) },
                _react2['default'].createElement(
                    'p',
                    null,
                    '还没想好要怎么弄'
                )
            )
        );
    };

    return CalenderShow;
})(_react.Component);

exports['default'] = CalenderShow;
module.exports = exports['default'];