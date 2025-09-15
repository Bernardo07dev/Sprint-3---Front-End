import { createContext, useContext, useState, useEffect } from "react";

// Usuários pré-definidos
const usuarios = [
  { email: "teste@gmail.com", senha: "123456" },
  { email: "usuario@exemplo.com", senha: "senha123" },
];

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(() => {
    const usuarioSalvo = localStorage.getItem("usuario");
    return usuarioSalvo ? JSON.parse(usuarioSalvo) : null;
  });

  useEffect(() => {
    if (usuario) {
      localStorage.setItem("usuario", JSON.stringify(usuario));
    } else {
      localStorage.removeItem("usuario");
    }
  }, [usuario]);

  const entrar = (email, senha) => {
    // remove espaços extras
    const usuarioValido = usuarios.find(
      (u) => u.email === email.trim() && u.senha === senha.trim()
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
