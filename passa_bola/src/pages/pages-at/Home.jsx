import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../compenentes/Autenticacao/Autenticacao.jsx";
import notif from "../../assets/icons/notif.svg";
import barra from "../../assets/icons/barra.svg";
import Footer from "../../compenentes/Footer/Footer";
import Card from "../../compenentes/Card.jsx/Card";
import CardNoticia from "../../compenentes/Card.jsx/Card_Noticia";
import Noticias from '../api/Noticias';
import corin from "../../assets/icons/Corin.svg";
import palm from "../../assets/icons/Palm.svg";

const Home = () => {
  const navigate = useNavigate();
  const { usuario } = useAuth();

  return (
    <div className="min-h-screen flex justify-center bg-gray-100 text-black">
      <main className="w-full max-w-[420px] min-h-[100vh] md:h-auto flex flex-col bg-white rounded-lg shadow-md">
        <div className="p-6 md:p-10">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="font-semibold text-2xl">Home</h1>
            <img src={notif} alt="Notificações" className="w-6 h-6" />
          </div>

          {/* Perfil do Usuário */}
          <h2 className="font-semibold text-lg mb-2">
            Olá, {usuario?.nome || "Jogadora"}!
          </h2>
          <div className="mb-4 flex gap-4 p-4 bg-gray-200 rounded-lg border border-transparent">
            <img
              src={usuario?.foto || "/assets/images/jogadora.png"}
              alt={usuario?.nome || "Jogadora"}
              className="w-20 h-20 object-cover rounded-full"
            />
            <div className="flex flex-col justify-between flex-1">
              <div>
                <h3 className="font-semibold">{usuario?.nome}</h3>
                <p className="font-light mb-1">{usuario?.idade} anos</p>
                <p className="text-[15px]">Perfil Incompleto</p>
              </div>
              <div className="flex flex-col gap-1">
                <img src={barra} alt="barra de progresso" className="w-full" />
                <a className="italic underline text-[13px] text-gray-600" href="#">
                  Completar Perfil
                </a>
              </div>
            </div>
          </div>

          {/* Dica do dia */}
          <h1 className="font-semibold text-lg mb-1">Dica do dia</h1>
          <p className="font-light mb-4">
            Recrutadores têm pouco tempo. Coloque suas{" "}
            <strong>
              3 melhores jogadas nos primeiros 30 segundos do seu vídeo de
              highlights.
            </strong>
          </p>

          {/* Peneiras próximas */}
          <h1 className="font-semibold text-lg mb-2">Peneiras perto de você</h1>
          <Card icon={corin} title="Corinthians Futebol Feminino" desc="Sub-17 e Sub-20 / 25 de Julho 2025" />
          <Card icon={palm} title="Palmeiras Futebol Feminino" desc="Sub-15 e Sub-17 / 06 de Agosto de 2025" />

          {/* Notícias */}
          <div className="pb-20 pt-6">
            <h1 className="font-semibold text-lg mb-2">Notícias Passa Bola</h1>
            <Noticias limit={2} />

            <button
              onClick={() => navigate("/noticias")}
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Ver Mais
            </button>
          </div>
        </div>

        <Footer pg1="/home" pg2="/propostas" pg3="/noticias" pg4="/conta" />
      </main>
    </div>
  );
};

export default Home;
