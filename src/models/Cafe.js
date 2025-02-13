const { v4: uuidv4 } = require('uuid');

class Cafe {
    constructor(pedido, cliente, valor) {
        this.id = uuidv4();
        this.pedido = pedido;
        this.cliente = cliente;
        this.valor = valor;
    }
}

module.exports = Cafe;