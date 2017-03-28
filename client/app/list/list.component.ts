import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { PhotoComponent } from '../photo/photo.component';
import { PhotoService } from '../photo/photo.service';
import { PedidoService } from '../pedido/pedido.service';

@Component({
    moduleId : module.id,
    selector:'list',
    templateUrl:'./list.component.html'
})
export class ListComponent{
    photos : PhotoComponent [] = [];


    constructor(photoService: PhotoService){
        /*photoService
            .getAll()
            .subscribe(
                photos => this.photos = photos,
                error => console.log(error)
            );
        console.log(this.pedidoService);
        let stringBase64 = 'JBKNU57SBOLJIW4AOMN6VTF5IT1RMSME:1A8BOVJBVQKKG8ARDKI4UFAGEUZQASBS8WLKISZY';
        console.log(btoa(stringBase64));
        console.log(atob(btoa(stringBase64)));
        console.log(atob('MDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDE6QUJBQkFCQUJBQkFCQUJBQkFCQUJBQkFCQUJBQkFCQUJBQkFCQUJBQg=='));
    }
}