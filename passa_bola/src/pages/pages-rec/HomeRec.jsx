import { useNavigate } from "react-router-dom";
import notif from "../../assets/icons/notif.svg";
import Footer from "../../compenentes/Footer/Footer";
import Noticias from '../api/Noticias';
import React, { useEffect, useState } from "react";

const HomeRec = () => {
  const navigate = useNavigate();
  const [jogadoras, setJogadoras] = useState([]);

  // Fetch das jogadoras do backend
  useEffect(() => {
    fetch("http://localhost:5000/jogadoras")
      .then(res => res.json())
      .then(data => setJogadoras(data))
      .catch(err => console.error("Erro ao buscar jogadoras:", err));
  }, []);

  return (
    <div className="min-h-screen flex justify-center bg-gray-100 text-black">
      <main className="w-full max-w-[420px] min-h-[100vh] md:h-auto flex flex-col bg-white rounded-lg shadow-md ">
        <div className="p-10">
          {/* Header */}
          <div className="flex flex-row justify-between mb-8">
            <h1 className="font-semibold text-2xl">Home</h1>
            <img src={notif} alt="Notificações" />
          </div>

          {/* Radar de Talentos */}
          <h2 className="pb-4 text-lg font-medium">Radar de Talentos</h2>

          {/* Lista dinâmica de jogadoras */}
          {jogadoras.length === 0 ? (
            <p>Carregando jogadoras...</p>
          ) : (
            jogadoras.map(j => (
              <div key={j.id} className="bg-gray-100 p-2 mb-4 rounded-2xl cursor-pointer">
                <div className="flex flex-row p-4 gap-4 rounded-lg">
                  <div className="w-[25%]">
                    <img
                      className="rounded-full"
                      src={j.foto}  
                      alt={j.nome}
                    />
                  </div>
                  <div className="flex flex-col w-[75%]">
                    <h3 className="font-semibold">{j.nome}</h3>
                    <p className="font-light text-[13px]">Idade: {j.idade} anos</p>
                    <p className="text-[12px]"><strong>Email:</strong> {j.email}</p>
                    <p className="text-[12px]"><strong>Clube:</strong> {j.clube}</p>
                    <p className="text-[12px]"><strong>Posição:</strong> {j.posicao}</p>
                  </div>
                </div>
              </div>
            ))
          )}

          {/* Notícias Passa Bola */}
          <div className="pb-20 pt-6">
            <h1 className="font-semibold text-lg">Notícias Passa Bola</h1>
            <Noticias limit={2} />

            <button
              onClick={() => navigate("/noticiasrec")}
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Ver mais
            </button>
          </div>
        </div>

        <Footer
          pg1="/homerec"
          pg2="/propostasrec"
          pg3="/noticiasrec"
          pg4="/contarec"
        />
      </main>
    </div>
  );
};

export default HomeRec;
