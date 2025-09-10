import React from 'react';

export const CampoSelect = ({ label, value, onChange, options }) => {
    return (
        <div className="w-full">
            {label && (
                <label className="block text-gray-600 text-[15px] mb-2">
                    {label}
                </label>
            )}
            <select
                value={value}
                onChange={onChange}
                className="w-full border border-gray-300 rounded-md focus:outline-none bg-gray-50 p-3"
            >
                <option value="">Selecione</option>
                {options.map((opcao) => (
                    <option key={opcao.value} value={opcao.value}>
                        {opcao.label}
                    </option>
                ))}
            </select>
        </div>
    );
};
