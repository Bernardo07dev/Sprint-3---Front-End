import Clip from '../../assets/icons/clip.svg'

export function CampoImport({ titulo, descricao }) {
  return (
    <div className="w-full mb-6">
      <p className="font-medium mb-2">{titulo}</p>

      <div className="flex items-center justify-center gap-1 border-2 border-dashed border-gray-400 rounded-md h-24 bg-gray-100 cursor-pointer hover:bg-gray-200">
        <img className="" src={Clip} alt="" />
        <span className="text-gray-500 text-sm">
          Clique e faça upload do arquivo ou do link
        </span>
      </div>

      {descricao && (
        <p className="text-gray-500 text-xs mt-2">
          {descricao}
        </p>
      )}
    </div>
  );
}