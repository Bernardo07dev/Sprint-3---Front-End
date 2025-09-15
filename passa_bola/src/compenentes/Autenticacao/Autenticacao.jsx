import { createContext, useContext, useState, useEffect } from "react";

// Usuários pré-definidos
const usuarios = [
  { email: "atleta@exemplo.com", senha: "123456", tipo: "atleta" },
  { email: "recrutador@exemplo.com", senha: "123456", tipo: "recrutador" },
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
