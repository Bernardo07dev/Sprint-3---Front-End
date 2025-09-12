import Footer from '../../compenentes/Footer/Footer';
import notif from '../../assets/icons/notif.svg';
import tecnica from '../../assets/images/tecnica.png';
import VerMaisRec from '../../compenentes/VerMais/VerMaisRec';

const ContaRec = () =>  {
  return (
    <div className="min-h-screen flex justify-center bg-gray-100 text-black">
      <main className="w-full max-w-[420px] min-h-[100vh] md:h-auto flex flex-col bg-white rounded-lg shadow-md ">
            <div className="p-10 ">
                <div className="flex flex-row justify-between mb-8">
                    <h1 className="font-semibold text-2xl">Conta</h1>
                    <img src={notif} alt="" />
                </div>

                <div className='bg-gray-100 p-2 mb-20 rounded-2xl'>
                    <div className="flex flex-row p-4 gap-4 rounded-lg ">
                        <div className='w-[25%]'>
                        <img className='rounded-full' src={tecnica} alt="" />
                        </div>

                        <div className="flex flex-col w-[75%]">
                        <h3 className="font-semibold">Angela Kelly</h3>
                        <p className=" text-[12px] text-gray-600">Head Coach (Técnica Principal)</p>
                        <p className="text-[9px] text-gray-600">University of Texas at Austin - Women's Soccer</p>
                        <p className="text-[12px]"><strong>Telefone:</strong> +55 11 98765-4321</p>
                        </div>
                    </div>

                    <VerMaisRec></VerMaisRec>

                    <div className='flex flex-col justify-center align-middle px-6 pt-4'>
                        <h2 className='text-[14px] font-normal text-center mb-4'><strong>Próximas Turmas de Recrutamento: </strong>Classes de 2026 e 2027</h2>
                    </div>

                    <div className='px-6 pb-4'>
                        <h3 className='text-[14px] text-left font-semibold '>Posições de Interesse (Prioridade):</h3>
                        <ul className='pl-6 pr-4 list-disc'>
                            <li className='text-[12px]'>Todas as posições são consideradas para atletas de alto nível.</li>
                            <li className='text-[12px]'>Interesse especial em: defensoras com boa saída de bola e atacantes de velocidade com capacidade de finalização.</li>
                        </ul>
                    </div>

                    <div className='px-6 pb-6'>
                        <h3 className='text-[14px] text-left font-semibold '>Perfil de Atleta Buscado:</h3>
                        <ul className='pl-6 pr-4 list-disc'>
                            <li className='text-[12px]'>Mentalidade competitiva e profissional.</li>
                            <li className='text-[12px]'>Forte desempenho acadêmico (GPA alto e bons resultados em testes são cruciais).</li>
                            <li className='text-[12px]'>Capacidade de liderança dentro e fora de campo.</li>
                            <li className='text-[12px]'>Atletas com potencial para impacto imediato no nível da NCAA D1.</li>
                            <li className='text-[12px]'>Disposição para abraçar a cultura de trabalho duro e excelência do nosso programa.</li>
                        </ul>
                    </div>

                    <div className='flex justify-center mb-6'>
                        <button className='bg-gray-200 text-center px-8 py-2 rounded-3xl font-[12px] border cursor-pointer'>Editar Perfil</button>
                    </div>

                </div>

            </div>
        <Footer pg1='/homerec' pg2='/propostasrec' pg3='/noticiasrec' pg4='/contarec'></Footer>
      </main>
    </div>
  )
}

export default ContaRec;