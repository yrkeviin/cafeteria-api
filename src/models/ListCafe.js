const Cafe = require("./Cafe");
class ListCafe {
    constructor() {
        this.cafes = [];
    }
    addCafe(cafe) {
        this.cafes.push(cafe);
    }
    totalCafes() {
        return this.cafes;
    }
    buscarCafePorId(id) {
        const cafe = this.cafes.find(cafe => cafe.id == id);
        if (!cafe) {
            throw new Error("Café não encontrado");
        }
        return cafe;
    }
    deleteCafe(id) {
        this.cafes = this.cafes.filter((cafe) => cafe.id != id);
    }
}

module.exports = ListCafe;