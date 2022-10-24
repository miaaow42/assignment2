"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayContactListPage = void 0;
const contacts_1 = __importDefault(require("../Models/contacts"));
const Util_1 = require("../Util");
function DisplayContactListPage(req, res, next) {
    contacts_1.default.find(function (err, contactCollection) {
        if (err) {
            console.error(err.message);
            res.end(err);
        }
        res.render('index', { title: 'Contact List', page: 'business-contact-list', contacts: contactCollection, displayName: (0, Util_1.UserDisplayName)(req) });
    });
}
exports.DisplayContactListPage = DisplayContactListPage;
//# sourceMappingURL=business-contact-list.js.map