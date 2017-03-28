var db = require('../../config/database');

var api = {}

//MÉTODOS DO CRUD DE PAGAMENTO
api.adicionaPagamento = function(req, res) {
    var pagamento = req.body;
    delete pagamento._id;
    db.pagamentos.insert(pagamento, function(err, newDoc) {
        if(err) return console.log(err);
        console.log('Adicionado com sucesso: ' + newDoc._id);
        res.json(newDoc._id);
    });  
};

api.buscaPagamento = function(req, res) {
   db.pagamentos.findOne({_id: req.params.pagamentoId }, function(err, doc) {
        if (err) return console.log(err);
        res.json(doc);
    });
};

api.atualizaPagamento = function(req, res) {
    console.log('Parâmetro recebido:' + req.params.pagamentoId);
    db.pagamentos.update({_id : req.params.pagamentoId }, req.body, function(err, numReplaced) {
        if (err) return console.log(err);
        if(numReplaced) res.status(200).end();
        res.status(500).end();
        console.log('Atualizado com sucesso: ' + req.body._id);
        res.status(200).end();
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
api.adicionaPedido = function(req, res) {
    var pedido = req.body;
    delete pedido._id;
    db.pedidos.insert(pedido, function(err, newDoc) {
        if(err) return console.log(err);
        console.log('Adicionado com sucesso: ' + newDoc._id);
        res.json(newDoc);
    });  
};

api.buscaPedido = function(req, res) {
   db.pedidos.findOne({_id: req.params.pedidoId }, function(err, doc) {
        if (err) return console.log(err);
        res.json(doc);
    });
};

api.atualizaPedido = function(req, res) {
    console.log('Parâmetro recebido:' + req.params.pedidoId);
    db.pedidos.update({_id : req.params.pedidoId }, req.body, function(err, numReplaced) {
        if (err) return console.log(err);
        if(numReplaced) res.status(200).end();
        res.status(500).end();
        console.log('Atualizado com sucesso: ' + req.body._id);
        res.status(200).end();
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