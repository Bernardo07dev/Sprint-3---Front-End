// /api/noticias.js
export default async function handler(req, res) {
  const API_KEY = "5112f9d2c6d5408590bc522c8da0ea3f";  
  const url = `https://newsapi.org/v2/everything?q=futebol+feminino&language=pt&sortBy=publishedAt&apiKey=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
 
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar notícias" });
  }
}
