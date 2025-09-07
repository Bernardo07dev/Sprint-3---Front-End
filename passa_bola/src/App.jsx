import { Routes, Route, Link } from 'react-router-dom';

import EscolhaConta from './pages/EscolhaConta';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<EscolhaConta />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;