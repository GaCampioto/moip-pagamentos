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
            this.headers.append('content-type', 'application/json');
            this.url = '/v1/pedidos';
      }

      savePedido(pedido: Pedido): Observable<Response>{
            console.log('savePedido: ' + pedido);
            return this.http
                        .post(this.url, JSON.stringify(pedido), {headers : this.headers});
      }

      get(id: string) : Observable<Pedido>{
            console.log('id no service: ' + id);
            console.log(this.url + '/' + id);
            return this.http
                        .get(this.url + '/' + id)
                        .map(res => res.json());
      }

      getAll() : Observable<Pedido[]>{
            return this.http
                        .get(this.url)
                        .map(res => res.json());
      }
}