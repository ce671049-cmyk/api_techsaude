export default function handler(req, res) {
  if (req.method === 'POST') {
    const { nome, telefone } = req.body;

    // Validação simples
    if (!nome || !telefone) {
      return res.status(400).json({ sucesso: false, mensagem: 'Campos obrigatórios ausentes!' });
    }

    console.log("📩 Dados recebidos:", nome, telefone);

    // Simula inserção no banco
    res.status(200).json({
      sucesso: true,
      mensagem: 'Dados recebidos com sucesso!',
      nome,
      telefone
    });
  } else {
    res.status(405).json({ sucesso: false, mensagem: 'Método não permitido' });
  }
}
