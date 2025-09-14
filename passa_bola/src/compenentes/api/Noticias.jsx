import React, { useEffect, useState } from "react";
import CardNoticia from "../Card.jsx/Card_Noticia";

const Noticias = ({ limit }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/noticias") // chama o endpoint do seu projeto
      .then(res => res.json())
      .then(data => {
        setNews(data.articles || []);
        setLoading(false);
      })
      .catch(err => {
        console.error("Erro ao buscar notícias:", err);
        setLoading(false);
      });
  }, []);

  const displayedNews = limit ? news.slice(0, limit) : news;

  return (
    <div className="grid grid-cols-1 gap-4">
      {loading && <p>Carregando notícias...</p>}

      {!loading && displayedNews.length === 0 && <p>Nenhuma notícia encontrada.</p>}

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
