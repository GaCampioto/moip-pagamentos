import { Component, Input } from '@angular/core';
import { Customer } from '../customer/customer.model';
import { Product } from '../product/product.model';
import { Pedido } from '../pedido/pedido.model';
import { PedidoService } from '../pedido/pedido.service';
import { Pagamento } from '../pagamento/pagamento.model';
import { PagamentoService } from '../pagamento/pagamento.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
    moduleId : module.id,
    selector:'pagamento',
    templateUrl:'./pagamento.component.html'
})
export class PagamentoComponent{
    pedido: Pedido;
    pedidoService: PedidoService;
    pagamento: Pagamento;
    pagamentoService: PagamentoService;
    message: string = '';
    activatedRoute: ActivatedRoute;
    router: Router;
    cupom: string;

    constructor(pedidoService: PedidoService, pagamentoService: PagamentoService, activatedRoute: ActivatedRoute, router: Router){
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.pedidoService = pedidoService;
        this.pagamentoService = pagamentoService;
        this.message = '';
        let id: string;
        this.activatedRoute.params.subscribe(params => {
            console.log('params: ' + JSON.stringify(params));
            id = params["id"];
        });
        console.log('id recebido: ' + id);
        if(id){
            this.pedidoService
                .get(id)
                .subscribe( pedido => {
                    console.log(this.pedido);
                    console.log(pedido);
                    this.pedido = pedido
                });
        } else {
            router.navigate(['']);
        }
    }
    
    ngOnInit(){
        this.pagamento = new Pagamento();
        console.log(this.pagamento);
    }

    criarPagamento(): void{
        event.preventDefault();
        this.pagamento.calcularValorTotal().validarCupom(this.cupom);
        this.pagamentoService
            .savePagamento(this.pagamento, this.pedido.id)
            .subscribe((pagamento) => {
                this.pagamento = pagamento;
                this.message = 'Pedido finalizado com sucesso!';
            }, error => {
                console.log(error);
                this.message = 'Problema ao finalizar o pedido';
            });
        this.pagamento = new Pagamento();
    }
}