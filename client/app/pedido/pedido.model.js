"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var customer_model_1 = require("../customer/customer.model");
var product_model_1 = require("../product/product.model");
var Pedido = (function () {
    function Pedido() {
        this.items = [];
        this.customer = new customer_model_1.Customer();
        this.ownId = '';
        this.items.push(new product_model_1.Product('Controle xbox one elite', 0, 'Controle preto xbox one elite', 600.00));
        this.items.push(new product_model_1.Product('Controle ps4', 0, 'Controle preto ps4', 300.00));
        this.items.push(new product_model_1.Product('Teclado gamer pc', 0, 'Teclado gamer pc', 500.00));
    }
    return Pedido;
}());
exports.Pedido = Pedido;
//# sourceMappingURL=pedido.model.js.map