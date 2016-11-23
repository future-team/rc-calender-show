'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./less/index.less');

var CalenderMonth = (function (_Component) {
    _inherits(CalenderMonth, _Component);

    _createClass(CalenderMonth, null, [{
        key: 'propTypes',
        value: {
            activeMonth: _react.PropTypes.number,
            selectCallback: _react.PropTypes['function']
        },
        enumerable: true
    }]);

    function CalenderMonth(props, context) {
        _classCallCheck(this, CalenderMonth);

        _Component.call(this, props, context);
        this.state = {
            activeMonth: props.activeMonth
        };
        this.selectMonth = this.selectMonth.bind(this);
    }

    CalenderMonth.prototype.componentWillMount = function componentWillMount() {};

    CalenderMonth.prototype.componentDidMount = function componentDidMount() {};

    CalenderMonth.prototype.componentWillReceiveProps = function componentWillReceiveProps() {};

    CalenderMonth.prototype.selectMonth = function selectMonth(e) {
        this.setState({
            activeMonth: 2
        });
        this.props.selectCallback.call(e, this.state.activeMonth);
    };

    CalenderMonth.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
        return true;
    };

    CalenderMonth.prototype.render = function render() {
        return _react2['default'].createElement(
            'div',
            { className: 'rcs-month' },
            _react2['default'].createElement(
                'ul',
                { onClick: this.selectMonth },
                _react2['default'].createElement(
                    'li',
                    null,
                    _react2['default'].createElement(
                        'span',
                        null,
                        '1月'
                    )
                ),
                _react2['default'].createElement(
                    'li',
                    null,
                    _react2['default'].createElement(
                        'span',
                        null,
                        '2月'
                    )
                ),
                _react2['default'].createElement(
                    'li',
                    null,
                    _react2['default'].createElement(
                        'span',
                        null,
                        '3月'
                    )
                ),
                _react2['default'].createElement(
                    'li',
                    null,
                    _react2['default'].createElement(
                        'span',
                        null,
                        '4月'
                    )
                ),
                _react2['default'].createElement(
                    'li',
                    { className: 'active' },
                    _react2['default'].createElement(
                        'span',
                        null,
                        '5月'
                    )
                ),
                _react2['default'].createElement(
                    'li',
                    null,
                    _react2['default'].createElement(
                        'span',
                        null,
                        '6月'
                    )
                ),
                _react2['default'].createElement(
                    'li',
                    null,
                    _react2['default'].createElement(
                        'span',
                        null,
                        '7月'
                    )
                ),
                _react2['default'].createElement(
                    'li',
                    null,
                    _react2['default'].createElement(
                        'span',
                        null,
                        '8月'
                    )
                ),
                _react2['default'].createElement(
                    'li',
                    null,
                    _react2['default'].createElement(
                        'span',
                        null,
                        '9月'
                    )
                ),
                _react2['default'].createElement(
                    'li',
                    null,
                    _react2['default'].createElement(
                        'span',
                        null,
                        '10月'
                    )
                ),
                _react2['default'].createElement(
                    'li',
                    null,
                    _react2['default'].createElement(
                        'span',
                        null,
                        '11月'
                    )
                ),
                _react2['default'].createElement(
                    'li',
                    null,
                    _react2['default'].createElement(
                        'span',
                        null,
                        '12月'
                    )
                )
            )
        );
    };

    return CalenderMonth;
})(_react.Component);

exports['default'] = CalenderMonth;
module.exports = exports['default'];