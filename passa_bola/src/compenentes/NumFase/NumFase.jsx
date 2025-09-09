import './NumFase.css'

export function NumFase(){

    return (
        <div className="w-full flex justify-between items-center p-4 gap-2 mb-4">
            <div className="bg-gray-100 px-4 py-2 rounded-full border-[#53535300] ativo ${passoAtual === 1 ? 'ativo' : ''}">
                <p>1</p>
            </div>

            <div className="flex-grow h-1 bg-gray-100"></div>

            <div className="bg-gray-100 px-4 py-2 rounded-full border-[#53535300] ${passoAtual === 2 ? 'ativo' : ''}">
                <p>2</p>
            </div>

            <div className="flex-grow h-1 bg-gray-100"></div>

            <div className="bg-gray-100 px-4 py-2 rounded-full border-[#53535300] ${passoAtual === 3 ? 'ativo' : ''}">
                <p>3</p>
            </div>
        </div>
  );
};

export default NumFase; 