export function CampoCheckbox({ label, opcao1, opcao2 }) {
  return (
    <div>
        <p className="text-gray-600 text-[16px] mb-2">{label}</p>
        <div className="flex flex-row gap-4">
            <div className="text-gray-600 text-[16px] mb-2">
                <input type="checkbox" id="opcao1" value={opcao1} />
                <label htmlFor="opcao1">{opcao1}</label>
            </div>
            <div className="text-gray-600 text-[16px] mb-2">
                <input type="checkbox" id="opcao2" value={opcao2} />
                <label htmlFor="opcao2">{opcao2}</label>
            </div>
        </div>
    </div>
  );
}