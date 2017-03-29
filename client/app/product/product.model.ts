export class Product{
    product: string;
    quantity: number;
    detail: string;
    price: number;

    constructor(name, quantity, detail, price){
        this.product = name;
        this.quantity = quantity;
        this.detail = detail;
        this.price = price;
    }
}