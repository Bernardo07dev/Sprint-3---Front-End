import { useNavigate } from 'react-router-dom';

const RFase4 = () => {
    const navigate = useNavigate();

    return(
        <div className="min-h-screen flex justify-center bg-gray-100 text-black">
            <div className="w-full max-w-[420px] h-[100vh] md:h-auto flex flex-col justify-center bg-white p-10 rounded-lg shadow-md">
                <div className="w-full flex flex-col items-center justify-center">

                    <p className="text-base mb-6">
                    <strong>Obrigado, Carlos!</strong> Recebemos seus dados.
                    Sua conta está agora em <strong>processo de análise pela nossa equipe.</strong>
                    Você receberá um email de confirmação assim que sua conta for aprovada, o que geralmente leva até <strong>48 horas úteis. </strong>
                    A partir da aprovação, <strong>você terá acesso total à plataforma </strong> para descobrir os próximos grandes talentos do esporte.
                    </p>

                    <button
                        onClick={() => navigate('/Login')}
                        type="button"
                        className="w-full p-3 my-2 cursor-pointer justify-center items-center rounded-sm border-2 border-[#0000001d] font-semibold duration-1000 hover:scale-[1.05]"
                    >
                        Próximo
                    </button>

                </div>
            </div>
        </div>
    )
}

export default RFase4;