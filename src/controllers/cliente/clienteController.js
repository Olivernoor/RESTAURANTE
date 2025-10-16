import createCliente from "../../services/cliente/createCliente.js";
import getOne from "../../services/cliente/getCliente.js";
import getAll from "../../services/cliente/getClientes.js";
import destroyCliente from "../../services/cliente/destroyCliente.js";
import update from "../../services/cliente/updateCliente.js";

const updateCliente = async (req, res) => {
  try {
    const data = req.body;
    const id = req.params.id;

    const cliente = await update(data, id);

    if (!actor) {
      res.status(400).json({ message: "não foi possível atualizar" });
      return;
    }

    res.status(200).json({ message: "atualizado com sucesso", cliente });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "ocorreu um erro ao atualizar" });
  }
};


const handleDestroyCliente = async (req, res) => {
  try {
    const id = req.params.id;
    const cliente= await destroyCliente(id);

    if (!cliente) {
      res.status(400).json({ message: "Erro na operação" });
      return;
    }

    res.status(200).json({ message: "Deletado com sucesso", cliente });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "ocorreu um erro ao deletar" });
  }
};


const getClientes = async (req, res) => {
  try {
    const cliente = await getAll();
    res.status(200).json({ data: cliente});
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "ocorreu um erro ao buscar clientes" });
  }
};
const getCliente = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      res.status(400).json({ message: "id é obrigatório" });
      return;
    }

    const cliente = await getOne(id);

    if (!cliente) {
      res.status(404).json({ message: "Cliente não encontrado" });
      return;
    }

    res.status(200).json({ data: cliente });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "ocorreu um erro" });
  }
};


const handleCreateCliente = async (req, res) => {
  try {
    const { name, number} = req.body;

    if (!name || !number) {
      res.status(400).json({ message: "Nome ou numero são obrigatorios" });
      return;
    }

    const createdCliente = await createCliente(req.body);

    if (!createdCliente) {
      res.status(400).json({ message: "Erro ao criar o cliente" });
      return;
    }

    res.status(201).json({ data: createdCliente});
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "ocorreu um erro" });
  }
};

export default {
    handleCreateCliente,
    getCliente,
    getClientes,
    handleDestroyCliente,
    updateCliente
}
