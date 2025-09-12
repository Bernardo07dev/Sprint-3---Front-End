import Footer from '../../compenentes/Footer/Footer';
import notif from '../../assets/icons/notif.svg';

const PropostasRec = () =>  {
  return (
    <div className="min-h-screen flex justify-center bg-gray-100 text-black">
      <main className="w-full max-w-[420px] min-h-[100vh] md:h-auto flex flex-col bg-white rounded-lg shadow-md ">
        <div className="p-10">
          <div className="flex flex-row justify-between mb-8">
            <h1 className="font-semibold text-2xl">Propostas</h1>
            <img src={notif} alt="" />
          </div>


        </div>
        <Footer pg1='/homerec' pg2='/propostasrec' pg3='/noticiasrec' pg4='/contarec'></Footer>
      </main>
    </div>
  )
}

export default PropostasRec;