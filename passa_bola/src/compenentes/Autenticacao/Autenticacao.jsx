import { createContext, useContext } from "react";

// Emails e senhas pré-definidos
const usuarios = [
  { email: "teste@gmail.com", senha: "123456" },
  { email: "usuario@exemplo.com", senha: "senha123" },
];

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const entrar = (email, senha) => {
    const usuarioValido = usuarios.find(
      (u) => u.email === email && u.senha === senha
    );
    return !!usuarioValido; // true se encontrado, false caso contrário
  };

  return (
    <AuthContext.Provider value={{ entrar }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
