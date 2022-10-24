"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessDeleteContactPage = void 0;
const contacts_1 = __importDefault(require("../Models/contacts"));
function ProcessDeleteContactPage(req, res, next) {
    let id = req.params.id;
    contacts_1.default.remove({ _id: id }, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('business-contact-list');
        }
    });
}
exports.ProcessDeleteContactPage = ProcessDeleteContactPage;
//# sourceMappingURL=delete-contact.js.map