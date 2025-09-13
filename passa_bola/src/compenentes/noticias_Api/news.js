// /api/noticias.js
export default async function handler(req, res) {
  // Chave da NewsAPI armazenada em variáveis de ambiente no Vercel
  const API_KEY = process.env.NEWS_API_KEY;

  const url = `https://newsapi.org/v2/everything?q=futebol+feminino&language=pt&sortBy=publishedAt&apiKey=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Erro ao buscar notícias:", error);
    res.status(500).json({ error: "Erro ao buscar notícias" });
  }
}
