import { Component, Input } from '@angular/core';
import { Customer } from '../customer/customer.model';
import { Product } from '../product/product.model';
import { Pedido } from '../pedido/pedido.model';
import { PedidoService } from '../pedido/pedido.service';
import { Pagamento } from '../pagamento/pagamento.model';
import { PagamentoService } from '../pagamento/pagamento.service';

@Component({
    moduleId : module.id,
    selector:'pagamento',
    templateUrl:'./pagamento.component.html'
})
export class PedidoComponent{
    pedido: Pedido;
    pedidoService: PedidoService;
    pagamento: Pagamento;
    pagamentoService: PagamentoService;
    message: string = '';

    constructor(pedidoService: PedidoService, pagamentoService: PagamentoService){
        this.pedidoService = pedidoService;
        this.pagamentoService = pagamentoService;
        this.message = '';
    }

    ngOnInit(){
        //BUSCAR PEDIDO NA BASE DE DADOS UTILIZANDO ID COMO PARÂMETRO
    }

    criarPagamento(){
        event.preventDefault();
        console.log(this.pedido.items);
        console.log(this.pedido.customer);
        console.log(this.pedido.ownId);
        console.log(this.pedido);
        this.pagamentoService.savePagamento(this.pagamento, this.pedido.id);
        this.message = 'Pedido finalizado com sucesso!';
        this.pedido = new Pedido();
    }
}