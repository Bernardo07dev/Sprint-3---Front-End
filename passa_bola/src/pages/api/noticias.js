// pages/api/noticias.js
export default async function handler(req, res) {
  try {
   const response = await fetch(
  `https://newsapi.org/v2/top-headlines?country=br&apiKey=${process.env.NEWS_API_KEY}`
);


    if (!response.ok) {
      throw new Error(`Erro na API de notícias: ${response.status}`);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar notícias" });
  }
}
