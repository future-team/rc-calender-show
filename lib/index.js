'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

require('./less/index.less');

var CalenderShow = (function (_Component) {
    _inherits(CalenderShow, _Component);

    _createClass(CalenderShow, null, [{
        key: 'propTypes',
        value: {
            weekStart: _react.PropTypes.number,
            weekLabel: _react.PropTypes.array,
            dateChanged: _react.PropTypes.func,
            weekChanged: _react.PropTypes.func,
            defaultDate: _react.PropTypes.object,
            setMark: _react2['default'].PropTypes.arrayOf(_react.PropTypes.shape({
                date: _react.PropTypes.string,
                count: _react.PropTypes.number,
                format: _react.PropTypes['function']
            }))
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            weekStart: 0,
            weekLabel: ['日', '一', '二', '三', '四', '五', '六'],
            defaultDate: new Date(),
            dateChanged: function dateChanged() {},
            weekChanged: function weekChanged() {}
        },
        enumerable: true
    }]);

    function CalenderShow(props, context) {
        _classCallCheck(this, CalenderShow);

        _Component.call(this, props, context);
        var isMobile = _utils2['default'].isMobile();
        this.screen = window.screen;
        this.state = {
            activeDate: props.defaultDate ? props.defaultDate : new Date(),
            isMobile: isMobile,
            classPrefix: isMobile ? 'rcs-mobile' : 'rcs-pc',
            weekPrefix: isMobile ? '' : '周'
        };
    }

    CalenderShow.prototype.componentWillMount = function componentWillMount() {};

    CalenderShow.prototype.componentDidMount = function componentDidMount() {
        this.props.dateChanged(this.state.activeDate);
        this.props.weekChanged(this.getWeekRange());
    };

    CalenderShow.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
        return true;
    };

    CalenderShow.prototype.componentWillReceiveProps = function componentWillReceiveProps() {};

    /**
     * render current week show
     * @returns {Array}
     */

    CalenderShow.prototype.getWeekDays = function getWeekDays() {
        var activeDate = new Date(this.state.activeDate);
        var week = activeDate.getDay();
        var day = activeDate.getDate();
        activeDate.setDate(day - week - 1 + this.props.weekStart);
        var days = [1, 2, 3, 4, 5, 6, 7].map(function () {
            return {
                date: new Date(activeDate.setDate(activeDate.getDate() + 1))
            };
        });
        return days;
    };

    CalenderShow.prototype.getWeekRange = function getWeekRange() {
        var days = this.getWeekDays();
        var weekRange = {
            weekStart: days[0]['date'],
            weekEnd: days[days.length - 1]['date']
        };
        return weekRange;
    };

    /**
     * set active date and call callback
     * @param date
     */

    CalenderShow.prototype.setActiveDate = function setActiveDate(date) {
        var _this = this;

        this.setState({
            activeDate: date
        });
        setTimeout(function () {
            _this.props.dateChanged(date);
        }, 100);
    };

    /**
     * change week range show
     * @param flag prev:-1 | next: 1
     */

    CalenderShow.prototype.changeWeek = function changeWeek(flag) {
        var _this2 = this;

        var date = new Date(this.state.activeDate);
        var newDate = new Date(date.setDate(date.getDate() + flag * 7));
        this.setActiveDate(newDate);
        setTimeout(function () {
            _this2.props.weekChanged(_this2.getWeekRange());
        }, 100);
    };

    CalenderShow.prototype.formatDays = function formatDays() {
        var days = this.getWeekDays();
        var setMark = this.props.setMark;

        if (setMark && _utils2['default'].checkType(setMark, 'array')) {
            days = days.map(function (item) {
                var date = item.date.toLocaleDateString();
                var find = setMark.filter(function (obj) {
                    return new Date(obj.date).toLocaleDateString() === date;
                })[0];
                if (find) {
                    item.mark = !!find.count;
                    if (_utils2['default'].checkType(find.format, 'function')) {
                        item.label = find.format(find) || '';
                    } else {
                        item.label = find.count;
                    }
                }
                return item;
            });
        }
        return days;
    };

    CalenderShow.prototype.onTouchStartHandler = function onTouchStartHandler(evt) {
        var _self = this;
        // Test for flick.
        this.longTouch = false;
        setTimeout(function () {
            _self.longTouch = true;
        }, 200);
        // Get the original touch position.
        this.touchstartx = evt.touches[0].pageX;
        this.setState({
            swipeClass: ''
        });
    };

    // TODO animation

    CalenderShow.prototype.onTouchMoveHandler = function onTouchMoveHandler(evt) {
        this.touchmovex = evt.touches[0].pageX;
        this.movex = this.touchstartx - this.touchmovex;
        this.setState({
            distance: this.movex
        });
    };

    CalenderShow.prototype.onTouchEndHandler = function onTouchEndHandler(evt) {
        var clientWidth = this.screen.width;
        var absMove = Math.abs(this.movex);
        if (absMove > clientWidth / 4 && this.longTouch === true) {
            if (this.movex > 0) {
                this.changeWeek(1);
            } else {
                this.changeWeek(-1);
            }
            evt.preventDefault();
            evt.stopPropagation();
        }
        this.setState({
            distance: absMove, //curIndex * clientWidth,
            swipeClass: 'ph-img-slider-animation'
        });
    };

    CalenderShow.prototype.render = function render() {
        var _this3 = this;

        var activeDate = this.state.activeDate;

        var yearMonth = activeDate.getFullYear() + '年' + (activeDate.getMonth() + 1) + '月';
        var today = new Date().toLocaleDateString();
        var days = this.formatDays();

        return _react2['default'].createElement(
            'div',
            { className: 'rcs-panel ' + this.state.classPrefix },
            _react2['default'].createElement(
                'div',
                { className: 'clearfix rcs-option' },
                _react2['default'].createElement(
                    'div',
                    { className: 'right' },
                    _react2['default'].createElement(
                        'div',
                        { className: 'rcs-day' },
                        _react2['default'].createElement('span', { className: 'rcs-iconfont next', onClick: function () {
                                return _this3.changeWeek(1);
                            } }),
                        _react2['default'].createElement('span', { className: 'rcs-iconfont prev', onClick: function () {
                                return _this3.changeWeek(-1);
                            } })
                    )
                ),
                _react2['default'].createElement(
                    'div',
                    { className: 'left' },
                    _react2['default'].createElement(
                        'div',
                        { className: 'rcs-date' },
                        yearMonth
                    )
                )
            ),
            _react2['default'].createElement(
                'div',
                { className: 'rcs-week' },
                _react2['default'].createElement(
                    'ul',
                    { className: 'clearfix week-list',
                        onTouchStart: this.onTouchStartHandler.bind(this),
                        onTouchMove: this.onTouchMoveHandler.bind(this),
                        onTouchEnd: this.onTouchEndHandler.bind(this)
                    },
                    days.map(function (item, index) {
                        return _react2['default'].createElement(
                            'li',
                            { key: index, className: 'week-item' + (_this3.state.activeDate.getDay() === item.date.getDay() ? ' active' : '') + (today === item.date.toLocaleDateString() ? ' today' : ''), onClick: function () {
                                    return _this3.setActiveDate(item.date);
                                } },
                            _react2['default'].createElement(
                                'div',
                                { className: 'week-label' },
                                _this3.state.weekPrefix + _this3.props.weekLabel[item.date.getDay()]
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: 'day-num' },
                                _react2['default'].createElement(
                                    'div',
                                    { className: 'inner' },
                                    _react2['default'].createElement(
                                        'div',
                                        { className: 'num' },
                                        today === item.date.toLocaleDateString() && _this3.state.isMobile ? '今' : item.date.getDate()
                                    )
                                )
                            ),
                            _react2['default'].createElement('div', { className: 'day-label ' + (item.mark ? 'mark' : '') })
                        );
                    })
                )
            ),
            _react2['default'].createElement(
                'div',
                { className: 'select-day-show' },
                _react2['default'].createElement(
                    'div',
                    { className: 'select-day-show-content' },
                    this.props.children
                )
            )
        );
    };

    return CalenderShow;
})(_react.Component);

exports['default'] = CalenderShow;
module.exports = exports['default'];