const { v4: uuidv4 } = require('uuid');

class Cafe {
    constructor(id, pedido, cliente, valor) {
        this.id = id;
        this.pedido = pedido;
        this.cliente = cliente;
        this.valor = valor;
    }
}

module.exports = Cafe;