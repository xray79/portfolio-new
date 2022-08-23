"use strict";
(() => {
var exports = {};
exports.id = 237;
exports.ids = [237];
exports.modules = {

/***/ 970:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ api)
});

;// CONCATENATED MODULE: external "mongoose"
const external_mongoose_namespaceObject = require("mongoose");
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_namespaceObject);
;// CONCATENATED MODULE: ./model/messageModel.js

const messagesSchema = (0,external_mongoose_namespaceObject.Schema)({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    message: {
        type: String
    }
}, {
    timestamps: true
});
/* harmony default export */ const messageModel = (external_mongoose_namespaceObject.models.Message || (0,external_mongoose_namespaceObject.model)("Message", messagesSchema));

;// CONCATENATED MODULE: ./pages/api/index.js


// connect to DB
const connectDB = async ()=>{
    try {
        const conn = await external_mongoose_default().connect(process.env.MONGO_URI);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};
connectDB();
// @desc    Post message
// @route   POST /api
// @access  Public
const postMessages = async (req, res)=>{
    const message = await messageModel.create(req.body.data);
    res.status(201).json(message);
};
/* harmony default export */ const api = (postMessages);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(970));
module.exports = __webpack_exports__;

})();