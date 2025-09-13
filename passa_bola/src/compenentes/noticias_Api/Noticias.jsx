import React, { useEffect, useState } from "react";
import CardNoticia from "../Card.jsx/Card_Noticia";

// **Chave exposta diretamente no frontend**
const API_KEY = "5112f9d2c6d5408590bc522c8da0ea3f"

const Noticias = ({ limit }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=futebol+feminino&language=pt&sortBy=publishedAt&apiKey=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setNews(data.articles || []))
      .catch((err) => console.error("Erro ao buscar notícias:", err));
  }, []);

  const displayedNews = limit ? news.slice(0, limit) : news;

  return (
    <div className="grid grid-cols-1 gap-4">
      {displayedNews.length === 0 && <p>Carregando notícias...</p>}

      {displayedNews.map((item, i) => (
        <CardNoticia
          key={i}
          titulo={item.title}
          desc={item.description}
          img={item.urlToImage}
          data={item.publishedAt}
          url={item.url}
        />
      ))}
    </div>
  );
};

export default Noticias;
