"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessLogoutPage = exports.ProcessLoginPage = exports.ProcessRegisterPage = exports.DisplayRegisterPage = exports.DisplayLoginPage = void 0;
function DisplayLoginPage(req, res, next) {
    res.render('index', { title: 'Login', page: 'login', messages: req.flash('loginMessage'), displayName: '' });
}
exports.DisplayLoginPage = DisplayLoginPage;
function DisplayRegisterPage(req, res, next) {
    res.render('index', { title: 'Register', page: 'Register', messages: req.flash('RegisterMessage'), displayName: '' });
}
exports.DisplayRegisterPage = DisplayRegisterPage;
function ProcessRegisterPage(req, res, next) {
}
exports.ProcessRegisterPage = ProcessRegisterPage;
function ProcessLoginPage(req, res, next) {
}
exports.ProcessLoginPage = ProcessLoginPage;
function ProcessLogoutPage(req, res, next) {
}
exports.ProcessLogoutPage = ProcessLogoutPage;
//# sourceMappingURL=auth.js.map