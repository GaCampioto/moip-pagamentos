import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { PagamentoService } from '../pagamento/pagamento.service';
import { PagamentoComponent } from '../pagamento/pagamento.component';
import { Pagamento } from '../pagamento/pagamento.model';

@Component({
    moduleId : module.id,
    selector:'listPagamento',
    templateUrl:'./listPagamento.component.html'
})
export class ListPagamentosComponent{
    pagamentos : Pagamento[] = [];

    constructor(pagamentoService: PagamentoService){
        pagamentoService
            .getAll()
            .subscribe(
                pagamentos => this.pagamentos = pagamentos,
                error => console.log(error)
            );
    }
}