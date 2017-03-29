import { Injectable } from '@angular/core';
import { Pagamento } from '../pagamento/pagamento.model';
import { Observable } from 'rxjs';
import { Http, Headers, Response } from '@angular/http';

@Injectable()
export class PagamentoService {
      http: Http;
      headers: Headers;
      prefixUrl: string;
      suffixUrl: string;
      
      constructor(http: Http){
            this.http = http;
            this.prefixUrl = '/v1/pedidos';
            this.suffixUrl = '/pagamentos';
      }
      
      savePagamento(pagamento: Pagamento, pedidoId: string): Observable<Response>{
            console.log('savePagamento: ' + JSON.stringify(pagamento));
            return this.http
                        .post(this.prefixUrl + pedidoId + this.suffixUrl, JSON.stringify(pagamento), {headers : this.headers});
      }

      getAll() : Observable<Pagamento[]>{
            return this.http
                        .get(this.prefixUrl)
                        .map(res => res.json());
      }
}