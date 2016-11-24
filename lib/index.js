'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./less/index.less');

var CalenderShow = (function (_Component) {
    _inherits(CalenderShow, _Component);

    _createClass(CalenderShow, null, [{
        key: 'propTypes',
        value: {
            dateChanged: _react.PropTypes['function'],
            defaultDate: _react.PropTypes.object
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            weekStart: 0,
            weekLabel: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
            defaultDate: new Date(),
            dateChanged: function dateChanged() {}
        },
        enumerable: true
    }]);

    function CalenderShow(props, context) {
        _classCallCheck(this, CalenderShow);

        _Component.call(this, props, context);
        this.screen = window.screen;
        this.state = {
            activeDate: props.defaultDate ? props.defaultDate : new Date(),
            classPrefix: this.detachEnv()
        };
    }

    CalenderShow.prototype.componentWillMount = function componentWillMount() {};

    CalenderShow.prototype.componentDidMount = function componentDidMount() {
        this.props.dateChanged(this.state.activeDate);
    };

    CalenderShow.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
        return true;
    };

    CalenderShow.prototype.componentWillReceiveProps = function componentWillReceiveProps() {}
    /*nextProps.defaultDate && this.setState({
        activeDate: nextProps.defaultDate
    })*/

    /**
     * detach env prefix
     * @returns {string}
     */
    ;

    CalenderShow.prototype.detachEnv = function detachEnv() {
        var classPrefix = 'rcs-pc';
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            classPrefix = 'rcs-mobile';
        }
        return classPrefix;
    };

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
            return new Date(activeDate.setDate(activeDate.getDate() + 1));
        });
        return days;
    };

    /**
     * set active date and call callback
     * @param date
     */

    CalenderShow.prototype.setActiveDate = function setActiveDate(date) {
        this.setState({
            activeDate: date
        });
        this.props.dateChanged(date);
    };

    /**
     * change week range show
     * @param flag prev:-1 | next: 1
     */

    CalenderShow.prototype.changeWeek = function changeWeek(flag) {
        var date = new Date(this.state.activeDate);
        var newDate = new Date(date.setDate(date.getDate() + flag * 7));
        this.setActiveDate(newDate);
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
        var _this = this;

        var activeDate = this.state.activeDate;

        var yearMonth = activeDate.getFullYear() + '年' + (activeDate.getMonth() + 1) + '月';
        var today = new Date().getDate();
        var days = this.getWeekDays();
        return _react2['default'].createElement(
            'div',
            { className: 'rcs-panel ' + this.state.classPrefix },
            _react2['default'].createElement(
                'div',
                { className: 'clearfix' },
                _react2['default'].createElement(
                    'div',
                    { className: 'right' },
                    _react2['default'].createElement(
                        'div',
                        { className: 'rcs-day' },
                        _react2['default'].createElement('i', { className: 'rcs-iconfont next', onClick: function () {
                                return _this.changeWeek(1);
                            } }),
                        _react2['default'].createElement('i', { className: 'rcs-iconfont prev', onClick: function () {
                                return _this.changeWeek(-1);
                            } })
                    )
                ),
                _react2['default'].createElement(
                    'div',
                    { className: 'left' },
                    _react2['default'].createElement(
                        'div',
                        { className: 'rcs-select-year-month' },
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
                            { key: index, className: 'week-item ' + (_this.state.activeDate.getDay() === item.getDay() ? 'active' : ''), onClick: function () {
                                    return _this.setActiveDate(item);
                                } },
                            _react2['default'].createElement(
                                'p',
                                { className: 'week-label' },
                                today === item.getDate() ? '今日' : _this.props.weekLabel[item.getDay()]
                            ),
                            _react2['default'].createElement(
                                'p',
                                { className: 'day-label' },
                                _react2['default'].createElement(
                                    'i',
                                    null,
                                    item.getDate()
                                )
                            )
                        );
                    })
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
            )
        );
    };

    return CalenderShow;
})(_react.Component);

exports['default'] = CalenderShow;
module.exports = exports['default'];