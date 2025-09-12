import Footer from '../../compenentes/Footer/Footer';
import notif from '../../assets/icons/notif.svg';
import texas from '../../assets/icons/Texas.svg';
import pen from '../../assets/icons/pen.svg';
import plus from '../../assets/icons/plus.svg';

const PropostasRec = () =>  {
  return (
    <div className="min-h-screen flex justify-center bg-gray-100 text-black">
      <main className="w-full max-w-[420px] min-h-[100vh] md:h-auto flex flex-col bg-white rounded-lg shadow-md ">
            <div className="p-10 mb-20">
                <div className="flex flex-row justify-between mb-8">
                    <h1 className="font-semibold text-2xl">Propostas</h1>
                    <img src={notif} alt="" />
                </div>
            
            

                <h2 className="pb-4 text-lg font-medium">Suas Peneiras</h2>
                
                <div className='bg-gray-100 p-2 mb-4 rounded-2xl cursor-pointer'>
                    <div className="flex flex-row p-4 gap-4 rounded-lg ">
                        <div className='w-[20%]'>
                            <img src={texas} alt="" />
                        </div>

                        <div className="flex flex-col w-[70%]">
                            <h3 className="font-semibold">Universidade do Texas</h3>
                            <p className="font-light text-[13px]">Liga Universitária / 100% de Bolsa</p>
                            <a className="text-[12px]">Ver Detalhes</a>
                        </div>

                        <div className='flex w-[10%] items-center justify-center'><img src={pen} alt="" /></div>
                    </div>

                    <div className='flex flex-col justify-center align-middle px-6 pb-4'>
                        <p className='text-[13px] font-normal text-center mb-4'>|<strong> Localização</strong> São Paulo, SP | <strong>Data </strong>12/07/2025 |</p>
                        <h3 className='text-[12px] text-center font-normal underline mb-1'>Peneira Aberta para <strong>Categorias de Base - 2026</strong></h3>
                        <p className='text-[11px] font-light text-center'>The University of Texas at Austin, lar do time 'Texas Longhorns' da NCAA Division I, está vindo ao Brasil! Convidamos você para o nosso ID Clinic oficial, uma oportunidade única de ser treinada e avaliada diretamente pela nossa comissão técnica. Buscamos a próxima geração de 'student-athletes' de alto nível para se juntar ao nosso programa e competir em uma das melhores conferências universitárias dos EUA.</p>
                    </div>

                    <div className='px-6 pb-4'>
                        <h3 className='text-[14px] text-left font-semibold '>Objetivo do Evento:</h3>
                        <ul className='pl-6 pr-4 list-disc'>
                            <li className='text-[12px]'>Identificar talentos de elite para futuras bolsas de estudo esportivas (athletic scholarships).</li>
                            <li className='text-[12px]'>Avaliar o potencial técnico, tático e físico das participantes.</li>
                            <li className='text-[12px]'>Educar atletas e famílias sobre o processo de recrutamento da NCAA e a vida de uma estudante-atleta nos EUA.</li>
                        </ul>
                    </div>

                    <div className='px-6 pb-4'>
                        <h3 className='text-[14px] text-left font-semibold '>Requisitos Atléticos e Acadêmicos:</h3>
                        <ul className='pl-6 pr-4 list-disc'>
                            <li className='text-[12px]'>Nível Atlético: Atletas de alto rendimento, competindo em nível estadual ou nacional.</li>
                            <li className='text-[12px]'>Ano de Nascimento: Atletas nascidas entre 2007, 2008 e 2009.</li>
                            <li className='text-[12px]'>Potencial Acadêmico: Histórico escolar com boas notas (GPA alto) é um pré-requisito para admissão na universidade.</li>
                            <li className='text-[12px] '>Idioma: Nível de inglês intermediário ou avançado é um grande diferencial.</li>
                        </ul>
                    </div>

                    <p className='text-[10px] text-center px-8 pb-4 text-gray-500'>University of Texas at Austin (Recrutador: Angela Kelly, Head Coach) - Verificado </p>
                </div>

                <div className='flex flex-row p-8 bg-[#a1a1a10f] border-dotted border-3 border-[#a1a1a18a] rounded-2xl justify-center gap-2 cursor-pointer'>
                    <p className='text-[15px]'>Adicionar evento</p>
                    <img src={plus} alt="" />
                </div>

            </div>
        <Footer pg1='/homerec' pg2='/propostasrec' pg3='/noticiasrec' pg4='/contarec'></Footer>
      </main>
    </div>
  )
}

export default PropostasRec;