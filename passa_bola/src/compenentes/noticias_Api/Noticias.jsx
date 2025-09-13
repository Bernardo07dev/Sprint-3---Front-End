// Noticias.jsx
import React, { useEffect, useState } from "react";
import CardNoticia from "../Card.jsx/Card_Noticia";

const Noticias = ({ limit }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Chama a API serverless no mesmo domínio 
    fetch("/noticias_Api/news")
      .then(res => res.json())
      .then(data => setNews(data.articles || []))
      .catch(err => console.error("Erro ao buscar notícias:", err));
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
