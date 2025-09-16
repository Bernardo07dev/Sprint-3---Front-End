import { useNavigate } from 'react-router-dom';
import { CampoTexto } from '../compenentes/CampoTexto/CampoTexto';
import { NumFase } from "../compenentes/NumFase/NumFase";
import { CampoCheckbox } from '../compenentes/CampoCheckbox/CampoCheckbox';
import { CampoArea } from '../compenentes/CampoArea/CampoArea';
import { CampoImport } from '../compenentes/CampoImport/CampoImport';

const Fase3 = () => {
    const navigate = useNavigate();
    const passoAtual = 3;
    const Link1 = '/at-fase-1';
    const Link2 = '/at-fase-2';
    const Link3 = '/at-fase-3';

    return (
        <div className="h-full flex justify-center bg-gray-100 text-black">
            <div className="w-full max-w-[420px] md:h-auto flex flex-col justify-between bg-white p-10 rounded-lg shadow-md">
                <div className='w-full flex flex-col items-start justify-center'>
                    <NumFase passoAtual={passoAtual} Link1 = {Link1} Link2 = {Link2} Link3 = {Link3}/>
                    <h1 className="text-xl font-semibold mb-4">Vamos finalizar seu perfil:</h1>
                    <div className="flex-col justify-center gap-[4] items-center w-full">
                        <form action="">
                            <CampoImport 
                                titulo="Adicione suas melhores fotos de jogos ou treinos" 
                                descricao="Mantenha o vídeo entre 2-5 minutos e comece com suas jogadas mais impressionantes." 
                            />
                            <CampoImport 
                                titulo="Vídeo de Highlights" 
                                descricao="" 
                            />  

                            <h1 className='font-semibold mb-2'>Histórico Acadêmico (Opicional) </h1>
                            <CampoTexto
                                label="Nome da sua escola/colégio atual"
                                type="text"
                                placeholder="Insira o nome aqui"
                            />
                            <CampoTexto
                                label="Em que ano você se forma no Ensino Médio?"
                                type="text"
                                placeholder="Ex: 2025"
                            />
                            <CampoTexto
                                label="Qual área você gostaria de estudar na faculdade?"
                                type="text"
                                placeholder="Ex: Educação Física, Engenharia, Fisioterapia"
                            />


                            <button onClick={() => (navigate('/Login'))} type="button" className="w-full p-3 my-2 cursor-pointer justify-center items-center rounded-sm border-2 border-[#0000001d] font-semibold duration-1000 hover:scale-[1.05]"> 
                                Próximo
                            </button>
                        </form>
                    </div>
                </div>
            </div> 
        </div>
    );
    
}

export default Fase3