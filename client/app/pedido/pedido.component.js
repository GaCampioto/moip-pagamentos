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
var customer_model_1 = require("../customer/customer.model");
var pedido_model_1 = require("../pedido/pedido.model");
var pedido_service_1 = require("../pedido/pedido.service");
var PedidoComponent = (function () {
    function PedidoComponent(pedidoService) {
        this.items = [];
        this.ownId = '';
        this.message = '';
        this.pedidoService = pedidoService;
        this.message = '';
    }
    PedidoComponent.prototype.ngOnInit = function () {
        this.pedido = new pedido_model_1.Pedido();
        this.pedido.customer = new customer_model_1.Customer();
        console.log(this.pedido.items);
        console.log(this.pedido.customer);
        console.log(this.pedido.ownId);
    };
    PedidoComponent.prototype.criarPedido = function () {
        var _this = this;
        event.preventDefault();
        console.log(this.pedido.items);
        console.log(this.pedido.customer);
        console.log(this.pedido.ownId);
        console.log(this.pedido);
        this.pedido.items = this.pedido.items.filter(function (product) { return product.quantity > 0; });
        this.pedidoService
            .savePedido(this.pedido)
            .subscribe(function () {
            _this.pedido = new pedido_model_1.Pedido();
            _this.message = 'Pedido criado com sucesso!';
        }, function (error) {
            console.log(error);
            _this.message = 'Erro ao criar pedido!';
        });
    };
    return PedidoComponent;
}());
PedidoComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'pedido',
        templateUrl: './pedido.component.html'
    }),
    __metadata("design:paramtypes", [pedido_service_1.PedidoService])
], PedidoComponent);
exports.PedidoComponent = PedidoComponent;
//# sourceMappingURL=pedido.component.js.map