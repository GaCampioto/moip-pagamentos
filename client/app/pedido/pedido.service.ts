import { Injectable } from '@angular/core';
import { Pedido } from '../pedido/pedido.model';

@Injectable()
export class PedidoService {
  sharedPedido:Pedido;

  constructor(){
      this.sharedPedido = new Pedido();
  }

  setPedido (pedido: Pedido) {
        this.sharedPedido = pedido;
  }

  getPedido () {
        return this.sharedPedido;
  }
}