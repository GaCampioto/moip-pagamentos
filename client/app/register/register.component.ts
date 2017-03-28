import { Component } from '@angular/core';
import { PhotoComponent } from '../photo/photo.component';
import { PhotoService } from '../photo/photo.service';
import { Http,Headers } from '@angular/http'
//Imports necessários para fazer a validação dos dados do form
import { FormGroup, FormBuilder, Validators} from '@angular/forms'

@Component({
    moduleId : module.id,
    selector:'register',
    templateUrl:'./register.component.html'
})
export class RegisterComponent {
    photo : PhotoComponent = new PhotoComponent();
    photoService: PhotoService;
    //Deve ter o mesmo nome do form na página
    registerForm: FormGroup;

    constructor(photoService: PhotoService, formBuilder: FormBuilder){
        this.photoService = photoService;
        //Criação do form e da validações que serão feitas
        //É necessário incluir todos os campos do form mesmo que não exista validação
        this.registerForm = formBuilder.group({
                "titulo": ['', Validators.compose([Validators.required, Validators.minLength(4)])],
                "url": ['', Validators.required],
                "descricao": ['']
        });

    }

    save (event){
        event.preventDefault();
        console.log(this.photo);
        this.photoService
            .save(this.photo)
            .subscribe( () => {
                    this.photo = new PhotoComponent();
                    console.log('Foto Salva com sucesso!');
                },
                error => console.log(error));
    }
}