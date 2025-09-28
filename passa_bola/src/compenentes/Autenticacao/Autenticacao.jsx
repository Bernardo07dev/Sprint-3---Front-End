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
    try {
      // Substitua pelo endpoint do seu backend na Vercel
      const res = await fetch(
        "https://sprint-3-front-end-copia-git-main-brunas-projects-c2151b40.vercel.app/jogadoras"
      );
      const jogadoras = await res.json();

      // Procura usuário válido entre jogadoras
      const usuarioValido = jogadoras.find(
        (j) => j.email === email.trim() && j.senha === senha.trim()
      );

      if (usuarioValido) {
        // Adiciona tipo "atleta"
        setUsuario({ ...usuarioValido, tipo: "atleta" });
        return true;
      }

      // Usuário recrutor hardcoded
      if (email.trim() === "recrutador@exemplo.com" && senha.trim() === "123456") {
        setUsuario({ email, tipo: "recrutador" });
        return true;
      }

      return false;
    } catch (err) {
      console.error("Erro ao fazer login:", err);
      return false;
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
