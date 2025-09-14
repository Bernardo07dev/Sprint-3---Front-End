import { useEffect, useState } from "react";

export default function Noticias() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch("/api/noticias");
        if (!res.ok) throw new Error("Erro na requisição");
        const data = await res.json();
        setNews(data.articles || []);
      } catch (err) {
        console.error("Erro ao buscar notícias:", err);
        setError("Não foi possível carregar as notícias.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <p>Carregando notícias...</p>;
  if (error) return <p>{error}</p>;
  if (news.length === 0) return <p>Nenhuma notícia encontrada.</p>;

  return (
    <div>
      {news.map((item, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "12px",
            marginBottom: "12px",
          }}
        >
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          {item.url && (
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              Ler mais
            </a>
          )}
        </div>
      ))}
    </div>
  );
}
