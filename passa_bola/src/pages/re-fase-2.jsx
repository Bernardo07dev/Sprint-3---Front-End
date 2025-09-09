import { useNavigate } from 'react-router-dom';
import { CampoTexto } from '../compenentes/CampoTexto/CampoTexto';
import { NumFase } from "../compenentes/NumFase/NumFase";
import React, { useState } from 'react';

const RFase2 = () => {
    const navigate = useNavigate();
    const [passoAtual, setPassoAtual] = useState(2);
    const [opcao, setOpcao] = useState("2");

    return (
        <div className="h-full flex justify-center bg-gray-100 text-black">
            <div className="w-full max-w-[420px] h-[100vh] md:h-auto flex flex-col justify-between bg-white p-10 rounded-lg shadow-md">
                <div className="w-full flex flex-col items-start justify-center">
                    <NumFase passoAtual={passoAtual} />

                    <h1 className="text-xl font-semibold mb-6">
                        Conte-nos sobre você e sua organização
                    </h1>

                    <form className="w-full flex flex-col gap-4">
                        <div className="w-full">
                            <label className="block text-sm font-medium mb-2">
                                Seu cargo atual
                            </label>
                            <select
                                value={opcao}
                                onChange={(e) => setOpcao(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:outline-none bg-gray-50"
                            >
                                <option value="">Selecione</option>
                                <option value="tecnico">Técnico(a)</option>
                                <option value="investidor">Investidor</option>
                                <option value="escola">Escola</option>
                            </select>
                        </div>

                        <CampoTexto
                            label="Nome do Clube, Universidade ou Agência"
                            type="text"
                            placeholder="Ex: SC Corinthians, Universidade da Flórida"
                        />
                        <CampoTexto
                            label="Site oficial da sua instituição"
                            type="text"
                            placeholder="Ex: www.nomedoclube.com.br"
                        />
                        <CampoTexto
                            label="Localização da Instituição"
                            type="text"
                            placeholder="Ex: Brasil, São Paulo - SP"
                        />

                        <button onClick={() => navigate('/re-fase-3')} type="button" className="w-full p-3 my-2 cursor-pointer justify-center items-center rounded-sm border-2 border-[#0000001d] font-semibold duration-1000 hover:scale-[1.05]">
                            Próximo
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RFase2;
