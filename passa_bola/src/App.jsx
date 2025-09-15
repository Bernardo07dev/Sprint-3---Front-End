import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./compenentes/Autenticacao/Autenticacao.jsx";
import './index.css';

// Páginas públicas
import EscolhaConta from "./pages/EscolhaConta";
import Login from "./pages/Login";

// Páginas Atleta
import Home from "./pages/pages-at/Home";
import Propostas from "./pages/pages-at/Propostas";
import Noticias from "./pages/pages-at/Noticia";
import Conta from "./pages/pages-at/Conta";
import Fase1 from "./pages/at-fase-1";
import Fase2 from "./pages/at-fase-2";
import Fase3 from "./pages/at-fase-3";

// Páginas Recrutador
import HomeRec from "./pages/pages-rec/HomeRec";
import PropostasRec from "./pages/pages-rec/PropostasRec";
import NoticiasRec from "./pages/pages-rec/NoticiasRec";
import ContaRec from "./pages/pages-rec/ContaRec";
import RFase1 from "./pages/re-fase-1";
import RFase2 from "./pages/re-fase-2";
import RFase3 from "./pages/re-fase-3";
import RFase4 from "./pages/re-fase-4";

function App() {
  const { usuario } = useAuth();

  // Componente para proteger rotas
  const RotaProtegida = ({ children }) => {
    if (!usuario) return <Navigate to="/login" replace />;
    return children;
  };

  return (
    <Routes>
      {/* Páginas públicas */}
      <Route path="/" element={<EscolhaConta />} />
      <Route path="/login" element={<Login />} />

      {/* Cadastro Atleta */}
      <Route path="/at-fase-1" element={<Fase1 />} />
      <Route path="/at-fase-2" element={<Fase2 />} />
      <Route path="/at-fase-3" element={<Fase3 />} />

      {/* Páginas Atleta protegidas */}
      <Route
        path="/home"
        element={
          <RotaProtegida>
            {usuario?.tipo === "atleta" ? <Home /> : <Navigate to="/homerec" replace />}
          </RotaProtegida>
        }
      />
      <Route
        path="/propostas"
        element={
          <RotaProtegida>
            {usuario?.tipo === "atleta" ? <Propostas /> : <Navigate to="/homerec" replace />}
          </RotaProtegida>
        }
      />
      <Route
        path="/noticias"
        element={
          <RotaProtegida>
            {usuario?.tipo === "atleta" ? <Noticias /> : <Navigate to="/homerec" replace />}
          </RotaProtegida>
        }
      />
      <Route
        path="/conta"
        element={
          <RotaProtegida>
            {usuario?.tipo === "atleta" ? <Conta /> : <Navigate to="/homerec" replace />}
          </RotaProtegida>
        }
      />

      {/* Cadastro Recrutador */}
      <Route path="/re-fase-1" element={<RFase1 />} />
      <Route path="/re-fase-2" element={<RFase2 />} />
      <Route path="/re-fase-3" element={<RFase3 />} />
      <Route path="/re-fase-4" element={<RFase4 />} />

      {/* Páginas Recrutador protegidas */}
      <Route
        path="/homerec"
        element={
          <RotaProtegida>
            {usuario?.tipo === "recrutador" ? <HomeRec /> : <Navigate to="/home" replace />}
          </RotaProtegida>
        }
      />
      <Route
        path="/propostasrec"
        element={
          <RotaProtegida>
            {usuario?.tipo === "recrutador" ? <PropostasRec /> : <Navigate to="/home" replace />}
          </RotaProtegida>
        }
      />
      <Route
        path="/noticiasrec"
        element={
          <RotaProtegida>
            {usuario?.tipo === "recrutador" ? <NoticiasRec /> : <Navigate to="/home" replace />}
          </RotaProtegida>
        }
      />
      <Route
        path="/contarec"
        element={
          <RotaProtegida>
            {usuario?.tipo === "recrutador" ? <ContaRec /> : <Navigate to="/home" replace />}
          </RotaProtegida>
        }
      />

      {/* Rota padrão */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
