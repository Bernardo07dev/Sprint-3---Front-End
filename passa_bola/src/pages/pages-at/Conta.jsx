import Footer from '../../compenentes/Footer/Footer';
import notif from '../../assets/icons/notif.svg';
import jogadora from '../../assets/images/jogadora.png';
import VerMais from '../../compenentes/VerMais/VerMais';
import vid from '../../assets/images/vid.png';

const Conta = () =>  {
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
                <div>
                <img src={jogadora} alt="" />
                </div>

                <div className="flex flex-col">
                <h3 className="font-semibold">Luciane Barbosa</h3>
                <p className="font-light text-[14px]">07/05/2007</p>
                <p className="text-[12px]"><strong>Email:</strong> Luciane.Barbosa2007@email.com</p>
                <p className="text-[12px]"><strong>Telefone:</strong> +55 11 98765-4321</p>
                </div>
            </div>

            <VerMais></VerMais>

            <div className='flex flex-row justify-between align-middle px-6 py-4'>
                <div>
                    <p className='text-[13px]'>Altura</p>
                    <div className='p-2 bg-gray-200 rounded-sm text-[13px]'><p>1,68 m</p></div>
                </div>

                <div>
                    <p className='text-[13px]'>Peso</p>
                    <div className='p-2 bg-gray-200 rounded-sm text-[13px]'><p>59 Kg</p></div>
                </div>

                <div>
                    <p className='text-[13px]'>Perna Boa</p>
                    <div className='p-2 bg-gray-200 rounded-sm text-[13px]'><p>Esquerda</p></div>
                </div>

                <div>
                    <p className='text-[13px]'>Posição</p>
                    <div className='p-2 bg-gray-200 rounded-sm text-[13px]'><p>MEI</p></div>
                </div>
            </div>

            <h1 className='text-center pt-4 pb-4'>Histórico e Estatísticas</h1>
            <div className='flex flex-col gap-2'>
                <p className='text-[13px] px-6 font-light'><strong>🏆 Campeã </strong>- Copa Futebol Feminino - 2024</p>
                <p className='text-[13px] px-6 font-light'><strong>©️ Capitã da equipe </strong>- Estrela FC - 24/25</p>
                <p className='text-[13px] px-6 font-light'><strong>⭐ Melhor Jogadora (MVP) </strong>- Copa SP - 2024</p>
                <p className='text-[13px] px-6 font-light'><strong>⚽ Artilheira da equipe - </strong>temporada 2024</p>
            </div>
            <div className='flex flex-row justify-between align-middle px-10 py-4'>
                <div>
                    <p className='text-[13px] font-light'>Jogos</p>
                    <div className='p-2 bg-gray-200 rounded-sm text-[14px]'><p>22</p></div>
                </div>

                <div>
                    <p className='text-[13px] font-light'>Gols</p>
                    <div className='p-2 bg-gray-200 rounded-sm text-[14px]'><p>14</p></div>
                </div>

                <div className='flex flex-col justify-center items-center'>
                    <p className='text-[13px] font-light'>Assistências</p>
                    <div className='p-2 bg-gray-200 rounded-sm text-[14px] text-center w-[50%]'><p>19</p></div>
                </div>

                <div>
                    <p className='text-[13px] font-light'>Passes</p>
                    <div className='p-2 bg-gray-200 rounded-sm text-[14px]'><p>88%</p></div>
                </div>
            </div>

            <h1 className='text-center pt-4 pb-4 '>Vídeo Highlight</h1>
            <img className="px-6 mb-6 rounded-3xl cursor-pointer" src={vid} alt="" />

            <div className='flex justify-center mb-6'>
                <button className='bg-gray-200 text-center px-8 py-2 rounded-3xl font-[12px] border cursor-pointer'>Editar Perfil</button>
            </div>

        </div>

        </div>
        <Footer pg1='/home' pg2='/propostas' pg3='/noticias' pg4='/conta'></Footer>
      </main>
    </div>
  )
}

export default Conta;