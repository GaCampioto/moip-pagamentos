"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var photo_service_1 = require("../photo/photo.service");
var ListComponent = (function () {
    function ListComponent(photoService) {
        this.photos = [];
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
    }
    return ListComponent;
}());
ListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'list',
        templateUrl: './list.component.html'
    }),
    __metadata("design:paramtypes", [photo_service_1.PhotoService])
], ListComponent);
exports.ListComponent = ListComponent;
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
//# sourceMappingURL=list.component.js.map