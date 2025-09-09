import { CampoTexto } from "../compenentes/CampoTexto/CampoTexto.jsx";
import logo from '../assets/icons/Logo.svg';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Login = () =>  {
  const navigate = useNavigate();
  const handleLogin = () => {
    console.log("Verificando os dados...");
    navigate('/home'); 
  };
  return (
    <div className="h-[100vh] flex justify-center bg-gray-100 text-black">
      <div className="w-full max-w-[420px] h-[100vh] md:h-auto flex flex-col justify-between bg-white p-10 rounded-lg shadow-md">
        
        <div className="flex justify-center">
            <img src={logo} alt="Logo Passa a Bola" className='w-16' />
          </div>

          <div className='w-full flex flex-col items-center justify-center'>
            <h1 className="text-xl font-semibold mb-4">Faça seu Login</h1>
            
            <div className="flex-col justify-center gap-[4] items-center w-full">
              <form action="">
                <CampoTexto
                  label="Email"
                  type="email"
                  placeholder="seuemail@exemplo.com"
                />     
              
      
                <CampoTexto
                  label="Senha"
                  type="text"
                  placeholder="Digite sua senha"
                />

                  <button onClick={handleLogin} type="submit" className="cursor-pointer w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded focus:outline-none focus:shadow-outline mt-4"> 
                    Entrar
                  </button>
              </form>
            </div>

            <p className="text-center text-sm text-gray-600 mt-5">
              Não tem conta?{' '}
              <Link to="/" className="font-semibold text-blue-700 hover:underline">
                Clique aqui e crie sua conta.
              </Link>
            </p>
          </div>

        <div/> 

      </div>
    </div>
  )
}

export default Login;