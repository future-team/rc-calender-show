'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./less/index.less');

var CalenderYear = (function (_Component) {
    _inherits(CalenderYear, _Component);

    _createClass(CalenderYear, null, [{
        key: 'propTypes',
        value: {
            maxYear: _react.PropTypes.number,
            minYear: _react.PropTypes.number,
            year: _react.PropTypes.number,
            changeCallback: _react.PropTypes['function']
        },
        enumerable: true
    }]);

    function CalenderYear(props, context) {
        _classCallCheck(this, CalenderYear);

        _Component.call(this, props, context);
        this.state = {
            year: props.year
        };
    }

    CalenderYear.prototype.componentWillMount = function componentWillMount() {};

    CalenderYear.prototype.componentDidMount = function componentDidMount() {};

    CalenderYear.prototype.componentWillReceiveProps = function componentWillReceiveProps() {};

    CalenderYear.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
        return true;
    };

    CalenderYear.prototype.prevYear = function prevYear(e) {
        var curYear = this.state.year - 1;
        if (curYear < this.props.minYear) {
            return false;
        }
        this.setState({
            year: curYear
        });
        this.props.changeCallback(e, this.state.year);
    };

    CalenderYear.prototype.nextYear = function nextYear(e) {
        var curYear = this.state.year + 1;
        if (curYear > this.props.maxYear) {
            return false;
        }
        this.setState({
            year: curYear
        });
        this.props.changeCallback(e, this.state.year);
    };

    CalenderYear.prototype.render = function render() {
        return _react2['default'].createElement(
            'div',
            { className: 'rcs-year' },
            _react2['default'].createElement('i', { className: 'rcs-iconfont next', onClick: this.nextYear.bind(this) }),
            _react2['default'].createElement('i', { className: 'rcs-iconfont prev', onClick: this.prevYear.bind(this) }),
            _react2['default'].createElement(
                'span',
                { className: 'content' },
                this.state.year
            )
        );
    };

    return CalenderYear;
})(_react.Component);

exports['default'] = CalenderYear;
module.exports = exports['default'];