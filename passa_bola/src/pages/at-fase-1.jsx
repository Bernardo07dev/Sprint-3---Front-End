import { Link, useNavigate } from 'react-router-dom';
import { CampoTexto } from '../compenentes/CampoTexto/CampoTexto';
import { NumFase } from "../compenentes/NumFase/NumFase";

const Fase1 = () => {
    const navigate = useNavigate();
    const passoAtual = 1;
    const Link1 = '/at-fase-1';
    const Link2 = '/at-fase-2';
    const Link3 = '/at-fase-3';

    return (
        <div className="h-full flex justify-center bg-gray-100 text-black">
            <div className="w-full max-w-[420px] h-[100vh] md:h-auto flex flex-col justify-between bg-white p-10 rounded-lg shadow-md">
                <div className='w-full flex flex-col items-start justify-center'>
                    <NumFase passoAtual={passoAtual} Link1 = {Link1} Link2 = {Link2} Link3 = {Link3}/>
                    <h1 className="text-xl font-semibold mb-4">Olá jogadora, preencha seus dados:</h1>
                    <div className="flex-col justify-center gap-[4] items-center w-full">
                        <form action="">
                            <CampoTexto
                                label="Nome"
                                type="text"
                                placeholder="Digite seu nome"
                            />     
                            <CampoTexto
                                label="Data de nascimento"
                                type="text"
                                placeholder="Ex: 07/05/2007"
                            />
                            <CampoTexto
                                label="De que cidade você é"
                                type="text"
                                placeholder="Insira o nome da cidade"
                            />
                            <CampoTexto
                                label="Email"
                                type="text"
                                placeholder="Insira seu email"
                            />
                            <CampoTexto
                                label="Senha"
                                type="password"
                                placeholder="Crie sua senha"
                            />

                            <button onClick={() => navigate('/at-fase-2')} type="button" className="w-full p-3 my-2 cursor-pointer justify-center items-center rounded-sm border-2 border-[#0000001d] font-semibold duration-1000 hover:scale-[1.05]"> 
                                Próximo
                            </button>
                        </form>
                    </div>
                </div>
            </div> 
        </div>
    );

}

export default Fase1;