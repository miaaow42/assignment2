"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayAlbumList = void 0;
const album_1 = __importDefault(require("../Models/album"));
function DisplayAlbumList(req, res, next) {
    album_1.default.find(function (err, albumCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Album List', page: 'album-list', album: albumCollection, displayName: '' });
    });
}
exports.DisplayAlbumList = DisplayAlbumList;
//# sourceMappingURL=album-list.js.map