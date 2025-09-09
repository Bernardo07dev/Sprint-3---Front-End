// import './CampoTexto.css';

export function CampoTexto({ label, type, placeholder }) {
  
  const inputId = `input-${label.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div className="w-full mb-4">
      <label htmlFor={inputId} className="block text-gray-600 text-[15px] mb-2">
        {label}
      </label>
      
      <input
        id={inputId}
        type={type}
        placeholder={placeholder}
        className="border border-[#00000022] rounded-sm w-full py-3 px-4 text-gray-700 text-[15px] focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};