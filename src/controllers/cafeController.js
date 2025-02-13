const Cafe = require("../models/Cafe");
const listCafe = require("../models/ListCafe");

const list = new listCafe();

const cafe1 = new Cafe("Café com leite", "Fernanda", 5);
list.addCafe(cafe1);

list.addCafe(new Cafe("Café preto", "Trixie", 3));

const router = {
    addCafe: (req, res) => {
        try {
            const { pedido, cliente, valor } = req.body;
            if (!pedido || !cliente || !valor) {
                throw new Error("Pedido, cliente e valor são obrigatórios");
            }
            const cafe = new Cafe(pedido, cliente, valor);
            list.addCafe(cafe);
            res.status(201).json({ message: "Café adicionado com sucesso", cafe });
        } catch (error) {
            res.status(400).json({
                message: "Erro ao adicionar café",
                error: error.message,
            });
        }
    }
}
