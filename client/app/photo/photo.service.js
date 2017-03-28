"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
var PhotoService = (function () {
    function PhotoService(http) {
        this.http = http;
        this.headers = new http_1.Headers();
        this.headers.append('Content-type', 'Application/JSON');
        this.url = 'v1/fotos';
    }
    PhotoService.prototype.save = function (photo) {
        return this.http
            .post(this.url, JSON.stringify(photo), { headers: this.headers });
    };
    PhotoService.prototype.getAll = function () {
        return this.http
            .get(this.url)
            .map(function (res) { return res.json(); });
    };
    return PhotoService;
}());
exports.PhotoService = PhotoService;
//# sourceMappingURL=photo.service.js.map