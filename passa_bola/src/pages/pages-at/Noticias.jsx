import Footer from '../../compenentes/Footer/Footer';
import notif from '../../assets/icons/notif.svg';
import Noticia from '../../compenentes/noticias_Api/Noticias'

const Noticias = () =>  {
  return (
    <div className="min-h-screen flex justify-center bg-gray-100 text-black">
      <main className="w-full max-w-[420px] min-h-[100vh] md:h-auto flex flex-col bg-white rounded-lg shadow-md ">
        <div className="p-10">
          <div className="flex flex-row justify-between mb-8">
            <h1 className="font-semibold text-2xl">Notícias</h1>
            <img src={notif} alt="" />
          </div>

          <Noticia />

        </div>
        <Footer pg1='/home' pg2='/propostas' pg3='/noticias' pg4='/conta'></Footer>
      </main>
    </div>
  )
}

export default Noticias;
