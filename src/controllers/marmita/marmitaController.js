import Marmita from "../../model/marmitas/Marmita.js";
import Cliente from "../../model/cliente/Cliente.js";

const handleCreateMarmita = async (req, res) => {
  const clienteId = req.params.id;
  const { name, price } = req.body;

  try {
    const cliente = await Cliente.findByPk(clienteId);
    if (!cliente) {
      return res.status(404).json({ error: "Cliente não encontrado" });
    }

    if (!name || !price) {
      return res.status(400).json({ error: "Campos 'name' e 'preco' são obrigatórios" });
    }

    const marmitaCriada = await Marmita.create({
      name,
      price,
      clienteId
    });

    res.status(201).json({
      cliente: cliente.nome,
      marmita: marmitaCriada
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao criar marmita" });
  }
};

export default handleCreateMarmita;