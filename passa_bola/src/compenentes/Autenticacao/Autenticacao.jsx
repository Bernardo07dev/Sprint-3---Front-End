import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);

  const entrar = (email, senha) => {
    const usuarioExemplo = { email: "bru@gmail.com", senha: "bruna123" };
    if (email.trim().toLowerCase() === usuarioExemplo.email && senha.trim() === usuarioExemplo.senha) {
      setUsuario({ email: email.trim().toLowerCase() });
      return true;
    } else {
      return false;
    }
  };

  const sair = () => setUsuario(null);

  return (
    <AuthContext.Provider value={{ usuario, entrar, sair }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
