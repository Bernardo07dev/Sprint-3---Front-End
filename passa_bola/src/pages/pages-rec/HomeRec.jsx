import React from "react";
import { useNavigate } from "react-router-dom";
import notif from "../../assets/icons/notif.svg";
import Footer from "../../compenentes/Footer/Footer";
import CardNoticia from "../../compenentes/Card.jsx/Card_Noticia";
import Noticias from '../api/Noticias';
import corin from "../../assets/icons/Corin.svg";
import palm from "../../assets/icons/Palm.svg";
import { jogadoras } from "../../models/Jogadoras.js";

const HomeRec = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex justify-center bg-gray-100 text-black">
      <main className="w-full max-w-[420px] min-h-[100vh] flex flex-col bg-white rounded-lg shadow-md ">
        <div className="p-10">
          <div className="flex justify-between mb-8">
            <h1 className="font-semibold text-2xl">Home</h1>
            <img src={notif} alt="Notificações" />
          </div>

          <h2 className="pb-4 text-lg font-medium">Radar de Talentos</h2>

          {jogadoras.map(j => (
            <div key={j.id} className="bg-gray-100 p-2 mb-4 rounded-2xl cursor-pointer">
              <div className="flex p-4 gap-4 rounded-lg">
                <img className="rounded-full w-20 h-20 object-cover" src={j.foto} alt={j.nome} />
                <div className="flex flex-col">
                  <h3 className="font-semibold">{j.nome}</h3>
                  <p className="text-[13px]">Idade: {j.idade}</p>
                  <p className="text-[12px]"><strong>Email:</strong> {j.email}</p>
                  <p className="text-[12px]"><strong>Clube:</strong> {j.clube}</p>
                  <p className="text-[12px]"><strong>Posição:</strong> {j.posicao}</p>
                </div>
              </div>
            </div>
          ))}

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
