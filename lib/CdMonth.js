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
    }

    CalenderMonth.prototype.componentWillMount = function componentWillMount() {};

    CalenderMonth.prototype.componentDidMount = function componentDidMount() {};

    CalenderMonth.prototype.componentWillReceiveProps = function componentWillReceiveProps() {};

    CalenderMonth.prototype.selectMonth = function selectMonth(e) {
        var month = parseInt(e.currentTarget.dataset.month);
        this.setState({
            activeMonth: month
        });
        this.props.selectCallback(e, this.state.activeMonth);
    };

    CalenderMonth.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
        return true;
    };

    CalenderMonth.prototype.render = function render() {
        var _this = this;

        return _react2['default'].createElement(
            'div',
            { className: 'rcs-month' },
            _react2['default'].createElement(
                'ul',
                { className: 'clearfix rcs-month-list' },
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(function (index) {
                    return _react2['default'].createElement(
                        'li',
                        { key: index, onClick: _this.selectMonth.bind(_this), 'data-month': index, className: 'rcs-month-item ' + (index == _this.state.activeMonth ? 'active' : '') },
                        _react2['default'].createElement(
                            'span',
                            { className: 'rcs-month-content' },
                            index,
                            '月'
                        )
                    );
                })
            )
        );
    };

    return CalenderMonth;
})(_react.Component);

exports['default'] = CalenderMonth;
module.exports = exports['default'];