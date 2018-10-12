/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./demo/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./demo/app.js":
/*!*********************!*\
  !*** ./demo/app.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./index.js\");\n\nvar lzyld = new _index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n//# sourceURL=webpack:///./demo/app.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _default; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// Polyfill Intersection Observer --------\n// official W3C\n// - https://github.com/w3c/IntersectionObserver/tree/master/polyfill\n// require('intersection-observer');\n// <script src=\"https://polyfill.io/v2/polyfill.min.js?features=IntersectionObserver\"></script>\n// default options\nvar defaults = {\n  src: 'data-lazy-src',\n  srcset: 'data-lazy-srcset',\n  selector: '.img--lazy',\n  loadedClass: 'is-loaded',\n  errorClass: 'is-error',\n  onLoaded: function onLoaded(element) {},\n  onError: function onError(element) {},\n  io: {\n    root: null,\n    rootMargin: '0px',\n    threshold: [0]\n  }\n};\n\nvar _default =\n/*#__PURE__*/\nfunction () {\n  function _default(options) {\n    var _this = this;\n\n    _classCallCheck(this, _default);\n\n    this.settings = Object.assign({}, defaults, options);\n    this.elements = document.querySelectorAll(this.settings.selector);\n    this.observer = new IntersectionObserver(function (entries) {\n      return _this.ioCallback(entries);\n    });\n    this.elements.forEach(function (element) {\n      return _this.observer.observe(element);\n    });\n    console.log({\n      window: window\n    });\n  }\n\n  _createClass(_default, [{\n    key: \"ioCallback\",\n    value: function ioCallback(entries) {\n      var _this2 = this;\n\n      entries.forEach(function (entry) {\n        if (entry.isIntersecting || entry.intersectionRatio > 0) {\n          var src = entry.target.getAttribute(_this2.settings.src);\n          var srcset = entry.target.getAttribute(_this2.settings.srcset);\n\n          _this2.loadImage(entry.target, {\n            src: src,\n            srcset: srcset\n          }, _this2.onImageLoaded, _this2.onImageError);\n        }\n      });\n    }\n  }, {\n    key: \"loadImage\",\n    value: function loadImage(el, attrs, done, error) {\n      var _this3 = this;\n\n      var img = new Image();\n      var type = el.tagName.toLowerCase();\n\n      img.onload = function () {\n        return _this3.onImageLoaded(el, type, attrs);\n      };\n\n      img.onerror = function () {\n        return _this3.onImageError(el);\n      };\n\n      img.src = attrs.src;\n    }\n  }, {\n    key: \"onImageLoaded\",\n    value: function onImageLoaded(el, type, attrs) {\n      if (type === 'img') {\n        el.src = attrs.src;\n        if (attrs.srcset) el.srcset = attrs.srcset;\n      } else {\n        el.style.backgroundImage = \"url(\".concat(attrs.src, \")\");\n      }\n\n      el.classList.add(this.settings.loadedClass);\n      this.settings.onLoaded(el);\n    }\n  }, {\n    key: \"onImageError\",\n    value: function onImageError(el) {\n      el.classList.add(this.settings.errorClass);\n      this.settings.onError(el);\n    }\n  }]);\n\n  return _default;\n}();\n\n\n;\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });