import React from 'react';

export const CampoSelect = ({ label, value, onChange, options }) => {
    return (
        <div className="w-full">
            {label && (
                <label className="block text-sm font-medium mb-2">
                    {label}
                </label>
            )}
            <select
                value={value}
                onChange={onChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:outline-none bg-gray-50"
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
