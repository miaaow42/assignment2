"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const album_list_1 = require("../Controller/album-list");
router.get('/album-list', album_list_1.DisplayAlbumList);
exports.default = router;
//# sourceMappingURL=album-list.js.map