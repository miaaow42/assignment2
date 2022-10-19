"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const AlbumSchema = new Schema({
    Name: String,
    Year: String,
    Singer: String,
    Rating: String
}, {
    collection: "album"
});
const Model = mongoose_1.default.model("Album", AlbumSchema);
exports.default = Model;
//# sourceMappingURL=album.js.map