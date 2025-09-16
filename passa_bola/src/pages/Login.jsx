import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
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
    // Verifica se é recrutor ou atleta
    const emailRecrutador = "recrutador@exemplo.com";
    if (email.trim() === emailRecrutador) {
      navegar("/homerec"); 
    } else {
      navegar("/home"); 
    }
  } else {
    const mensagemErro = "Email ou senha incorretos! O login está no readme ou no teams";
    setErro(mensagemErro);
    alert(mensagemErro); 
  }
};

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100 text-black">
      <div className="w-full max-w-[420px]  h-screen justify-center  vh-100 flex flex-col justify-between bg-white p-10 rounded-lg shadow-md">
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo Passa a Bola" className="w-16" />
        </div>

        <div className="w-full flex flex-col items-center">
          <h1 className="text-xl font-semibold mb-4">Faça seu Login</h1>

          <form onSubmit={enviarFormulario} className="flex flex-col w-full gap-4">
            <CampoTexto
              label="Email"
              type="email"
              placeholder="teste@gmail.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (erro) setErro("");
              }}
            />
            <CampoTexto
              label="Senha"
              type="password"
              placeholder="senha"
              value={senha}
              onChange={(e) => {
                setSenha(e.target.value);
                if (erro) setErro("");
              }}
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
            <Link
              to="/cadastro"
              className="font-semibold text-blue-700 hover:underline"
            >
              Clique aqui e crie sua conta
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
