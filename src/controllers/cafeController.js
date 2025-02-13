const listCafe = require("../models/ListCafe");

const listCafe = (req, res) => {
    res.json(listCafe.totalCafes());
}

const addCafe = (req, res) => {
    const { pedido, cliente, valor } = req.body;
    if (!pedido || !cliente || !valor) {
        return res.status(400).json({ error: "Pedido, cliente e valor são obrigatórios." });
    }
    const newCafe = listCafe.addCafe(pedido, cliente, valor);
    res.status(201).json(newCafe);
}

const buscarCafe = (req, res) => {
    const cafe = listCafe.buscarCafePorId(parseInt(req.params.id));
    if (!cafe) {
        return res.status(404).json({ error: "Café não encontrado." });
    }
    res.json(cafe);
}

const deleteCafe = (req, res) => {
    const cafeDeleted = listCafe.deleteCafe(parseInt(req.params.id));
    if (!cafeDeleted) {
        return res.status(404).json({ error: "Café não encontrado." });
    }
    res.json({ message: "Café deletado com sucesso.", cafe: cafeDeleted });
}

module.exports = { listCafe, addCafe, buscarCafe, deleteCafe };