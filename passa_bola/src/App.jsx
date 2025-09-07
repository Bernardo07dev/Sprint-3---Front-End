import logo from '../src/assets/icons/Logo.svg';
function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-black">
      <div className="w-full max-w-[420px] flex flex-col justify-center items-center bg-white h-[100vh] p-10">
        <div className="h-[35vh]">
          <img src= {logo} alt="" className='w-17' />
        </div>

        <div className='w-full flex flex-col items-center justify-center mb-55'>
          <h1 className="text-xl font-semibold mb-4">Escolha o tipo de conta</h1>
          
          <div className="flex justify-center gap-2 w-full">
            
            <button className=" flex-1 flex flex-col cursor-pointer items-center p-4 bg-gray-50 rounded-lg border border-gray-300 hover:border-blue-500 transition-all duration-200">
              <p className="font-semibold text-base">Sou Atleta</p>
              <p className="text-[11px] text-gray-600 ">Mostre seu talento</p>
            </button>

            <button className="flex-1 flex flex-col cursor-pointer items-center p-4 bg-gray-50 rounded-lg border border-gray-300 hover:border-blue-500 transition-all duration-200">
              <p className="font-semibold text-base ">Sou Recrutador</p>
              <p className="text-[11px] text-gray-600 ">Encontre uma estrela</p>
            </button>            
          </div>
         <p className="text-center text-sm text-gray-600 mt-5">
            Já tem conta?{' '}
            <a href="#" className="font-semibold text-blue-700 hover:underline">
              Clique aqui
            </a>{' '}
            e faça login
          </p>
        </div>
        

      </div>
    </div>
  )
}

export default App;