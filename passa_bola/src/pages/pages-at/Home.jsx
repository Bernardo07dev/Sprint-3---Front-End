import React from "react";
import { useNavigate } from "react-router-dom"; // Para navegação SPA
import notif from "../../assets/icons/notif.svg";
import jogadora from "../../assets/images/jogadora.png";
import barra from "../../assets/icons/barra.svg";
import palm from "../../assets/icons/Palm.svg";
import corin from "../../assets/icons/Corin.svg";

import Footer from "../../compenentes/Footer/Footer";
import Card from "../../compenentes/Card.jsx/Card";
import Noticias from "../../compenentes/noticias_Api/Noticias";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex justify-center bg-gray-100 text-black">
      <main className="w-full max-w-[420px] min-h-[100vh] md:h-auto flex flex-col bg-white rounded-lg shadow-md">
        <div className="p-10">
          {/* Header */}
          <div className="flex flex-row justify-between mb-8">
            <h1 className="font-semibold text-2xl">Home</h1>
            <img src={notif} alt="Notificações" />
          </div>

          {/* Perfil do Usuário */}
          <h2 className="font-semibold text-lg mb-2">Olá Luciane:</h2>
          <div className="mb-4 flex flex-row p-4 gap-4 bg-gray-200 rounded-lg border border-transparent">
            <img src={jogadora} alt="Luciane Barbosa" />
            <div className="flex flex-col">
              <h3 className="font-semibold">Luciane Barbosa</h3>
              <p className="font-light mb-1">07/05/2007</p>
              <p className="text-[15px]">Perfil Incompleto</p>
              <img src={barra} alt="barra de progresso" />
              <a className="italic underline text-[13px] text-gray-600" href="">
                Completar Perfil
              </a>
            </div>
          </div>

          {/* Dica do dia */}
          <h1 className="font-semibold text-lg">Dica do dia</h1>
          <p className="font-light mb-4">
            Recrutadores têm pouco tempo. Coloque suas{" "}
            <strong>
              3 melhores jogadas nos primeiros 30 segundos do seu vídeo de highlights.
            </strong>
          </p>

          {/* Peneiras próximas */}
          <h1 className="font-semibold text-lg">Peneiras perto de você</h1>
          <Card
            icon={palm}
            title="Palmeiras Futebol Feminino"
            desc="Sub-15 e Sub-17 / 06 de Agosto de 2025"
          />
          <Card
            icon={corin}
            title="Corinthians Futebol Feminino"
            desc="Sub-17 e Sub-20 / 25 de Julho 2025"
          />

          {/* Notícias Passa Bola */}
          <div className="pb-20 pt-6">
            <h1 className="font-semibold text-lg mb-2">Notícias Passa Bola</h1>
            <Noticias limit={2} />

            {/* Botão Ver Mais */}
            <button
              onClick={() => navigate("/noticiasrec")}
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Ver Mais
            </button>
          </div>
        </div>

        {/* Footer */}
        <Footer pg1="/home" pg2="/propostas" pg3="/noticias" pg4="/conta" />
      </main>
    </div>
  );
};

export default Home;
