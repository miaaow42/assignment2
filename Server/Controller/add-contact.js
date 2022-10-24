"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessAddContactPage = exports.DisplayAddContactPage = void 0;
const contacts_1 = __importDefault(require("../Models/contacts"));
const Util_1 = require("../Util");
function DisplayAddContactPage(req, res, next) {
    contacts_1.default.find(function (err, addContactCollection) {
        if (err) {
            console.error(err.message);
            res.end(err);
        }
        res.render('index', { title: 'Add Contact', page: 'add-contact', contacts: addContactCollection, displayName: (0, Util_1.UserDisplayName)(req) });
    });
}
exports.DisplayAddContactPage = DisplayAddContactPage;
function ProcessAddContactPage(req, res, next) {
    let newContact = new contacts_1.default({
        Name: req.body.Name,
        Number: req.body.Number,
        Email: req.body.Email
    });
    contacts_1.default.create(newContact, (err, Contacts) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('business-contact-list');
        }
    });
}
exports.ProcessAddContactPage = ProcessAddContactPage;
//# sourceMappingURL=add-contact.js.map