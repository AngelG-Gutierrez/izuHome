import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

import { Dashboard } from './pages/Dashboard';
import { MisPropiedades } from './pages/Propiedades';
import { Chat } from './pages/Mensajes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/propiedades" element={<MisPropiedades />} />
        <Route path="/mensajes" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;