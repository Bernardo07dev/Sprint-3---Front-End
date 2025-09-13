import React from "react";

const CardNoticia = ({ titulo, desc, img, data, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white"
    >
      {img && (
        <img
          src={img}
          alt={titulo}
          className="w-full h-44 sm:h-48 object-cover"
        />
      )}

      <div className="p-4 flex flex-col gap-2">
        <h2 className="font-semibold text-md sm:text-lg text-gray-900 leading-snug">
          {titulo}
        </h2>
        <p className="text-xs text-gray-500">
          {new Date(data).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </p>
        <p className="text-sm text-gray-700 line-clamp-3">{desc}</p>
        <span className="mt-2 text-sm text-blue-600 font-medium hover:underline">
          Ver Detalhes
        </span>
      </div>
    </a>
  );
};

export default CardNoticia;
