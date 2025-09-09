import logo from '../assets/icons/Logo.svg';
import { Link, useNavigate } from 'react-router-dom';

export function EscolhaConta() {
  const navigate = useNavigate();

  return (
    <div className="h-[100vh] flex justify-center bg-gray-100 text-black">
      <div className="w-full max-w-[420px] h-[100vh] md:h-auto flex flex-col justify-between bg-white p-10 rounded-lg shadow-md">
        
        <div className="flex justify-center">
          <img src={logo} alt="Logo Passa a Bola" className='w-16' />
        </div>

        <div className='w-full flex flex-col items-center justify-center'>
          <h1 className="text-xl font-semibold mb-4">Escolha o tipo de conta</h1>
          
          <div className="flex justify-center gap-2 w-full">
            <button onClick={() => navigate('/at-fase-1')} className="flex-1 flex flex-col cursor-pointer items-center p-4 bg-gray-50 rounded-lg border border-gray-300 hover:border-blue-500 transition-all duration-200">
              <p className="font-semibold text-base">Sou Atleta</p>
              <p className="text-[11px] text-gray-600">Mostre seu talento</p>
            </button>

            <button className="flex-1 flex flex-col cursor-pointer items-center p-4 bg-gray-50 rounded-lg border border-gray-300 hover:border-blue-500 transition-all duration-200">
              <p className="font-semibold text-base">Sou Recrutador</p>
              <p className="text-[11px] text-gray-600">Encontre uma estrela</p>
            </button>          
          </div>

          <p className="text-center text-sm text-gray-600 mt-5">
            Já tem conta?{' '}
            <Link to="/login" className="font-semibold text-blue-700 hover:underline">
              Clique aqui e faça login
            </Link>
          </p>
        </div>

        <div /> 

      </div>
    </div>
  );
}

export default EscolhaConta;