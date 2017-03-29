import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { PedidoService } from '../pedido/pedido.service';
import { PedidoComponent } from '../pedido/pedido.component';
import { Pedido } from '../pedido/pedido.model';

@Component({
    moduleId : module.id,
    selector:'list',
    templateUrl:'./list.component.html'
})
export class ListComponent{
    pedidos : Pedido[] = [];

    constructor(pedidoService: PedidoService){
        pedidoService
            .getAll()
            .subscribe(
                pedidos => this.pedidos = pedidos,
                error => console.log(error)
            );
        //reduce((total, n) => total + n.volume, 0.0);
    }

    defineValorTotal(pedido: Pedido): number{
        let valorPedidos : number[] = pedido.items.map(item => item.price * item.quantity);
        return valorPedidos.reduce((valorTotal, valorPedido) => valorTotal + valorPedido);
    }
}