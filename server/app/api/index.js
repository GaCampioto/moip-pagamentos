var db = require('../../config/database');
var app = require('../../config/express');

api = {}

//MÉTODOS DO CRUD DE PAGAMENTO
api.adicionaPagamento = function(req, res) {
    var pagamento = req.body;
    delete pagamento._id;
    db.pagamentos.insert(pagamento, function(err, newDoc) {
        if(err) return console.log(err);
        console.log('Adicionado com sucesso: ' + newDoc._id);
        res.status(201).json(newDoc._id);
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
api.prototype.adicionaPedido = function(req, res) {
    console.log('No Back-end: ' + JSON.stringify(req.body));
    var pedido = req.body;
    delete pedido._id;
    moipClient = new app.service.moipClient();
    moipClient.criarPedido(pedido, (error, request, response) => {
        if(error){
            console.log(error);
            return res.status(500);
        } 
        console.log(response);
        db.pedidos.insert(pedido, function(err, newDoc) {
            if(err) return console.log(err);
            console.log('Adicionado com sucesso: ' + newDoc._id);
            console.log('Elemento: ' + JSON.stringify(newDoc));
            res.status(201).json(newDoc);
        });  
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