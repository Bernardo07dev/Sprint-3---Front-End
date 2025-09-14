export default async function handler(req, res) {
  try {
    const apiKey = process.env.NEWS_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ error: "Chave da API não definida" });
    }

    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=br&apiKey=${apiKey}`
    );

    if (!response.ok) {
      throw new Error(`Erro na API de notícias: ${response.status}`);
    }

    const data = await response.json();

    // Se não houver artigos, retornar array vazio
    res.status(200).json({ articles: data.articles || [] });
  } catch (error) {
    console.error("Erro ao buscar notícias:", error);
    res.status(500).json({ error: "Erro ao buscar notícias" });
  }
}
