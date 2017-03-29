"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var pedido_model_1 = require("../pedido/pedido.model");
var http_1 = require("@angular/http");
var PedidoService = (function () {
    function PedidoService(http) {
        this.http = http;
        this.headers = new http_1.Headers();
        this.headers.append('Content-type', 'Application/JSON');
        this.headers.append('Authorization', 'Basic MDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDE6QUJBQkFCQUJBQkFCQUJBQkFCQUJBQkFCQUJBQkFCQUJBQkFCQUJBQg==');
        this.urlBackEnd = '/v1/pedidos';
        this.urlMoip = 'https://sandbox.moip.com.br/v2/orders';
    }
    PedidoService.prototype.savePedido = function (pedido) {
        var _this = this;
        var pedidoRequest = {
            items: pedido.items,
            customer: pedido.customer,
            ownId: pedido.ownId
        };
        console.log('Service -> ' + JSON.stringify(pedidoRequest));
        var response = new pedido_model_1.Pedido();
        this.http
            .post(this.urlMoip, JSON.stringify(pedidoRequest), { headers: this.headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            response = res;
            console.log(response);
            _this.savePedidoBackEnd(response)
                .subscribe(function (res) {
                console.log(res.json());
            }, function (error) { return console.log(error); });
        }, function (error) { return console.log(error); });
    };
    PedidoService.prototype.savePedidoBackEnd = function (pedido) {
        console.log('savePedidoBackEnd: ' + JSON.stringify(pedido));
        return this.http
            .post(this.urlBackEnd, JSON.stringify(pedido), { headers: this.headers });
    };
    PedidoService.prototype.getAll = function () {
        return this.http
            .get(this.urlBackEnd)
            .map(function (res) { return res.json(); });
    };
    return PedidoService;
}());
PedidoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PedidoService);
exports.PedidoService = PedidoService;
//# sourceMappingURL=pedido.service.js.map