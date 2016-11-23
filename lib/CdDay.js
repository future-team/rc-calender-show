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
            days: _react.PropTypes.number,
            changeCallback: _react.PropTypes['function']
        },
        enumerable: true
    }]);

    function CalenderDay(props, context) {
        _classCallCheck(this, CalenderDay);

        _Component.call(this, props, context);
        this.state = {
            startDay: 1,
            endDay: 7
        };
        this.prevWeek = this.prevWeek.bind(this);
        this.nextWeek = this.nextWeek.bind(this);
    }

    CalenderDay.prototype.componentWillMount = function componentWillMount() {};

    CalenderDay.prototype.componentDidMount = function componentDidMount() {};

    CalenderDay.prototype.componentWillReceiveProps = function componentWillReceiveProps() {};

    CalenderDay.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
        return true;
    };

    CalenderDay.prototype.prevWeek = function prevWeek(e) {
        this.props.changeCallback.call(e, this.state.days);
    };

    CalenderDay.prototype.nextWeek = function nextWeek(e) {
        this.props.changeCallback.call(e, this.state.days);
    };

    CalenderDay.prototype.render = function render() {
        return _react2['default'].createElement(
            'div',
            { className: 'rcs-day' },
            _react2['default'].createElement('i', { className: 'iconfont prev', onClick: this.prevWeek.bind(this) }),
            _react2['default'].createElement('i', { className: 'iconfont next', onCLick: this.nextWeek.bind(this) }),
            _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(
                    'span',
                    { className: 'start' },
                    this.state.startDay
                ),
                _react2['default'].createElement(
                    'span',
                    { className: 'split' },
                    '------'
                ),
                _react2['default'].createElement(
                    'span',
                    { className: 'end' },
                    this.state.endDay
                )
            )
        );
    };

    return CalenderDay;
})(_react.Component);

exports['default'] = CalenderDay;
module.exports = exports['default'];