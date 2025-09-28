import { createContext, useContext, useState, useEffect } from "react";

// Link da Vercel com o JSON de jogadoras
const JOGADORAS_URL = "https://sprint-3-front-end-copia-git-main-brunas-projects-c2151b40.vercel.app/jogadoras";

// Usuário pré-definido recrutor
const usuarios = [
  { email: "recrutador@exemplo.com", senha: "123456", tipo: "recrutador" },
];

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(() => {
    const usuarioSalvo = localStorage.getItem("usuario");
    return usuarioSalvo ? JSON.parse(usuarioSalvo) : null;
  });

  useEffect(() => {
    if (usuario) localStorage.setItem("usuario", JSON.stringify(usuario));
    else localStorage.removeItem("usuario");
  }, [usuario]);

  const entrar = async (email, senha) => {
    // Primeiro verifica se é recrutor
    const recrutor = usuarios.find(
      (u) => u.email === email.trim() && u.senha === senha.trim()
    );
    if (recrutor) {
      setUsuario(recrutor);
      return true;
    }

    // Se não for recrutor, verifica jogadoras
    try {
      const res = await fetch(JOGADORAS_URL);
      const jogadoras = await res.json();

      const atleta = jogadoras.find(
        (j) => j.email === email.trim() && j.senha === senha.trim()
      );

      if (atleta) {
        setUsuario({ ...atleta, tipo: "atleta" });
        return true;
      }
    } catch (err) {
      console.error("Erro ao buscar jogadoras:", err);
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
