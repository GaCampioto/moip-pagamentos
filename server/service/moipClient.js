var restify = require('restify');

function moipClient() {
    this._client = restify.createJsonClient({
        url: 'https://sandbox.moip.com.br/',
        version: '*'
    });
    this._client.headers('Authorization', 'Basic MDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDE6QUJBQkFCQUJBQkFCQUJBQkFCQUJBQkFCQUJBQkFCQUJBQkFCQUJBQg==');
}

moipClient.prototype.criarPedido = function(pedido, callback) {
    this._client.post('v2/orders', pedido, callback);
}

module.exports = function(){
    return moipClient;
};