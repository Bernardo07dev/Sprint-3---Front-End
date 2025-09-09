import { Link, useNavigate } from 'react-router-dom';
import { CampoTexto } from '../compenentes/CampoTexto/CampoTexto';
import { NumFase } from "../compenentes/NumFase/NumFase";
import React, { useState } from 'react';

const RFase1 = () => {
    const navigate = useNavigate();
    const [passoAtual, setPassoAtual] = useState(1);

    return (
        <div className="h-full flex justify-center bg-gray-100 text-black">
            <div className="w-full max-w-[420px] h-[100vh] md:h-auto flex flex-col justify-between bg-white p-10 rounded-lg shadow-md">
                <div className='w-full flex flex-col items-start justify-center'>
                    <NumFase passoAtual={passoAtual}></NumFase>
                    <h1 className="text-xl font-semibold mb-4">Olá recrutador, preencha seus dados</h1>
                    <div className="flex-col justify-center gap-[4] items-center w-full">
                        <form action="">
                            <CampoTexto
                                label="Nome"
                                type="text"
                                placeholder="Digite seu nome"
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
                                type="text"
                                placeholder="Crie sua senha"
                            />
                            <CampoTexto
                                label="Confirme sua senha"
                                type="text"
                                placeholder="Confirme sua senha"
                            />
                            <button onClick={() => navigate('/re-fase-2')} type="button" className="w-full p-3 my-2 cursor-pointer justify-center items-center rounded-sm border-2 border-[#0000001d] font-semibold duration-1000 hover:scale-[1.05]"> 
                            Próximo
                        </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default RFase1;