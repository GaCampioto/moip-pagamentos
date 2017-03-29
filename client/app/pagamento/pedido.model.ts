import { Customer } from '../customer/customer.model';
import { Product } from '../product/product.model';

export class Pedido {
    items: Product[] = [];
    customer: Customer = new Customer();
    ownId: string = '';
    _id: string = '';
    id: string = ''
    status: string = '';

    constructor(){
        this.items.push(new Product('Controle xbox one elite', 0, 'Controle preto xbox one elite', 600.00));
        this.items.push(new Product('Controle ps4', 0, 'Controle preto ps4', 300.00));
        this.items.push(new Product('Teclado gamer pc', 0, 'Teclado gamer pc', 100.00));
    }
}