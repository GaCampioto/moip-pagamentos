export class Pagamento {
    installmentCount: number = 1;
    fundingInstrument : {
        method:"CREDIT_CARD",
        amount: {
            total:0
        }
        creditCard: {
            expirationMonth: 12,
            expirationYear: 25,
            number: 5555666677778884,
            cvc: 123,
            holder: {
                fullname: "Nome Chumbado",
                birthdate: "1993-10-10",
                taxDocument: {
                    type: "CPF",
                    number: 12345679891
                },
                phone: {
                    countryCode: 55,
                    areaCode: 11,
                    number: 66778899
                }
            }
        }
    };
    _id: string = '';
    id: string = '';
    status: string = '';
}