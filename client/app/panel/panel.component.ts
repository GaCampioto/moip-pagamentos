import {Component, Input, OnInit} from '@angular/core'

@Component({
    moduleId: module.id,
    selector: 'panel',
    templateUrl: './panel.component.html',
    styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit{
    @Input() title: string;

    ngOnInit(){
        this.title = 
            this.title.length > 7 ?
            this.title.substr(0,7) + '...' :
            this.title;
    }
}