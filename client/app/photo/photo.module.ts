import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoComponent } from './photo.component';
import { FilterByTitle } from './photo.pipes';

@NgModule({
    imports: [ CommonModule ],
    declarations : [PhotoComponent, FilterByTitle],
    exports : [PhotoComponent, FilterByTitle]
})
export class PhotoModule{}