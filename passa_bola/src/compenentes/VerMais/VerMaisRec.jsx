import { useState } from 'react';

const VerMaisRec = () => {
  const [expandido, setExpandido] = useState(false);

  const textoCurto = `A Universidade do Texas em Austin é uma das principais universidades públicas de pesquisa do mundo, oferecendo uma combinação única de excelência acadêmica e esportiva. Nosso programa`;

  const textoCompleto = `A Universidade do Texas em Austin é uma das principais universidades públicas de pesquisa do mundo, oferecendo uma combinação única de excelência acadêmica e esportiva. Nosso programa de futebol feminino, as 'Texas Longhorns', compete na NCAA Division I, o mais alto nível do esporte universitário nos EUA, dentro da prestigiosa Conferência 'Big 12'.`;

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

export default VerMaisRec;