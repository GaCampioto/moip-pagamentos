//Import de RouterModule e Router para configuração das rotas de SPA
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ListPagamentosComponent } from './list/listPagamentos.component';
import { RegisterComponent } from './register/register.component';
import { PedidoComponent } from './pedido/pedido.component';
import { PagamentoComponent } from './pagamento/pagamento.component';

//Configuração das rotas
const appRoutes: Routes = [
    { path: '', component: ListComponent },
    { path: 'listarPagamentos', component: ListPagamentosComponent},
    { path: 'novoPedido', component: PedidoComponent},
    { path:'novoPagamento/:id', component: PagamentoComponent },
    { path:'**', component: ListComponent}
];

//"Compilando" as rotas configuradas
export const routing = RouterModule.forRoot(appRoutes);