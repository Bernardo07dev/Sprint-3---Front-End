import { Routes, Route, Link } from 'react-router-dom';

import EscolhaConta from './pages/EscolhaConta';
import Login from './pages/Login';
import Home from './pages/pages-at/Home';
import HomeRec from './pages/pages-rec/HomeRec'
import Fase1 from './pages/at-fase-1';
import Fase2 from './pages/at-fase-2';
import Fase3 from './pages/at-fase-3';
import RecFase1 from './pages/rec-fase-1'


function App() {
  return (
    <Routes>
      <Route path="/" element={<EscolhaConta />} />
      <Route path="/login" element={<Login />} />
      {/* CADASTRO ATLETA */}
      <Route path="/at-fase-1" element={<Fase1 />} />
      <Route path="/at-fase-2" element={<Fase2 />} />
      <Route path="/at-fase-3" element={<Fase3 />} />
      {/* CADASTRO RECRUTADOR */}
      <Route path="/rec-fase-1" element={<RecFase1 />} />
      {/* PAGINAS ATLETA */}
      <Route path="/home" element={<Home />} />
      {/* PAGINA RECRUTADOR */}
      <Route path="/homerec" element={<HomeRec />} />
    </Routes>
  );
}

export default App;