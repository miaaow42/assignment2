"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessUpdateContactPage = exports.DisplayUpdateContactPage = void 0;
const contacts_1 = __importDefault(require("../Models/contacts"));
const Util_1 = require("../Util");
function DisplayUpdateContactPage(req, res, next) {
    let id = req.params.id;
    contacts_1.default.findById(id, (err, contactToUpdate) => {
        if (err) {
            console.error(err.message);
            res.end(err);
        }
        res.render('index', { title: 'Update Contact', page: 'update-contact', contacts: contactToUpdate, displayName: (0, Util_1.UserDisplayName)(req) });
    });
}
exports.DisplayUpdateContactPage = DisplayUpdateContactPage;
function ProcessUpdateContactPage(req, res, next) {
    let id = req.params.id;
    console.log(req.body);
    let updateContact = new contacts_1.default({
        id: id,
        Name: req.body.Name,
        Number: req.body.Number,
        Email: req.body.Email
    });
    contacts_1.default.updateOne(updateContact._id, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('business-contact-list');
        }
    });
}
exports.ProcessUpdateContactPage = ProcessUpdateContactPage;
//# sourceMappingURL=update-contact.js.map