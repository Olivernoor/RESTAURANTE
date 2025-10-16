import createByList from "../../services/marmitas/createMarmita.js";
import Cliente from "../../model/cliente/cliente.js";

const handleCreateMarmita = async (req, res) =>{
    const clienteId= req.params.id;
    const marmitas = req.body.marmitas;
    try {

    const cliente = await Cliente.findByPk(clienteId);
    if (!cliente) {
      return res.status(404).json({ error: "Cliente não encontrado" });
    }
    
    if (!Array.isArray(marmitas) || marmitas.length === 0) {
      return res.status(400).json({ error: "Lista de marmitas é obrigatória" });
    }
    const resultado = await createByList(marmitas, clienteId);


    res.status(201).json({
      cliente: cliente.nome,
      marmitasAdicionadas: resultado.success,
      marmitasComErro: resultado.error
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao criar marmitas" });
  }
};
export default handleCreateMarmita

