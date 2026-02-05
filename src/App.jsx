import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';


import SearchResults from './pages/SearchResults';      // ← Buscador principal
import PropertyDetail from './pages/PropertyDetail';    // ← Detalles
import { Dashboard } from './pages/Dashboard';
import { MisPropiedades } from './pages/Propiedades';   // ← Gestión personal
import { Chat } from './pages/Mensajes';


import PropertyFormPage from './pages/properties/PropertyFormPage';
import AdminPanel from './pages/admin/AdminPanel';
import ContactRequests from './pages/properties/ContactRequests';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* RUTAS PÚBLICAS PRINCIPALES */}
        <Route path="/" element={<Landing />} />
        
        
        {/* 1. Página de búsqueda principal - MOSTRARÁ LAS PROPIEDADES */}
        <Route path="/buscar" element={<SearchResults />} />
        
        {/* 2. Redirección: Cuando alguien vaya a /propiedades -> /buscar */}
        <Route path="/propiedades" element={<Navigate to="/buscar" replace />} />
        
        {/* 3. Detalles de propiedad */}
        <Route path="/propiedad/:id" element={<PropertyDetail />} />
        
        {/* RUTAS DE AUTENTICACIÓN */}
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/recuperar-contrasena" element={<ForgotPassword />} />
        
        {/* RUTAS PRIVADAS/ADMIN */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/mensajes" element={<Chat />} />
        
        {/* RUTA PARA GESTIÓN PERSONAL (no confundir con búsqueda) */}
        <Route path="/mis-propiedades" element={<MisPropiedades />} />
        
        {/* OTRAS RUTAS */}
        <Route path="/propiedades/nueva" element={<PropertyFormPage />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/mis-solicitudes" element={<ContactRequests />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;