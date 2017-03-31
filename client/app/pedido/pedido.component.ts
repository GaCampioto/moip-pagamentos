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
    message: string = '';

    constructor(pedidoService: PedidoService){
        this.pedidoService = pedidoService;
        this.message = '';
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
        this.pedido.items = this.pedido.items.filter(product => product.quantity > 0);
        this.pedidoService
            .savePedido(this.pedido)
            .subscribe(() => {
                this.pedido = new Pedido();
                this.message = 'Pedido criado com sucesso!';
            }, error => {
                console.log(error);
                this.message = 'Erro ao criar pedido!';
            });
    }
}