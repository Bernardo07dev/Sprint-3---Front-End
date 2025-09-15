import { createContext, useContext, useState } from "react";

// Usuários pré-definidos
const usuarios = [
  { email: "teste@gmail.com", senha: "123456" },
  { email: "usuario@exemplo.com", senha: "senha123" },
];

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);

  const entrar = (email, senha) => {
    const usuarioValido = usuarios.find(
      (u) => u.email === email && u.senha === senha
    );

    if (usuarioValido) {
      setUsuario(usuarioValido);
      return true;
    }

    return false;
  };

  const sair = () => setUsuario(null);

  return (
    <AuthContext.Provider value={{ entrar, sair, usuario }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
