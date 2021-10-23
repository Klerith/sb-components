"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggedOut = exports.LoggedIn = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Header_1 = require("./Header");
exports.default = {
    title: 'Example/Header',
    component: Header_1.Header,
};
var Template = function (args) { return (0, jsx_runtime_1.jsx)(Header_1.Header, __assign({}, args), void 0); };
exports.LoggedIn = Template.bind({});
exports.LoggedIn.args = {
    user: {},
};
exports.LoggedOut = Template.bind({});
exports.LoggedOut.args = {};
