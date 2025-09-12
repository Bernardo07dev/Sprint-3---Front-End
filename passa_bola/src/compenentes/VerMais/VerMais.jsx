import { useState } from 'react';

const VerMais = () => {
  const [expandido, setExpandido] = useState(false);

  const textoCurto = `Meio-campista com forte visão de jogo e liderança natural. Minha paixão é ditar o ritmo da partida, organizando a equipe e conectando a defesa ao ataque com passes precisos. Atualmente no Estrela Dourada FC, onde sou capitã da equipe Sub-17.`;

  const textoCompleto = `Meio-campista com forte visão de jogo e liderança natural. Minha paixão é ditar o ritmo da partida, organizando a equipe e conectando a defesa ao ataque com passes precisos. Atualmente no Estrela Dourada FC, onde sou capitã da equipe Sub-17.

Campeã da Copa Regional em 2024, aprendi a importância da disciplina e da resiliência sob pressão. Meu grande objetivo é unir o futebol de alto nível com uma educação de excelência, buscando uma bolsa de estudos (scholarship) em uma universidade nos Estados Unidosersar.`;

  return (
    <div className="px-4 pb-2">
      <p className="text-gray-800 text-sm">
        {expandido ? textoCompleto : textoCurto}
      </p>

      <div className="mt-4 text-center">
        <button
          onClick={() => setExpandido(!expandido)}
          className="w-full text-center px-4 rounded-lg  transition cursor-pointer font-semibold"
        >
          {expandido ? 'Ver Menos' : 'Ver Mais'}
        </button>
      </div>
    </div>
  );
};

export default VerMais;