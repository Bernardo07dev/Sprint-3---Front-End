import { useAuth } from "../../compenentes/Autenticacao/Autenticacao.jsx";
import { useNavigate } from "react-router-dom";
 

const Home = () => {
  const { usuario, sair } = useAuth();
  const navegar = useNavigate();

  const handleSair = () => {
    sair();
    navegar("/login");
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Bem-vindo, {usuario?.email}!</h1>
      <button
        onClick={handleSair}
        className="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-700"
      >
        Sair
      </button>
    </div>
  );
};

export default Home;
