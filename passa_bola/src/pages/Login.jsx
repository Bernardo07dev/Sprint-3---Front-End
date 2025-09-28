import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../compenentes/Autenticacao/Autenticacao.jsx";
import { CampoTexto } from "../compenentes/CampoTexto/CampoTexto.jsx";
import logo from "../assets/icons/Logo.svg";

const Login = () => {
  const navegar = useNavigate();
  const { entrar } = useAuth();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const enviarFormulario = async (e) => {
    e.preventDefault();

    // Login do backend
    try {
      const res = await fetch("https://backend-jogadoras.vercel.app/api/jogadoras");
      const jogadoras = await res.json();

      const atleta = jogadoras.find(j => j.email === email && j.senha === senha);

      if (atleta) {
        // Login válido
        entrar(atleta.email, atleta.senha, "atleta", atleta);
        navegar("/home");
      } else if (email === "recrutador@exemplo.com" && senha === "123456") {
        // Login do recrutador
        entrar(email, senha, "recrutador", { nome: "Recrutador" });
        navegar("/homerec");
      } else {
        setErro("Email ou senha incorretos!");
      }
    } catch (err) {
      console.error(err);
      setErro("Erro ao conectar com o servidor.");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100 text-black">
      <div className="w-full max-w-[420px] p-10 bg-white rounded-lg shadow-md flex flex-col">
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo" className="w-16" />
        </div>

        <form onSubmit={enviarFormulario} className="flex flex-col gap-4">
          <CampoTexto
            label="Email"
            type="email"
            placeholder="teste@gmail.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <CampoTexto
            label="Senha"
            type="password"
            placeholder="senha"
            value={senha}
            onChange={e => setSenha(e.target.value)}
          />

          {erro && <p className="text-red-500">{erro}</p>}

          <button type="submit" className="py-3 bg-blue-500 text-white rounded hover:bg-blue-700">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
