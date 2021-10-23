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
exports.Page = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Header_1 = require("./Header");
require("./page.css");
var Page = function (_a) {
    var user = _a.user, onLogin = _a.onLogin, onLogout = _a.onLogout, onCreateAccount = _a.onCreateAccount;
    return ((0, jsx_runtime_1.jsxs)("article", { children: [(0, jsx_runtime_1.jsx)(Header_1.Header, { user: user, onLogin: onLogin, onLogout: onLogout, onCreateAccount: onCreateAccount }, void 0), (0, jsx_runtime_1.jsxs)("section", { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Pages in Storybook" }, void 0), (0, jsx_runtime_1.jsxs)("p", { children: ["We recommend building UIs with a", ' ', (0, jsx_runtime_1.jsx)("a", __assign({ href: "https://componentdriven.org", target: "_blank", rel: "noopener noreferrer" }, { children: (0, jsx_runtime_1.jsx)("strong", { children: "component-driven" }, void 0) }), void 0), ' ', "process starting with atomic components and ending with pages."] }, void 0), (0, jsx_runtime_1.jsx)("p", { children: "Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook:" }, void 0), (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsx)("li", { children: "Use a higher-level connected component. Storybook helps you compose such data from the \"args\" of child component stories" }, void 0), (0, jsx_runtime_1.jsx)("li", { children: "Assemble data in the page component from your services. You can mock these services out using Storybook." }, void 0)] }, void 0), (0, jsx_runtime_1.jsxs)("p", { children: ["Get a guided tutorial on component-driven development at", ' ', (0, jsx_runtime_1.jsx)("a", __assign({ href: "https://storybook.js.org/tutorials/", target: "_blank", rel: "noopener noreferrer" }, { children: "Storybook tutorials" }), void 0), ". Read more in the", ' ', (0, jsx_runtime_1.jsx)("a", __assign({ href: "https://storybook.js.org/docs", target: "_blank", rel: "noopener noreferrer" }, { children: "docs" }), void 0), "."] }, void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "tip-wrapper" }, { children: [(0, jsx_runtime_1.jsx)("span", __assign({ className: "tip" }, { children: "Tip" }), void 0), " Adjust the width of the canvas with the", ' ', (0, jsx_runtime_1.jsx)("svg", __assign({ width: "10", height: "10", viewBox: "0 0 12 12", xmlns: "http://www.w3.org/2000/svg" }, { children: (0, jsx_runtime_1.jsx)("g", __assign({ fill: "none", fillRule: "evenodd" }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z", id: "a", fill: "#999" }, void 0) }), void 0) }), void 0), "Viewports addon in the toolbar"] }), void 0)] }, void 0)] }, void 0));
};
exports.Page = Page;
