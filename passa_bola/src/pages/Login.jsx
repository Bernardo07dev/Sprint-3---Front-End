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

  const enviarFormulario = (e) => {
    e.preventDefault();
    const sucesso = entrar(email, senha);
    if (sucesso) {
      navegar("/home");
    } else {
      setErro("Email ou senha incorretos!");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100 text-black">
      <div className="w-full max-w-[420px] h-auto flex flex-col justify-between bg-white p-10 rounded-lg shadow-md">
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo Passa a Bola" className="w-16" />
        </div>

        <div className="w-full flex flex-col items-center">
          <h1 className="text-xl font-semibold mb-4">Faça seu Login</h1>

          <form
            onSubmit={enviarFormulario}
            className="flex flex-col w-full gap-4"
          >
            <CampoTexto
              label="Email"
              type="email"
              placeholder="teste@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <CampoTexto
              label="Senha"
              type="password"
              placeholder="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            {erro && <p className="text-red-500 text-sm mt-1">{erro}</p>}
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded mt-2"
            >
              Entrar
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-5">
            Não tem conta?{" "}
            <a href="/" className="font-semibold text-blue-700 hover:underline">
              Clique aqui e crie sua conta
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
