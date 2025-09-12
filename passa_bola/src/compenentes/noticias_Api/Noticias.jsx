// Noticias.jsx
import React, { useEffect, useState } from "react";
// Importa React e dois hooks importantes:
// useState → para criar e atualizar o estado das notícias
// useEffect → para executar efeitos colaterais (como buscar dados da API) quando o componente é montado

import CardNoticia from "../Card.jsx/Card_Noticia";
// Importa o componente CardNoticia que vai renderizar cada notícia individualmente
// Este componente recebe props como título, descrição, imagem, data e link da notícia

// Chave da API do NewsAPI.org
// Observação: NewsAPI é uma API pública de notícias que fornece artigos de diversos sites
// https://newsapi.org/
// A chave API_KEY é obrigatória para autenticar as requisições
const API_KEY = "5112f9d2c6d5408590bc522c8da0ea3f";

const Noticias = ({ limit }) => {
  // limit → opcional, define quantas notícias serão exibidas

  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      // URL da API do NewsAPI:
      `https://newsapi.org/v2/everything?q=futebol+feminino&language=pt&sortBy=publishedAt&apiKey=${API_KEY}`
    )
      .then((res) => res.json())
      // Converte a resposta da API para JSON
      .then((data) => setNews(data.articles || []))
      .catch((err) => console.error("Erro ao buscar notícias:", err));
  }, []);

  // Se houver limite definido, pega apenas os primeiros "limit" itens
  // Caso contrário, exibe todas as notícias
  const displayedNews = limit ? news.slice(0, limit) : news;

  return (
    <div className="grid grid-cols-1 gap-4">
      {/* Enquanto não há notícias carregadas, mostra mensagem */}
      {displayedNews.length === 0 && <p>Carregando notícias...</p>}

      {/* Mapeia cada notícia do array "displayedNews" para um CardNoticia */}
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
