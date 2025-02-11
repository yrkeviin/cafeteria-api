const Cafe = require("./Cafe");

class ListCafe {
    constructor() {
        this.cafes = [];
        this.proximoId = 1;
    }
    addCafe(pedido, cliente, valor) {
        const newCafe = new newCafe(this.proximoId++, pedido, cliente, valor);
        this.cafes.push(newCafe);
        return newCafe;
    }
    totalCafes() {
        return this.cafes;
    }
    buscarCafePorId(id) {
        return this.cafes.find(cafe => cafe.id === id);
    }
    deleteCafe(id) {
        const index = this.cafes.findIndex(cafe => cafe.id === id);
        if (index !== -1) {
            return this.cafes.splice(index, 1)[0];
        }
        return null;
    }
}

module.exports = new ListCafe();