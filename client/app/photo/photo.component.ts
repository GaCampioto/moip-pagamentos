import { Component, Input } from '@angular/core';

@Component({
    moduleId : module.id,
    selector:'photo',
    templateUrl:'./photo.component.html',
    styleUrls:['./photo.component.css']
})
export class PhotoComponent{
    //@Input() possibilita que o componente receba valores externos
    //Ao receber valores externos chamamos os atributos de inbound properties
    @Input() titulo: string = '';
    @Input() url: string = '';
    descricao: string = '';
}