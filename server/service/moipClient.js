var restify = require('restify');

function moipClient() {
    this._client = restify.createJsonClient({
        url: 'https://sandbox.moip.com.br',
        headers:{
            "Authorization":"Basic MDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDE6QUJBQkFCQUJBQkFCQUJBQkFCQUJBQkFCQUJBQkFCQUJBQkFCQUJBQg==",
            "Accept": "application/json"
        },
        version: '*'
    });
}

moipClient.prototype.criarPedido = function(pedido, callback) {
    console.log('moip.criarPedido: ' + this._client.url);
    console.log('moip.criarPedido.pedido: ' + JSON.stringify(pedido));
    this._client.post('/v2/orders', pedido, callback);
}

moipClient.prototype.criarPagamento = function(pedidoId, pagamento, callback) {
    console.log('moip.criarPagamento: ' + this._client.url);
    console.log('moip.criarPagamento.pedido: ' + JSON.stringify(pagamento));
    this._client.post('/v2/orders/' + pedidoId + '/payments', pagamento, callback);
}

module.exports = function(){
    return moipClient;
};