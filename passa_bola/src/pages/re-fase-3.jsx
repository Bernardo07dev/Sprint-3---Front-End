import { useNavigate } from 'react-router-dom';
import { CampoTexto } from '../compenentes/CampoTexto/CampoTexto';
import { NumFase } from "../compenentes/NumFase/NumFase";
import { CampoImport } from '../compenentes/CampoImport/CampoImport';

const RFase3 = () => {
    const navigate = useNavigate();
    const passoAtual = 3;
    const Link1 = '/re-fase-1';
    const Link2 = '/re-fase-2';
    const Link3 = '/re-fase-3';

    return (
        <div className="min-h-screen flex justify-center bg-gray-100 text-black">
            <div className="w-full max-w-[420px] h-[100vh] md:h-auto flex flex-col justify-between bg-white p-10 rounded-lg shadow-md">
                <div className="w-full flex flex-col items-start justify-center">
                    <NumFase passoAtual={passoAtual} Link1 = {Link1} Link2 = {Link2} Link3 = {Link3}/>

                    <h1 className="text-xl font-semibold mb-6">
                        Verificação de Vínculo Profissional
                    </h1>

                    <form className="w-full flex flex-col gap-4">

                        <CampoImport
                            titulo="Envie um comprovante de vínculo" 
                            descricao="Pode ser uma foto do seu crachá funcional, uma carta timbrada da instituição ou outro documento que mostre seu nome e o logo da organização."
                        />

                        <CampoImport
                            titulo="Link de Verificação" 
                            descricao="Cole aqui o link da página 'Nossa Equipe' ou 'Corpo Técnico' no site oficial da sua instituição, onde seu nome aparece."
                        />

                        <button
                            onClick={() => navigate('/HomeRec')}
                            type="button"
                            className="w-full p-3 my-2 cursor-pointer justify-center items-center rounded-sm border-2 border-[#0000001d] font-semibold duration-1000 hover:scale-[1.05]"
                        >
                            Próximo
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RFase3;
