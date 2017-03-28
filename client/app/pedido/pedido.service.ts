import { Injectable } from '@angular/core';
import { Pedido } from '../pedido/pedido.model';
import { Observable } from 'rxjs';
import { Http, Headers, Response } from '@angular/http';

@Injectable()
export class PedidoService {
      http: Http;
      headers: Headers;
      url: string;
      
      constructor(http: Http){
            this.http = http;
            this.headers = new Headers();
            this.headers.append('Content-type', 'Application/JSON');
            this.headers.append('Content-type', 'Application/JSON');
            this.url = '/v1/pedidos';
      }

      savePedido(pedido: Pedido) : Observable<Response>{
            return this.http
                        .post(this.url, JSON.stringify(pedido), {headers : this.headers})
      }

      getAll() : Observable<Pedido[]>{
            return this.http
                        .get(this.url)
                        .map(res => res.json());
      }
}