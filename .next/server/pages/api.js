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
exports.id = "pages/api";
exports.ids = ["pages/api"];
exports.modules = {

/***/ "./model/messageModel.js":
/*!*******************************!*\
  !*** ./model/messageModel.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst messagesSchema = (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema)({\n    firstName: {\n        type: String\n    },\n    lastName: {\n        type: String\n    },\n    email: {\n        type: String\n    },\n    message: {\n        type: String\n    }\n}, {\n    timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Message || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"Message\", messagesSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2RlbC9tZXNzYWdlTW9kZWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWlEO0FBRWpELE1BQU1HLGNBQWMsR0FBR0gsZ0RBQU0sQ0FDM0I7SUFDRUksU0FBUyxFQUFFO1FBQ1RDLElBQUksRUFBRUMsTUFBTTtLQUNiO0lBQ0RDLFFBQVEsRUFBRTtRQUNSRixJQUFJLEVBQUVDLE1BQU07S0FDYjtJQUNERSxLQUFLLEVBQUU7UUFDTEgsSUFBSSxFQUFFQyxNQUFNO0tBQ2I7SUFDREcsT0FBTyxFQUFFO1FBQ1BKLElBQUksRUFBRUMsTUFBTTtLQUNiO0NBQ0YsRUFDRDtJQUNFSSxVQUFVLEVBQUUsSUFBSTtDQUNqQixDQUNGO0FBRUQsaUVBQWVSLG9EQUFjLElBQUlELCtDQUFLLENBQUMsU0FBUyxFQUFFRSxjQUFjLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3QvLi9tb2RlbC9tZXNzYWdlTW9kZWwuanM/OTI5ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2hlbWEsIG1vZGVsLCBtb2RlbHMgfSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgbWVzc2FnZXNTY2hlbWEgPSBTY2hlbWEoXG4gIHtcbiAgICBmaXJzdE5hbWU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICB9LFxuICAgIGxhc3ROYW1lOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgfSxcbiAgICBlbWFpbDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgIH0sXG4gICAgbWVzc2FnZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICB0aW1lc3RhbXBzOiB0cnVlLFxuICB9XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBtb2RlbHMuTWVzc2FnZSB8fCBtb2RlbChcIk1lc3NhZ2VcIiwgbWVzc2FnZXNTY2hlbWEpO1xuIl0sIm5hbWVzIjpbIlNjaGVtYSIsIm1vZGVsIiwibW9kZWxzIiwibWVzc2FnZXNTY2hlbWEiLCJmaXJzdE5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwibGFzdE5hbWUiLCJlbWFpbCIsIm1lc3NhZ2UiLCJ0aW1lc3RhbXBzIiwiTWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./model/messageModel.js\n");

/***/ }),

/***/ "./pages/api/index.js":
/*!****************************!*\
  !*** ./pages/api/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _model_messageModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/messageModel */ \"./model/messageModel.js\");\n\n// import dotenv from \"dotenv\";\n\n// add env files\n// dotenv.config();\n// connect to DB\nconst connectDB = async ()=>{\n    try {\n        const conn = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO_URI);\n    } catch (error) {\n        console.log(error);\n        process.exit(1);\n    }\n};\nconnectDB();\n// @desc    Post message\n// @route   POST api/\n// @access  Public\nconst postMessages = async (req, res)=>{\n    const message = await _model_messageModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create(req.body.data);\n    res.status(201).json(message);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postMessages);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFnQztBQUNoQywrQkFBK0I7QUFDZ0I7QUFFL0MsZ0JBQWdCO0FBQ2hCLG1CQUFtQjtBQUVuQixnQkFBZ0I7QUFDaEIsTUFBTUUsU0FBUyxHQUFHLFVBQVk7SUFDNUIsSUFBSTtRQUNGLE1BQU1DLElBQUksR0FBRyxNQUFNSCx1REFBZ0IsQ0FBQ0ssT0FBTyxDQUFDQyxHQUFHLENBQUNDLFNBQVMsQ0FBQztLQUMzRCxDQUFDLE9BQU9DLEtBQUssRUFBRTtRQUNkQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDLENBQUM7UUFDbkJILE9BQU8sQ0FBQ00sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2pCO0NBQ0Y7QUFDRFQsU0FBUyxFQUFFLENBQUM7QUFFWix3QkFBd0I7QUFDeEIscUJBQXFCO0FBQ3JCLGtCQUFrQjtBQUNsQixNQUFNVSxZQUFZLEdBQUcsT0FBT0MsR0FBRyxFQUFFQyxHQUFHLEdBQUs7SUFDdkMsTUFBTUMsT0FBTyxHQUFHLE1BQU1kLGtFQUFjLENBQUNZLEdBQUcsQ0FBQ0ksSUFBSSxDQUFDQyxJQUFJLENBQUM7SUFDbkRKLEdBQUcsQ0FBQ0ssTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNMLE9BQU8sQ0FBQyxDQUFDO0NBQy9CO0FBRUQsaUVBQWVILFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3QvLi9wYWdlcy9hcGkvaW5kZXguanM/YzVmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG4vLyBpbXBvcnQgZG90ZW52IGZyb20gXCJkb3RlbnZcIjtcbmltcG9ydCBNZXNzYWdlIGZyb20gXCIuLi8uLi9tb2RlbC9tZXNzYWdlTW9kZWxcIjtcblxuLy8gYWRkIGVudiBmaWxlc1xuLy8gZG90ZW52LmNvbmZpZygpO1xuXG4vLyBjb25uZWN0IHRvIERCXG5jb25zdCBjb25uZWN0REIgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgY29ubiA9IGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09fVVJJKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgcHJvY2Vzcy5leGl0KDEpO1xuICB9XG59O1xuY29ubmVjdERCKCk7XG5cbi8vIEBkZXNjICAgIFBvc3QgbWVzc2FnZVxuLy8gQHJvdXRlICAgUE9TVCBhcGkvXG4vLyBAYWNjZXNzICBQdWJsaWNcbmNvbnN0IHBvc3RNZXNzYWdlcyA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCBtZXNzYWdlID0gYXdhaXQgTWVzc2FnZS5jcmVhdGUocmVxLmJvZHkuZGF0YSk7XG4gIHJlcy5zdGF0dXMoMjAxKS5qc29uKG1lc3NhZ2UpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcG9zdE1lc3NhZ2VzO1xuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiTWVzc2FnZSIsImNvbm5lY3REQiIsImNvbm4iLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIk1PTkdPX1VSSSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImV4aXQiLCJwb3N0TWVzc2FnZXMiLCJyZXEiLCJyZXMiLCJtZXNzYWdlIiwiY3JlYXRlIiwiYm9keSIsImRhdGEiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/index.js\n");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/index.js"));
module.exports = __webpack_exports__;

})();