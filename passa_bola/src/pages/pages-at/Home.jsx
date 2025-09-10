import logo from '../../assets/icons/Logo.svg';
import notif from '../../assets/icons/notif.svg';
import jogadora from '../../assets/images/jogadora.png';
import barra from '../../assets/icons/barra.svg';
import { Link } from 'react-router-dom';

const Home = () =>  {
  return (
    <div className="h-[100vh] flex justify-center bg-gray-100 text-black">
      <div className="w-full max-w-[420px] h-[100vh] md:h-auto flex flex-col bg-white p-10 rounded-lg shadow-md">
        <div className="flex flex-row justify-between mb-8">
          <h1 className="font-semibold text-2xl">Home</h1>
          <img src={notif} alt="" />
        </div>

        <h2 className="font-semibold text-lg mb-2">Olá Luciane:</h2>
        <div className="mb-4 flex flex-row p-4 gap-4 bg-gray-100 rounded-lg border border-[#00000019]">
          <div>
            <img src={jogadora} alt="" />
          </div>

          <div className="flex flex-col ">
            <h3 className="font-semibold">Luciane Barbosa</h3>
            <p className="font-light mb-1">07/05/2007</p>
            <p className="text-[15px]">Perfil Incompleto</p>
            <img src={barra} alt="" />
            <a className=" italic underline text-[13px] text-gray-600" href="">Completar Perfil</a>
          </div>
        </div>

          <h1 className="font-semibold text-lg">Dica do dia</h1>
          <p className="font-light">Recrutadores têm pouco tempo. Coloque suas <strong>3 melhores jogadas nos primeiros 30 segundos do seu vídeo de highlights.</strong></p>
      </div>
    </div>
  )
}

export default Home;