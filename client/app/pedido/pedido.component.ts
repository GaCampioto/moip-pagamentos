import { Component, Input } from '@angular/core';
import { Customer } from '../customer/customer.model';
import { Product } from '../product/product.model';
import { Pedido } from '../pedido/pedido.model';
import { PedidoService } from '../pedido/pedido.service';

@Component({
    moduleId : module.id,
    selector:'pedido',
    templateUrl:'./pedido.component.html'
})
export class PedidoComponent{
    pedido: Pedido;
    items: Product[] = [];
    ownId: string = '';
    pedidoService: PedidoService;

    constructor(pedidoService: PedidoService){
        this.pedidoService = pedidoService;
    }

    ngOnInit(){
        this.pedido = new Pedido();
        this.pedido.customer = new Customer();
        console.log(this.pedido.items);
        console.log(this.pedido.customer);
        console.log(this.pedido.ownId);
    }

    criarPedido(){
        event.preventDefault();
        console.log(this.pedido.items);
        console.log(this.pedido.customer);
        console.log(this.pedido.ownId);
        console.log(this.pedido);
        this.pedidoService.savePedido(this.pedido);
        console.log(this.pedidoService);
        this.pedido = new Pedido();
    }
}