import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './compenentes/Autenticacao/Autenticacao.jsx';

// Páginas
import EscolhaConta from './pages/EscolhaConta';
import Login from './pages/Login';
import Home from './pages/pages-at/Home';
import Propostas from './pages/pages-at/Propostas';
import Noticias from './pages/pages-at/Noticias';
import Conta from './pages/pages-at/Conta';
import Fase1 from './pages/at-fase-1';
import Fase2 from './pages/at-fase-2';
import Fase3 from './pages/at-fase-3';
import HomeRec from './pages/pages-rec/HomeRec';
import PropostasRec from './pages/pages-rec/PropostasRec';
import NoticiasRec from './pages/pages-rec/NoticiasRec';
import ContaRec from './pages/pages-rec/ContaRec';
import RFase1 from './pages/re-fase-1';
import RFase2 from './pages/re-fase-2';
import RFase3 from './pages/re-fase-3';
import RFase4 from './pages/re-fase-4';

function App() {
  const { usuario } = useAuth();

  const RotaProtegida = ({ children }) => {
    if (!usuario) return <Navigate to="/login" replace />;
    return children;
  };

  return (
    <Routes>
      <Route path="/" element={<EscolhaConta />} />
      <Route path="/login" element={<Login />} />

      <Route path="/at-fase-1" element={<Fase1 />} />
      <Route path="/at-fase-2" element={<Fase2 />} />
      <Route path="/at-fase-3" element={<Fase3 />} />

      <Route path="/home" element={<RotaProtegida><Home /></RotaProtegida>} />
      <Route path="/propostas" element={<RotaProtegida><Propostas /></RotaProtegida>} />
      <Route path="/noticias" element={<RotaProtegida><Noticias /></RotaProtegida>} />
      <Route path="/conta" element={<RotaProtegida><Conta /></RotaProtegida>} />

      <Route path="/re-fase-1" element={<RFase1 />} />
      <Route path="/re-fase-2" element={<RFase2 />} />
      <Route path="/re-fase-3" element={<RFase3 />} />
      <Route path="/re-fase-4" element={<RFase4 />} />

      <Route path="/homerec" element={<RotaProtegida><HomeRec /></RotaProtegida>} />
      <Route path="/propostasrec" element={<RotaProtegida><PropostasRec /></RotaProtegida>} />
      <Route path="/noticiasrec" element={<RotaProtegida><NoticiasRec /></RotaProtegida>} />
      <Route path="/contarec" element={<RotaProtegida><ContaRec /></RotaProtegida>} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
