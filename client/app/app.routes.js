"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Import de RouterModule e Router para configuração das rotas de SPA
var router_1 = require("@angular/router");
var list_component_1 = require("./list/list.component");
var listPagamentos_component_1 = require("./list/listPagamentos.component");
var pedido_component_1 = require("./pedido/pedido.component");
var pagamento_component_1 = require("./pagamento/pagamento.component");
//Configuração das rotas
var appRoutes = [
    { path: '', component: list_component_1.ListComponent },
    { path: 'listarPagamentos', component: listPagamentos_component_1.ListPagamentosComponent },
    { path: 'novoPedido', component: pedido_component_1.PedidoComponent },
    { path: 'novoPagamento/:id', component: pagamento_component_1.PagamentoComponent },
    { path: '**', component: list_component_1.ListComponent }
];
//"Compilando" as rotas configuradas
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map