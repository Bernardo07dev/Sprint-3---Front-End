import { createContext, useContext, useState, useEffect } from "react";

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

  const entrar = async (email, senha) => {
    // Login do recrutador
    if (email.trim() === "recrutador@exemplo.com" && senha.trim() === "123456") {
      const recr = { email, tipo: "recrutador", nome: "Recrutador", foto: null };
      setUsuario(recr);
      return recr;
    }

    // Login das jogadoras - busca no backend
    try {
      const res = await fetch("https://sprint-3-front-end-copia-git-main-brunas-projects-c2151b40.vercel.app/jogadoras");
      const jogadoras = await res.json();
      const jogadoraLogada = jogadoras.find(
        (j) => j.email === email.trim() && j.senha === senha.trim()
      );
      if (jogadoraLogada) {
        const jogadora = { ...jogadoraLogada, tipo: "atleta" };
        setUsuario(jogadora);
        return jogadora;
      }
      return null;
    } catch (err) {
      console.error("Erro ao buscar jogadoras:", err);
      return null;
    }
  };

  const sair = () => setUsuario(null);

  return (
    <AuthContext.Provider value={{ entrar, sair, usuario }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
