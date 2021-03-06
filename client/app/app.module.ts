//Import de components
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { ListComponent } from './list/list.component';
import { ListPagamentosComponent } from './list/listPagamentos.component';
import { PedidoComponent } from './pedido/pedido.component';
import { PedidoService } from './pedido/pedido.service';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { PagamentoService } from './pagamento/pagamento.service';

//Import de modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PhotoModule } from './photo/photo.module';
import { HttpModule } from '@angular/http';
import { PanelModule } from './panel/panel.module';
import { routing } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
//Import diferente porque não é padrão do angular
import 'rxjs/add/operator/map';

@NgModule({
    imports : [BrowserModule, PhotoModule, HttpModule, PanelModule, routing, FormsModule, ReactiveFormsModule],
    declarations : [AppComponent, RegisterComponent, ListComponent, ListPagamentosComponent, PedidoComponent, PagamentoComponent],
    providers: [ PedidoService, PagamentoService ],
    bootstrap : [ AppComponent ]
})
export class AppModule{}