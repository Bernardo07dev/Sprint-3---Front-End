import Footer from '../../compenentes/Footer/Footer';
import notif from '../../assets/icons/notif.svg';
import Card from '../../compenentes/Card.jsx/Card';

const Propostas = () =>  {
  return (
    <div className="min-h-screen flex justify-center bg-gray-100 text-black">
      <main className="w-full max-w-[420px] min-h-[100vh] md:h-auto flex flex-col bg-white rounded-lg shadow-md ">
        <div className="p-10">
          <div className="flex flex-row justify-between mb-8">
            <h1 className="font-semibold text-2xl">Propostas</h1>
            <img src={notif} alt="" />
          </div>

          <Card icon="" title="Universidade do Texas" desc="Liga Universitária / 100% de Bolsa"></Card>
          <Card icon="" title="São Paulo Futebol Feminino" desc="Sub-18 / Copinha e Campeonato Brasileiro"></Card>
          <Card icon="" title="Universidade do Texas" desc="Liga Universitária / 100% de Bolsa"></Card>
        </div>
        <Footer></Footer>
      </main>
    </div>
  )
}

export default Propostas;