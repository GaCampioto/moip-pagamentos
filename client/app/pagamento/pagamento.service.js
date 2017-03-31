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
var http_1 = require("@angular/http");
var PagamentoService = (function () {
    function PagamentoService(http) {
        this.http = http;
        this.headers = new http_1.Headers();
        this.headers.append('content-type', 'application/json');
        this.prefixUrl = '/v1/pedidos';
        this.suffixUrl = '/pagamentos';
    }
    PagamentoService.prototype.savePagamento = function (pagamento, pedidoId) {
        console.log('savePagamento: ' + JSON.stringify(pagamento));
        return this.http
            .post(this.prefixUrl + '/' + pedidoId + this.suffixUrl, JSON.stringify(pagamento), { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    PagamentoService.prototype.getAll = function () {
        return this.http
            .get(this.suffixUrl)
            .map(function (res) { return res.json(); });
    };
    return PagamentoService;
}());
PagamentoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PagamentoService);
exports.PagamentoService = PagamentoService;
//# sourceMappingURL=pagamento.service.js.map