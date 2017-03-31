export class Pagamento {
    installmentCount: number = 1;
    fundingInstrument: FundingInstrument;
    _id: string = '';
    id: string = '';
    status: string = '';

    constructor(){
        this.fundingInstrument = new FundingInstrument();
        this.fundingInstrument.amount = new Amount();
        this.fundingInstrument.creditCard = new CreditCard();
        this.fundingInstrument.creditCard.holder = new Holder();
        this.fundingInstrument.creditCard.holder.taxDocument = new TaxDocument();
        this.fundingInstrument.creditCard.holder.phone = new Phone();
    }

    calcularValorTotal(): Pagamento{
        if(this.installmentCount > 1){
            this.fundingInstrument.amount.total = this.fundingInstrument.amount.total * 1.025;
        }
        return this;
    }

    validarCupom(cupom: string): Pagamento{
        if('CUPOM'.localeCompare(cupom) == 0){
            this.fundingInstrument.amount.total = this.fundingInstrument.amount.total * 0.95;
        }
        return this;
    }
}

class FundingInstrument {
    method: string = "CREDIT_CARD";
    amount: Amount;
    creditCard: CreditCard;
}

class Amount {
    total: number = 0;
}

class CreditCard {
    expirationMonth:number = 12;
    expirationYear:number = 25;
    number:number = 5555666677778884;
    cvc:number = 0;
    holder: Holder;
}

class Holder {
    fullname:string = "Nome Chumbado";
    birthdate:string = "1993-10-10";
    taxDocument: TaxDocument;
    phone: Phone;
}

class TaxDocument {
    type:string = "CPF";
    number:number = 12345679891;
}

class Phone{
    countryCode:number = 55;
    areaCode:number =  11;
    number:number = 66778899;
}