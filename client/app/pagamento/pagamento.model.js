"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pagamento = (function () {
    function Pagamento() {
        this.installmentCount = 1;
        this._id = '';
        this.id = '';
        this.status = '';
        this.fundingInstrument = new FundingInstrument();
        this.fundingInstrument.amount = new Amount();
        this.fundingInstrument.creditCard = new CreditCard();
        this.fundingInstrument.creditCard.holder = new Holder();
        this.fundingInstrument.creditCard.holder.taxDocument = new TaxDocument();
        this.fundingInstrument.creditCard.holder.phone = new Phone();
    }
    Pagamento.prototype.calcularValorTotal = function () {
        if (this.installmentCount > 1) {
            this.fundingInstrument.amount.total = this.fundingInstrument.amount.total * 1.025;
        }
        return this;
    };
    Pagamento.prototype.validarCupom = function (cupom) {
        if ('CUPOM'.localeCompare(cupom) == 0) {
            this.fundingInstrument.amount.total = this.fundingInstrument.amount.total * 0.95;
        }
        return this;
    };
    return Pagamento;
}());
exports.Pagamento = Pagamento;
var FundingInstrument = (function () {
    function FundingInstrument() {
        this.method = "CREDIT_CARD";
    }
    return FundingInstrument;
}());
var Amount = (function () {
    function Amount() {
        this.total = 0;
    }
    return Amount;
}());
var CreditCard = (function () {
    function CreditCard() {
        this.expirationMonth = 12;
        this.expirationYear = 25;
        this.number = 5555666677778884;
        this.cvc = 0;
    }
    return CreditCard;
}());
var Holder = (function () {
    function Holder() {
        this.fullname = "Nome Chumbado";
        this.birthdate = "1993-10-10";
    }
    return Holder;
}());
var TaxDocument = (function () {
    function TaxDocument() {
        this.type = "CPF";
        this.number = 12345679891;
    }
    return TaxDocument;
}());
var Phone = (function () {
    function Phone() {
        this.countryCode = 55;
        this.areaCode = 11;
        this.number = 66778899;
    }
    return Phone;
}());
//# sourceMappingURL=pagamento.model.js.map