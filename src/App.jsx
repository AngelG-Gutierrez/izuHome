import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
// Importar las nuevas páginas que vas a crear
import ForgotPassword from './pages/auth/ForgotPassword';
import SearchResults from './pages/SearchResults';
import PropertyDetail from './pages/PropertyDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta Pública Principal */}
        <Route path="/" element={<Landing />} />
        
        {/* Rutas de Autenticación */}
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/recuperar-contrasena" element={<ForgotPassword />} />
        
        {/* Rutas de Búsqueda y Propiedades */}
        <Route path="/buscar" element={<SearchResults />} />
        <Route path="/propiedad/:id" element={<PropertyDetail />} />
        
        {/* Aquí irían las rutas privadas más adelante, ej: /dashboard */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;