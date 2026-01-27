import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className="landing-container">
      {/* Navbar simplificado */}
      <nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <h1 style={{ color: '#0f172a', fontSize: '1.5rem' }}>IzuHome</h1>
          
          {/* --- INICIO DE TUS VISTAS AGREGADAS --- */}
          <div style={{ display: 'flex', gap: '15px', marginLeft: '20px' }}>
            <Link to="/mensajes" style={{ textDecoration: 'none', color: '#64748b', fontSize: '0.8rem' }}>Mensajes</Link>
            <Link to="/dashboard" style={{ textDecoration: 'none', color: '#64748b', fontSize: '0.8rem' }}>Dashboard</Link>
            <Link to="/propiedades" style={{ textDecoration: 'none', color: '#64748b', fontSize: '0.8rem' }}>Mis Propiedades</Link>
          </div>
          {/* --- FIN DE TUS VISTAS AGREGADAS --- */}

        </div>
        <div>
          <Link to="/login" className="btn-ghost">Ingresar</Link>
          <Link to="/propiedades/nueva">
            <button className="btn-primary">Publicar / Buscar</button>
          </Link>
        </div>
      </nav>

      {/* Hero Section con Contexto Local */}
      <div className="hero-section">
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          Encuentra tu espacio ideal en <span style={{ color: '#10b981' }}>Izúcar de Matamoros</span>
        </h1>
        <p style={{ fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
          Olvídate de los grupos de Facebook desordenados. Conectamos estudiantes de la UTIM, 
          trabajadores y familias con las mejores opciones de renta verificadas.
        </p>
        <br /><br />
      </div>

      {/* Buscador Centralizado (RF-014, RF-015) */}
      <div className="search-bar">
        <div style={{ flex: 1, minWidth: '200px' }}>
          <label style={{ fontSize: '0.8rem', color: '#64748b' }}>Ubicación</label>
          <select style={{ width: '100%', padding: '8px', border: '1px solid #cbd5e1', borderRadius: '6px' }}>
            <option>Todas las zonas</option>
            <option>Centro</option>
            <option>San Bernardino (Cerca UTIM)</option>
            <option>Barrio de Santiago</option>
            <option>El Calvario</option>
          </select>
        </div>
        
        <div style={{ flex: 1, minWidth: '200px' }}>
          <label style={{ fontSize: '0.8rem', color: '#64748b' }}>Tipo de Propiedad</label>
          <select style={{ width: '100%', padding: '8px', border: '1px solid #cbd5e1', borderRadius: '6px' }}>
            <option>Cualquiera</option>
            <option>Cuarto para estudiante</option>
            <option>Departamento</option>
            <option>Casa completa</option>
            <option>Vecindad</option>
          </select>
        </div>

        <button className="btn-primary" style={{ alignSelf: 'flex-end' }}>
          Buscar
        </button>
      </div>

      {/* Propuesta de Valor (Solución a problemas detectados) */}
      <section style={{ background: '#f8fafc', padding: '3rem 1rem' }}>
        <h2 style={{ textAlign: 'center', color: '#0f172a', marginBottom: '2rem' }}>
          ¿Por qué usar IzuHome?
        </h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3 style={{ color: '#10b981', marginBottom: '0.5rem' }}>Confianza Total</h3>
            <p style={{ fontSize: '0.9rem', color: '#64748b' }}>
              Verificamos a los propietarios y permitimos reseñas reales para evitar estafas y sorpresas.
            </p>
          </div>
          <div className="feature-card">
            <h3 style={{ color: '#10b981', marginBottom: '0.5rem' }}>Información Clara</h3>
            <p style={{ fontSize: '0.9rem', color: '#64748b' }}>
              Filtra por precio, servicios incluidos (agua, internet) y cercanía a tu universidad o trabajo.
            </p>
          </div>
          <div className="feature-card">
            <h3 style={{ color: '#10b981', marginBottom: '0.5rem' }}>Trato Directo</h3>
            <p style={{ fontSize: '0.9rem', color: '#64748b' }}>
              Contacta al dueño sin intermediarios mediante nuestro sistema seguro de mensajería.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;