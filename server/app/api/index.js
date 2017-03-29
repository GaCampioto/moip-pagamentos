var db = require('../../config/database');

api = {}

//MÉTODOS DO CRUD DE PAGAMENTO
api.atualizaPagamento = function(req, res) {
    db.pagamentos.update({id : req.body.resource.payment.id}, { $set: { status: req.body.resource.payment.status} }, 
        function(err, numReplaced) {
            if (err) return console.log(err);
            if(numReplaced){
                console.log('Atualizado com sucesso: ' + req.body.resource.payment);
                res.status(200).send();
            }
            res.status(500).end();
    });  
};

api.buscaPagamento = function(req, res) {
   db.pagamentos.findOne({_id: req.params.pagamentoId }, function(err, doc) {
        if (err) return console.log(err);
        res.json(doc);
    });
};

api.listaPagamento = function(req, res) {
    db.pagamentos.find({}).sort({titulo: 1}).exec(function(err, doc) {
        if (err) return console.log(err);
        res.json(doc);
    });
};

api.removePagamento = function(req, res) {
    db.pagamentos.remove({ _id: req.params.pagamentoId }, {}, function (err, numRemoved) {
        if (err) return console.log(err);
        console.log('removido com sucesso');
        if(numRemoved) res.status(200).end();
        res.status(500).end();
    });
};

//MÉTODOS DO CRUD DE PEDIDO
api.buscaPedido = function(req, res) {
   db.pedidos.findOne({_id: req.params.pedidoId }, function(err, doc) {
        if (err) return console.log(err);
        res.json(doc);
    });
};

api.listaPedido = function(req, res) {
    db.pedidos.find({}).sort({titulo: 1}).exec(function(err, doc) {
        if (err) return console.log(err);
        res.json(doc);
    });
};

api.removePedido = function(req, res) {
    db.pedidos.remove({ _id: req.params.pedidoId }, {}, function (err, numRemoved) {
        if (err) return console.log(err);
        console.log('removido com sucesso');
        if(numRemoved) res.status(200).end();
        res.status(500).end();
    });
};

module.exports = api;