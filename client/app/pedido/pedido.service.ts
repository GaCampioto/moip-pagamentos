import { Injectable } from '@angular/core';
import { Pedido } from '../pedido/pedido.model';
import { Observable } from 'rxjs';
import { Http, Headers, Response } from '@angular/http';

@Injectable()
export class PedidoService {
      http: Http;
      headers: Headers;
      urlBackEnd: string;
      urlMoip: string;
      
      constructor(http: Http){
            this.http = http;
            this.headers = new Headers();
            this.headers.append('Content-type', 'Application/JSON');
            this.headers.append('Authorization', 'Basic MDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDE6QUJBQkFCQUJBQkFCQUJBQkFCQUJBQkFCQUJBQkFCQUJBQkFCQUJBQg==');
            this.urlBackEnd = '/v1/pedidos';
            this.urlMoip = 'https://sandbox.moip.com.br/v2/orders';
      }

      savePedido(pedido: Pedido) : void{
            let pedidoRequest = {
                        items: pedido.items,
                        customer: pedido.customer,
                        ownId: pedido.ownId
            }
            console.log('Service -> ' + JSON.stringify(pedidoRequest));
            let response = new Pedido();
            this.http
                  .post(this.urlMoip, JSON.stringify(pedidoRequest), {headers : this.headers})
                  .map(res => res.json())
                  .subscribe(
                        res => {
                              response = res
                              console.log(response);
                              this.savePedidoBackEnd(response)
                                    .subscribe(
                                          res => {
                                                console.log(res.json());
                                          },
                                          error => console.log(error)
                                    );
                        },
                        error => console.log(error)
                   );
      }

      savePedidoBackEnd(pedido: Pedido): Observable<Response>{
            console.log('savePedidoBackEnd: ' + JSON.stringify(pedido));
            return this.http
                        .post(this.urlBackEnd, JSON.stringify(pedido), {headers : this.headers});
      }

      getAll() : Observable<Pedido[]>{
            return this.http
                        .get(this.urlBackEnd)
                        .map(res => res.json());
      }
}