export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { nome, telefone } = req.body;
    console.log("Recebido:", nome, telefone);
    return res.status(200).json({ sucesso: true, mensagem: "Dados recebidos!", nome, telefone });
  } else {
    res.status(405).json({ erro: "Método não permitido" });
  }
}
