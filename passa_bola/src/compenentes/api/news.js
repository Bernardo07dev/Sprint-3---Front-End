// /api/noticias.js
export default async function handler(req, res) {
  // Use variável de ambiente para a chave da API
  const API_KEY = process.env.NEWS_API_KEY;

  if (!API_KEY) {
    return res.status(500).json({ error: "Chave da API não definida" });
  }

  const url = `https://newsapi.org/v2/everything?q=futebol+feminino&language=pt&sortBy=publishedAt&apiKey=${API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Erro na API externa");
    
    const data = await response.json();
    res.status(200).json(data); // retorna todos os dados
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao buscar notícias" });
  }
}
