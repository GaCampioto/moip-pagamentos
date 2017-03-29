var api = require('../api'),
    path = require('path');


module.exports = function(app) {
    //Operações pedidos
    app.post('/v1/pedidos', (req, res) => {
        var pedido = req.body;
        let pedidoRequest = {
                        items: pedido.items,
                        customer: pedido.customer,
                        ownId: pedido.ownId
        }
        console.log(pedidoRequest);
        moipClient = new app.service.moipClient();
        moipClient.criarPedido(pedidoRequest, function(error, request, response){
            if(error){
                console.log(error);
                return res.status(500);
            }
            console.log(JSON.parse(response.body));
            db.pedidos.insert(JSON.parse(response.body), function(err, newDoc) {
                if(err) return console.log(err);
                res.status(201).json(newDoc);
            });
        });
    });
    
    app.route('/v1/pedidos')
        .get(api.listaPedido);

    app.route('/v1/pedidos/:pedidoId')
        .delete(api.removePedido)
        .get(api.buscaPedido);

    //Operações pagamento
    app.post('/v1/pedidos/:pedidoId/pagamentos', (req, res) => {
        var pedidoId = req.params.pedidoId;
        var pedido = db.pedidos.findOne({id: req.params.pedidoId }, function(err, doc) {
            if (err){
                console.log(err);
                return res.status(500);
            }
        });
        var pagamento = req.body;
        let pagamentoRequest = {
                        installmentCount: pagamento.installmentCount,
                        fundingInstrument: pagamento.fundingInstrument,
        }
        moipClient = new app.service.moipClient();
        moipClient.criarPagamento(pedidoId, pagamentoRequest, (error, request, response) => {
            if(error){
                console.log(error);
                return res.status(500);
            }
            console.log(JSON.parse(response.body));
            db.pagamentos.insert(JSON.parse(response.body), function(err, newDoc) {
                if(err) return console.log(err);
                res.status(201).json(newDoc);
            });
        });
    });

    app.route('/v1/pagamentos')
        .get(api.listaPagamento)
        .post(api.atualizaPagamento);

    app.route('/v1/pagamentos/:pedidoId')
        .delete(api.removePagamento)
        .get(api.buscaPagamento);
        
    app.all('/*', function(req, res) {
        console.log('Path to index.html: ' + path.join(app.get('clientPath'), 'index.html'));
        res.sendFile(path.join(app.get('clientPath'), 'index.html'));
    });
}