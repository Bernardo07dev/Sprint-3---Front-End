import { createContext, useContext, useState } from "react";
import { jogadoras } from "../../models/Jogadoras.js";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(() => {
    const usuarioSalvo = localStorage.getItem("usuario");
    return usuarioSalvo ? JSON.parse(usuarioSalvo) : null;
  });

  const entrar = (email, senha) => {
    // Primeiro procura entre jogadoras
    const atleta = jogadoras.find(
      j => j.email === email.trim() && j.senha === senha.trim()
    );

    if (atleta) {
      setUsuario({ ...atleta, tipo: "atleta" });
      localStorage.setItem("usuario", JSON.stringify({ ...atleta, tipo: "atleta" }));
      return true;
    }

    // Se não for jogadora, procura recrutor
    if (email === "recrutador@exemplo.com" && senha === "123456") {
      const recrutador = { email, tipo: "recrutador", nome: "Recrutador" };
      setUsuario(recrutador);
      localStorage.setItem("usuario", JSON.stringify(recrutador));
      return true;
    }

    return false;
  };

  const sair = () => {
    setUsuario(null);
    localStorage.removeItem("usuario");
  };

  return (
    <AuthContext.Provider value={{ usuario, setUsuario, entrar, sair }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
