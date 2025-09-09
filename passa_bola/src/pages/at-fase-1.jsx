import { Link, useNavigate } from 'react-router-dom';
import { CampoTexto } from '../compenentes/CampoTexto/CampoTexto';
import { NumFase } from "../compenentes/NumFase/NumFase";

const Fase1 = () => {
    return (
        <div className="h-[100vh] flex justify-center bg-gray-100 text-black">
            <div className="w-full max-w-[420px] h-[100vh] md:h-auto flex flex-col justify-between bg-white p-10 rounded-lg shadow-md">
                <div className='w-full flex flex-col items-start justify-center'>
                    <NumFase></NumFase>
                    <h1 className="text-xl font-semibold mb-4">Olá jogadora, preencha seus dados</h1>
                    <div className="flex-col justify-center gap-[4] items-center w-full">
                        <form action="">
                        <CampoTexto
                            label="Nome"
                            type="text"
                            placeholder="Digite seu nome"
                        />     
                        <CampoTexto
                            label="Senha"
                            type="text"
                            placeholder="Digite sua senha"
                        />
                            <button type="submit" className=""> 
                            Entrar
                            </button>
                        </form>
                    </div>
                </div>
            </div> 
        </div>
    );

}

export default Fase1;