export default async function handler(req, res) {
  const API_KEY = process.env.API_KEY; 

  if (!API_KEY) {
    console.error("Erro: A chave da API não está definida nas variáveis de ambiente do Vercel.");
    return res.status(500).json({ error: "Chave da API não configurada." });
  }

  const url = `https://newsapi.org/v2/everything?q=futebol+feminino&language=pt&sortBy=publishedAt&apiKey=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (response.ok) {
      res.status(200).json(data);
    } else {
      res.status(response.status).json({ error: data.message || "Erro ao buscar notícias da API externa." });
    }
  } catch (err) {
    console.error("Erro ao buscar notícias:", err);
    res.status(500).json({ error: "Erro interno do servidor ao processar a requisição." });
  }
}
