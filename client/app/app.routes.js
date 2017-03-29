"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Import de RouterModule e Router para configuração das rotas de SPA
var router_1 = require("@angular/router");
var list_component_1 = require("./list/list.component");
var register_component_1 = require("./register/register.component");
var pedido_component_1 = require("./pedido/pedido.component");
//Configuração das rotas
var appRoutes = [
    { path: '', component: list_component_1.ListComponent },
    { path: 'novoPedido', component: pedido_component_1.PedidoComponent },
    { path: 'cadastro', component: register_component_1.RegisterComponent },
    { path: '**', component: list_component_1.ListComponent }
];
//"Compilando" as rotas configuradas
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map