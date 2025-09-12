import Footer from '../../compenentes/Footer/Footer';
import notif from '../../assets/icons/notif.svg';
import jogadora from '../../assets/images/jogadora.png';

const HomeRec = () => {
    return(
        <div className="min-h-screen flex justify-center bg-gray-100 text-black">
            <main className="w-full max-w-[420px] min-h-[100vh] md:h-auto flex flex-col bg-white rounded-lg shadow-md ">
                <div className="p-10">
                    <div className="flex flex-row justify-between mb-8">
                        <h1 className="font-semibold text-2xl">Home</h1>
                        <img src={notif} alt="" />
                    </div>

                <h2 className="pb-4 text-lg font-medium">Radar de Talentos</h2>
                
                <div className='bg-gray-100 p-2 mb-20 rounded-2xl cursor-pointer'>
                    <div className="flex flex-row p-4 gap-4 rounded-lg ">
                        <div>
                            <img src={jogadora} alt="" />
                        </div>

                        <div className="flex flex-col">
                        <h3 className="font-semibold">Luciane Barbosa</h3>
                        <p className="font-light text-[13px]">07/05/2007</p>
                        <p className="text-[12px]"><strong>Email:</strong> Luciane.Barbosa2007@email.com</p>
                        <p className="text-[12px]"><strong>Telefone:</strong> +55 11 98765-4321</p>
                        </div>
                    </div>

                    <div className='flex flex-row justify-between align-middle px-6 pb-4'>
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
                </div>

                </div>
                <Footer pg1='/homerec' pg2='/propostasrec' pg3='/noticiasrec' pg4='/contarec'></Footer>
            </main>
        </div>
        
    )
}

export default HomeRec;