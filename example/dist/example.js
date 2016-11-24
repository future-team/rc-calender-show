(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react/lib/ReactDOM"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react/lib/ReactDOM"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("react/lib/ReactDOM")) : factory(root["React"], root["ReactDom"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactLibReactDOM = __webpack_require__(3);
	
	var _reactLibReactDOM2 = _interopRequireDefault(_reactLibReactDOM);
	
	var _srcIndexJs = __webpack_require__(4);
	
	var _srcIndexJs2 = _interopRequireDefault(_srcIndexJs);
	
	// import CalenderShow from '../../dist/rc-calender-show.js'
	// import '../../dist/rc-calender-show.css'
	
	__webpack_require__(6);
	
	var Demo = (function (_Component) {
	    _inherits(Demo, _Component);
	
	    _createClass(Demo, null, [{
	        key: 'propTypes',
	        value: {
	            date: _react.PropTypes.object
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            date: new Date()
	        },
	        enumerable: true
	    }]);
	
	    function Demo(props, context) {
	        _classCallCheck(this, Demo);
	
	        _Component.call(this, props, context);
	        this.state = {
	            defaultDate: null,
	            date: null
	        };
	    }
	
	    Demo.prototype.componentWillMount = function componentWillMount() {};
	
	    Demo.prototype.componentDidMount = function componentDidMount() {};
	
	    Demo.prototype.componentWillReceiveProps = function componentWillReceiveProps() {};
	
	    Demo.prototype.dateChanged = function dateChanged(date) {
	        this.setState({
	            date: date
	        });
	    };
	
	    Demo.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
	        return true;
	    };
	
	    Demo.prototype.renderList = function renderList() {
	        var date = this.state.date;
	        return date ? _react2['default'].createElement(
	            'p',
	            null,
	            '这个列表渲染呢的时间为',
	            date.getFullYear(),
	            ' - ',
	            date.getMonth() + 1,
	            ' - ',
	            date.getDate()
	        ) : _react2['default'].createElement(
	            'p',
	            null,
	            _react2['default'].createElement(
	                'strong',
	                null,
	                '出错啦！'
	            )
	        );
	    };
	
	    Demo.prototype.render = function render() {
	        var _this = this;
	
	        return _react2['default'].createElement(
	            'div',
	            { className: 'rcs-demo' },
	            this.state.date && _react2['default'].createElement(
	                'p',
	                null,
	                '你选择的日期是：',
	                this.state.date.getFullYear(),
	                ',',
	                this.state.date.getMonth() + 1,
	                ',',
	                this.state.date.getDate()
	            ),
	            _react2['default'].createElement(
	                _srcIndexJs2['default'],
	                { dateChanged: function (date) {
	                        _this.dateChanged(date);
	                    }, defaultDate: this.state.defaultDate },
	                this.renderList()
	            )
	        );
	    };
	
	    return Demo;
	})(_react.Component);
	
	_reactLibReactDOM2['default'].render(_react2['default'].createElement(Demo, null), document.getElementById('root'));

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	__webpack_require__(5);
	
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
	        this.props.dateChanged(this.state.activeDate);
	    }
	
	    CalenderShow.prototype.componentWillMount = function componentWillMount() {};
	
	    CalenderShow.prototype.componentDidMount = function componentDidMount() {};
	
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
	
	        var yearMonth = activeDate.getFullYear() + ' - ' + (activeDate.getMonth() + 1);
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

/***/ },
/* 5 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 6 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ])
});
;