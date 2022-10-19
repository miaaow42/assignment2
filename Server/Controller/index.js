"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayAlbumList = exports.DisplayContactPage = exports.DisplayServicesPage = exports.DisplayProjectPage = exports.DisplayAboutPage = exports.DisplayHomePage = void 0;
function DisplayHomePage(req, res, next) {
    res.render('index', { title: 'About Me', page: 'about' });
}
exports.DisplayHomePage = DisplayHomePage;
function DisplayAboutPage(req, res, next) {
    res.render('index', { title: 'About Me', page: 'about' });
}
exports.DisplayAboutPage = DisplayAboutPage;
function DisplayProjectPage(req, res, next) {
    res.render('index', { title: 'My Projects', page: 'projects' });
}
exports.DisplayProjectPage = DisplayProjectPage;
function DisplayServicesPage(req, res, next) {
    res.render('index', { title: 'Services', page: 'services' });
}
exports.DisplayServicesPage = DisplayServicesPage;
function DisplayContactPage(req, res, next) {
    res.render('index', { title: 'Contact Me', page: 'contact' });
}
exports.DisplayContactPage = DisplayContactPage;
const album_1 = __importDefault(require("../Models/album"));
function DisplayAlbumList(req, res, next) {
    album_1.default.find(function (err, albumCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Album List', page: 'album-list', album: albumCollection });
    });
}
exports.DisplayAlbumList = DisplayAlbumList;
//# sourceMappingURL=index.js.map