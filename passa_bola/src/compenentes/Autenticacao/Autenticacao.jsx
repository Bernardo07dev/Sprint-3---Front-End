import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);

  const entrar = (email, senha) => {
  const usuarioExemplo = { email: "bru@gmail.com", senha: "bruna123" };

  const emailFormatado = email.trim().toLowerCase();
  const emailExemploFormatado = usuarioExemplo.email.trim().toLowerCase();

  if (emailFormatado === emailExemploFormatado && senha.trim() === usuarioExemplo.senha) {
    setUsuario({ email: emailFormatado });
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
