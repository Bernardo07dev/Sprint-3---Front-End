import { Routes, Route, Link } from 'react-router-dom';

import EscolhaConta from './pages/EscolhaConta';
import Login from './pages/Login';
import Home from './pages/pages-at/Home';
import HomeRec from './pages/pages-rec/HomeRec'
import Fase1 from './pages/at-fase-1';
import Fase2 from './pages/at-fase-2';
import Fase3 from './pages/at-fase-3';
import RFase1 from './pages/re-fase-1';
import RFase2 from './pages/re-fase-2';
import RFase3 from './pages/re-fase-3';

function App() {
  return (
    <Routes>
      <Route path="/" element={<EscolhaConta />} />
      <Route path="/login" element={<Login />} />
      {/* CADASTRO ATLETA */}
      <Route path="/at-fase-1" element={<Fase1 />} />
      <Route path="/at-fase-2" element={<Fase2 />} />
      <Route path="/at-fase-3" element={<Fase3 />} />
      {/* PÁGINAS ATLETA */}
      <Route path="/home" element={<Home />} />
      {/* PAGINA RECRUTADOR */}
      <Route path="/homerec" element={<HomeRec />} />
      {/* CADASTRO RECRUTADOR */}
      <Route path="/re-fase-1" element={<RFase1 />} />
      <Route path="/re-fase-2" element={<RFase2 />} />
      <Route path="/re-fase-3" element={<RFase3 />} />
    </Routes>
  );
}

export default App;