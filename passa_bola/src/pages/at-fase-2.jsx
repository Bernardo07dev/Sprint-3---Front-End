import { Link, useNavigate } from 'react-router-dom';
import { CampoTexto } from '../compenentes/CampoTexto/CampoTexto';
import { NumFase } from "../compenentes/NumFase/NumFase";
import { CampoCheckbox } from '../compenentes/CampoCheckbox/CampoCheckbox';
import { CampoArea } from '../compenentes/CampoArea/CampoArea';

const Fase2 = () => {
    const passoAtual = 2;
    const navigate = useNavigate();
    const Link1 = '/at-fase-1';
    const Link2 = '/at-fase-2';
    const Link3 = '/at-fase-3';

    return (
        <div className="min-h-screen flex justify-center bg-gray-100 text-black">
            <div className="w-full max-w-[420px]  md:h-auto flex flex-col justify-between bg-white p-10 rounded-lg shadow-md">
                <div className='w-full flex flex-col items-start justify-center'>
                    <NumFase passoAtual={passoAtual} Link1 = {Link1} Link2 = {Link2} Link3 = {Link3}/>
                    <h1 className="text-xl font-semibold mb-4">Agora fale sobre você, como jogadora:</h1>
                    <div className="flex-col justify-center gap-[4] items-center w-full">
                        <form action="">
                            <CampoTexto
                                label="Qual posição você joga?"
                                type="text"
                                placeholder="Ex: ATA"
                            />     
                            <CampoTexto
                                label="Posição Secundária (Opcional)"
                                type="text"
                                placeholder="Ex: MEI"
                            />
                            <CampoCheckbox label="Já jogou em algum local?" opcao1="Sim" opcao2="Não"/>
                            <CampoTexto
                                label=""
                                type="text"
                                placeholder="Se sim onde?"
                            />
                            <CampoTexto
                                label="Escreva seus números da ultima temporada"
                                type="text"
                                placeholder="Ex: Gols na temporada: 15, Assistências: 8."
                            />
                            <CampoArea
                                label="De uma descrição rápida sobre sua carreira e sobre você como jogadora"
                                placeholder="Max: 150 palavras"
                            /> 

                            <h1 className='font-semibold mb-2'>Medidas Corporais</h1>
                            <CampoTexto
                                label="Altura"
                                type="text"
                                placeholder="Insira sua altura (em cm)"
                            />
                            <CampoTexto
                                label="Peso"
                                type="text"
                                placeholder="Insira seu peso (em kg)"
                            />
                            <CampoTexto
                                label="Envergadura (opicional)"
                                type="text"
                                placeholder="Insira a envergadura (em cm)"
                            />

                            <button onClick={() => (navigate('/at-fase-3'))} type="button" className="w-full p-3 my-2 cursor-pointer justify-center items-center rounded-sm border-2 border-[#0000001d] font-semibold duration-1000 hover:scale-[1.05]"> 
                                Próximo
                            </button>
                        </form>
                    </div>
                </div>
            </div> 
        </div>
    );

}

export default Fase2;