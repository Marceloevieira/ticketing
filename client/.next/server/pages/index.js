"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./api/build-client.js":
/*!*****************************!*\
  !*** ./api/build-client.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ req  })=>{\n    if (true) {\n        return axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n            baseURL: \"http://ingress-nginx-controller.ingress-nginx.svc.cluster.local\",\n            headers: req.headers\n        });\n    } else {}\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkvYnVpbGQtY2xpZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQjtBQUUxQixpRUFBZSxDQUFDLEVBQUVDLEdBQUcsR0FBRSxHQUFLO0lBQzFCLElBQUksSUFBNkIsRUFBQztRQUVoQyxPQUFPRCxtREFBWSxDQUFDO1lBQ2xCRyxPQUFPLEVBQUUsaUVBQWlFO1lBQzFFQyxPQUFPLEVBQUVILEdBQUcsQ0FBQ0csT0FBTztTQUNyQixDQUFDO0tBQ0gsTUFBTSxFQUlOO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9hcGkvYnVpbGQtY2xpZW50LmpzP2M2ZjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHsgcmVxIH0pID0+IHtcclxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpe1xyXG5cclxuICAgIHJldHVybiBheGlvcy5jcmVhdGUoe1xyXG4gICAgICBiYXNlVVJMOiAnaHR0cDovL2luZ3Jlc3MtbmdpbngtY29udHJvbGxlci5pbmdyZXNzLW5naW54LnN2Yy5jbHVzdGVyLmxvY2FsJyxcclxuICAgICAgaGVhZGVyczogcmVxLmhlYWRlcnNcclxuICAgIH0pXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBheGlvcy5jcmVhdGUoe1xyXG4gICAgICBiYXNlVVJMOiAnLydcclxuICAgIH0pXHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbImF4aW9zIiwicmVxIiwiY3JlYXRlIiwiYmFzZVVSTCIsImhlYWRlcnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./api/build-client.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_build_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/build-client */ \"./api/build-client.js\");\n\n\nconst landingPage = ({ currentUser  })=>{\n    return currentUser ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"You are signed in\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\marce\\\\Documents\\\\TYPESCRIPT\\\\ticketing\\\\client\\\\pages\\\\index.js\",\n        lineNumber: 6,\n        columnNumber: 23\n    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"You are NOT signed in\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\marce\\\\Documents\\\\TYPESCRIPT\\\\ticketing\\\\client\\\\pages\\\\index.js\",\n        lineNumber: 6,\n        columnNumber: 52\n    }, undefined);\n};\nlandingPage.getInitialProps = async (context)=>{\n    const client = (0,_api_build_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(context);\n    try {\n        const { data  } = await client.get(\"/api/users/currentuser\");\n        return data;\n    } catch (error) {}\n    return {};\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (landingPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBOEM7QUFHOUMsTUFBTUMsV0FBVyxHQUFHLENBQUMsRUFBRUMsV0FBVyxHQUFFLEdBQUs7SUFFdkMsT0FBT0EsV0FBVyxpQkFBRSw4REFBQ0MsSUFBRTtrQkFBQyxtQkFBaUI7Ozs7O2lCQUFLLGlCQUFHLDhEQUFDQSxJQUFFO2tCQUFDLHVCQUFxQjs7Ozs7aUJBQUssQ0FBQztDQUNqRjtBQUVERixXQUFXLENBQUNHLGVBQWUsR0FBSSxPQUFRQyxPQUFPLEdBQU07SUFDbEQsTUFBTUMsTUFBTSxHQUFHTiw2REFBVyxDQUFDSyxPQUFPLENBQUM7SUFDbkMsSUFBSTtRQUNGLE1BQU0sRUFBRUUsSUFBSSxHQUFFLEdBQUcsTUFBTUQsTUFBTSxDQUFDRSxHQUFHLENBQUMsd0JBQXdCLENBQUM7UUFDM0QsT0FBT0QsSUFBSSxDQUFDO0tBQ2IsQ0FBQyxPQUFPRSxLQUFLLEVBQUUsRUFFZjtJQUVELE9BQU8sRUFBRSxDQUFDO0NBQ1g7QUFFRCxpRUFBZVIsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYnVpbGRDbGllbnQgZnJvbSBcIi4uL2FwaS9idWlsZC1jbGllbnRcIjtcclxuXHJcblxyXG5jb25zdCBsYW5kaW5nUGFnZSA9ICh7IGN1cnJlbnRVc2VyIH0pID0+IHtcclxuXHJcbiAgcmV0dXJuIGN1cnJlbnRVc2VyPyA8aDE+WW91IGFyZSBzaWduZWQgaW48L2gxPiA6IDxoMT5Zb3UgYXJlIE5PVCBzaWduZWQgaW48L2gxPjtcclxufVxyXG5cclxubGFuZGluZ1BhZ2UuZ2V0SW5pdGlhbFByb3BzID0gIGFzeW5jICggY29udGV4dCApID0+IHtcclxuICBjb25zdCBjbGllbnQgPSBidWlsZENsaWVudChjb250ZXh0KTtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQuZ2V0KCcvYXBpL3VzZXJzL2N1cnJlbnR1c2VyJyk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICByZXR1cm4ge307XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxhbmRpbmdQYWdlOyJdLCJuYW1lcyI6WyJidWlsZENsaWVudCIsImxhbmRpbmdQYWdlIiwiY3VycmVudFVzZXIiLCJoMSIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJjbGllbnQiLCJkYXRhIiwiZ2V0IiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();