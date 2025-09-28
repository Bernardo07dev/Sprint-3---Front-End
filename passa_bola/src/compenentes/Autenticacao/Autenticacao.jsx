import { createContext, useContext, useState, useEffect } from "react";

// Recrutador fixo
const usuariosFixos = [
  { email: "recrutador@exemplo.com", senha: "123456", tipo: "recrutador", nome: "Recrutador", foto: null }
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

  // Login
  const entrar = async (email, senha) => {
    email = email.trim();
    senha = senha.trim();

    // Primeiro verifica se é recrutador
    const usuarioRecrutador = usuariosFixos.find(u => u.email === email && u.senha === senha);
    if (usuarioRecrutador) {
      setUsuario(usuarioRecrutador);
      return true;
    }

    // Se não, busca as jogadoras no backend
    try {
      const res = await fetch("http://localhost:5000/jogadoras");
      const jogadoras = await res.json();

      const jogadoraLogada = jogadoras.find(j => j.email === email && j.senha === senha);

      if (jogadoraLogada) {
        setUsuario({ ...jogadoraLogada, tipo: "atleta" });
        return true;
      }
    } catch (err) {
      console.error("Erro ao buscar jogadoras:", err);
    }

    return false; // login falhou
  };

  const sair = () => setUsuario(null);

  return (
    <AuthContext.Provider value={{ entrar, sair, usuario }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
