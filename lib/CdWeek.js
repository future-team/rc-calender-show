'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./less/index.less');

var CalenderWeek = (function (_Component) {
    _inherits(CalenderWeek, _Component);

    _createClass(CalenderWeek, null, [{
        key: 'propTypes',
        value: {
            days: _react.PropTypes.array,
            activeWeek: _react.PropTypes.number,
            selectCallback: _react.PropTypes.object,
            children: _react2['default'].PropTypes.element.isRequired
        },
        enumerable: true
    }]);

    function CalenderWeek(props, context) {
        _classCallCheck(this, CalenderWeek);

        _Component.call(this, props, context);
        this.state = {
            weekLabel: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            activeWeek: props.activeWeek
        };
        this.selectWeekDay = this.selectWeekDay.bind(this);
    }

    CalenderWeek.prototype.selectWeekDay = function selectWeekDay() {};

    CalenderWeek.prototype.componentWillMount = function componentWillMount() {};

    CalenderWeek.prototype.componentDidMount = function componentDidMount() {};

    CalenderWeek.prototype.componentWillReceiveProps = function componentWillReceiveProps() {};

    CalenderWeek.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
        return true;
    };

    CalenderWeek.prototype.render = function render() {
        var _this = this;

        var today = new Date().getDate();
        return _react2['default'].createElement(
            'div',
            { className: 'rcs-week' },
            _react2['default'].createElement(
                'ul',
                { className: 'clearfix week-list', onClick: this.selectWeekDay },
                (this.props.days || []).map(function (item, index) {
                    return _react2['default'].createElement(
                        'li',
                        { className: 'week-item' },
                        _react2['default'].createElement(
                            'p',
                            { className: 'week-label' },
                            today === item ? '今日' : _this.state.weekLabel[index]
                        ),
                        _react2['default'].createElement(
                            'p',
                            { className: 'events' },
                            _react2['default'].createElement(
                                'i',
                                null,
                                item
                            )
                        )
                    );
                })
            ),
            _react2['default'].createElement(
                'div',
                { className: 'select-day-show' },
                this.props.children
            )
        );
    };

    return CalenderWeek;
})(_react.Component);

exports['default'] = CalenderWeek;
module.exports = exports['default'];