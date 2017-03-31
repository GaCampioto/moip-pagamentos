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
var pedido_service_1 = require("../pedido/pedido.service");
var pagamento_model_1 = require("../pagamento/pagamento.model");
var pagamento_service_1 = require("../pagamento/pagamento.service");
var router_1 = require("@angular/router");
var PagamentoComponent = (function () {
    function PagamentoComponent(pedidoService, pagamentoService, activatedRoute, router) {
        var _this = this;
        this.message = '';
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.pedidoService = pedidoService;
        this.pagamentoService = pagamentoService;
        this.message = '';
        var id;
        this.activatedRoute.params.subscribe(function (params) {
            console.log('params: ' + JSON.stringify(params));
            id = params["id"];
        });
        console.log('id recebido: ' + id);
        if (id) {
            this.pedidoService
                .get(id)
                .subscribe(function (pedido) {
                console.log(_this.pedido);
                console.log(pedido);
                _this.pedido = pedido;
            });
        }
        else {
            router.navigate(['']);
        }
    }
    PagamentoComponent.prototype.ngOnInit = function () {
        this.pagamento = new pagamento_model_1.Pagamento();
        console.log(this.pagamento);
    };
    PagamentoComponent.prototype.criarPagamento = function () {
        var _this = this;
        event.preventDefault();
        this.pagamento.calcularValorTotal().validarCupom(this.cupom);
        this.pagamentoService
            .savePagamento(this.pagamento, this.pedido.id)
            .subscribe(function (pagamento) {
            _this.pagamento = pagamento;
            _this.message = 'Pedido finalizado com sucesso!';
        }, function (error) {
            console.log(error);
            _this.message = 'Problema ao finalizar o pedido';
        });
        this.pagamento = new pagamento_model_1.Pagamento();
    };
    return PagamentoComponent;
}());
PagamentoComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'pagamento',
        templateUrl: './pagamento.component.html'
    }),
    __metadata("design:paramtypes", [pedido_service_1.PedidoService, pagamento_service_1.PagamentoService, router_1.ActivatedRoute, router_1.Router])
], PagamentoComponent);
exports.PagamentoComponent = PagamentoComponent;
//# sourceMappingURL=pagamento.component.js.map