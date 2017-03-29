var api = require('../api'),
    path = require('path');

module.exports  = function(app) {
    app.route('/v1/pedidos')
        .post(api.adicionaPedido)
        .get(api.listaPedido);

    app.route('/v1/pedidos/:pedidoId')
        .delete(api.removePedido)
        .get(api.buscaPedido)
        .put(api.atualizaPedido);

    app.route('/v1/pagamentos')
        .post(api.adicionaPagamento)
        .get(api.listaPagamento);

    app.route('/v1/pagamentos/:pagamentoId')
        .delete(api.removePagamento)
        .get(api.buscaPagamento)
        .put(api.atualizaPagamento);
        
    app.all('/*', function(req, res) {
        console.log('Path to index.html: ' + path.join(app.get('clientPath'), 'index.html'));
        res.sendFile(path.join(app.get('clientPath'), 'index.html'));
    });
};