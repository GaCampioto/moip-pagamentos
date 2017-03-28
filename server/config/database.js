var Datastore = require('nedb')
    ,db;

if(!db) {
    db = {
        pagamentos:{},
        pedidos:{}
    }
    db.pagamentos = new Datastore({
        filename: 'moip-pagamentos', 
        autoload: true 
    });
    db.pedidos = new Datastore({
        filename: 'moip-pedidos',
        autoload: true
    });
    console.log('Bancos ' + db.pagamentos.filename + ' e ' + db.pedidos.filename + ' prontos para uso');
}

module.exports = db;