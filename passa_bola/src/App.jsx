import { Routes, Route, Link } from 'react-router-dom';

import EscolhaConta from './pages/EscolhaConta';
import Login from './pages/Login';
import Home from './pages/Home';
import Fase1 from './pages/at-fase-1';
import Fase2 from './pages/at-fase-2';
import RFase1 from './pages/re-fase-1';
import RFase2 from './pages/re-fase-2';

function App() {
  return (
    <Routes>
      <Route path="/" element={<EscolhaConta />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/at-fase-1" element={<Fase1 />} />
      <Route path="/at-fase-2" element={<Fase2 />} />
      <Route path="/re-fase-1" element={<RFase1 />} />
      <Route path="/re-fase-2" element={<RFase2 />} />
    </Routes>
  );
}

export default App;