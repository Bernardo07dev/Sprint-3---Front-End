import { Routes, Route, Link } from 'react-router-dom';

import EscolhaConta from './pages/EscolhaConta';
import Login from './pages/Login';
import Home from './pages/Home';
import Fase1 from './pages/at-fase-1';

function App() {
  return (
    <Routes>
      <Route path="/" element={<EscolhaConta />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/at-fase-1" element={<Fase1 />} />
    </Routes>
  );
}

export default App;