"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayAlbumListPage = void 0;
const album_1 = __importDefault(require("../Models/album"));
const Util_1 = require("../Util");
function DisplayAlbumListPage(req, res, next) {
    album_1.default.find(function (err, albumCollection) {
        if (err) {
            console.error(err.message);
            res.end(err);
        }
        res.render('index', { title: 'Album List', page: 'album-list', movies: albumCollection, displayName: (0, Util_1.UserDisplayName)(req) });
    });
}
exports.DisplayAlbumListPage = DisplayAlbumListPage;
//# sourceMappingURL=album-list.js.map