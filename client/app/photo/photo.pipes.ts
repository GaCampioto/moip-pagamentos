import { Pipe, PipeTransform} from '@angular/core'
import { PhotoComponent } from './photo.component';

@Pipe({
    name: 'filterByTitle'
})
export class FilterByTitle implements PipeTransform {
    transform(photos: PhotoComponent[], searchText: string) : PhotoComponent[]{
        searchText = searchText ? searchText.toLocaleLowerCase() : '';
        return photos ? photos.filter(photo => photo.titulo.toLowerCase().includes(searchText.toLowerCase())) : photos;
    }
}