import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta Pública Principal */}
        <Route path="/" element={<Landing />} />
        
        {/* Rutas de Autenticación */}
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        
        {/* Aquí irían las rutas privadas más adelante, ej: /dashboard */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;