;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-xiangyoujiantou" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M761.6 489.6l-432-435.2c-9.6-9.6-25.6-9.6-35.2 0-9.6 9.6-9.6 25.6 0 35.2l416 416-416 425.6c-9.6 9.6-9.6 25.6 0 35.2s25.6 9.6 35.2 0l432-441.6C771.2 515.2 771.2 499.2 761.6 489.6z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-xiangzuojiantou" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M729.6 931.2l-416-425.6 416-416c9.6-9.6 9.6-25.6 0-35.2-9.6-9.6-25.6-9.6-35.2 0l-432 435.2c-9.6 9.6-9.6 25.6 0 35.2l432 441.6c9.6 9.6 25.6 9.6 35.2 0C739.2 956.8 739.2 940.8 729.6 931.2z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-add" viewBox="0 0 1025 1024">'+
      ''+
      '<path d="M482.999 483.457v-8.588c0-109.098-0.008-218.2 0.011-327.297 0.005-14.223 6.694-24.505 18.563-28.789 17.465-6.301 36.32 5.997 37.622 24.573 0.176 2.522 0.093 5.062 0.098 7.595 0.005 108.318 0.005 216.64 0.005 324.959v7.544h7.938c108.514 0 217.030-0.016 325.544 0.055 4.247 0.005 8.65 0.215 12.719 1.305 12.871 3.46 20.968 15.676 19.966 29.361-0.958 13.066-11.007 23.679-24.163 25.328-3.078 0.386-6.216 0.414-9.328 0.414-107.929 0.020-215.862 0.016-323.791 0.016h-8.888v7.817c0 109.293 0.008 218.589-0.008 327.883-0.005 15.801-8.261 26.821-22.354 30.066-16.308 3.752-32.817-8.573-33.831-25.297-0.141-2.33-0.093-4.673-0.093-7.010-0.005-108.318-0.005-216.64-0.005-324.959v-8.101c-3.086-0.148-5.72-0.377-8.354-0.382-108.709-0.020-217.42-0.051-326.129 0.043-10.528 0.007-19.658-2.544-26.263-11.229-12.834-16.881-3.223-41.176 17.706-44.671 3.242-0.542 6.589-0.608 9.891-0.608 108.318-0.031 216.64-0.023 324.959-0.023h8.187z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
