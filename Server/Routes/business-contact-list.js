"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const Util_1 = require("../Util");
const business_contact_list_1 = require("../Controller/business-contact-list");
const add_contact_1 = require("../Controller/add-contact");
const add_contact_2 = require("../Controller/add-contact");
const update_contact_1 = require("../Controller/update-contact");
const update_contact_2 = require("../Controller/update-contact");
const delete_contact_1 = require("../Controller/delete-contact");
router.get('/business-contact-list', Util_1.AuthGuard, business_contact_list_1.DisplayContactListPage);
router.get('/add-contact', add_contact_1.DisplayAddContactPage);
router.post('/add-contact', add_contact_2.ProcessAddContactPage);
router.get('/update-contact:id', update_contact_1.DisplayUpdateContactPage);
router.post('/update-contact:id', update_contact_2.ProcessUpdateContactPage);
router.get('/delete-contact:id', delete_contact_1.ProcessDeleteContactPage);
exports.default = router;
//# sourceMappingURL=business-contact-list.js.map