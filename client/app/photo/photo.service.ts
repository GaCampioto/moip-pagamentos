import { Observable } from 'rxjs';
import { Http, Headers, Response } from '@angular/http';
import { PhotoComponent } from './photo.component';

export class PhotoService{
    http: Http;
    headers: Headers;
    url: string;

    constructor(http: Http){
        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-type', 'Application/JSON');
        this.url = 'v1/fotos';
    }

    save(photo: PhotoComponent): Observable<Response>{
        return this.http
            .post(this.url, JSON.stringify(photo), {headers : this.headers})
    }

    getAll(): Observable<PhotoComponent[]>{
        return this.http
            .get(this.url)
            .map(res => res.json());
    }
}