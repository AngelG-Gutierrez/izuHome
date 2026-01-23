import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../styles/Landing.css'; // Si no existe, crear este archivo

function Landing() {
  const navigate = useNavigate();
  const [searchFilters, setSearchFilters] = useState({
    location: '',
    propertyType: '',
    minPrice: '',
    maxPrice: ''
  });

  const handleSearchChange = (e) => {
    setSearchFilters({
      ...searchFilters,
      [e.target.name]: e.target.value
    });
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Navegar a la página de resultados con los filtros
    navigate('/buscar', { state: searchFilters });
  };

  return (
    <div className="landing-container">
      {/* Navbar simplificado */}
      <nav className="landing-nav">
        <div className="nav-brand">
          <h1>IzuHome</h1>
          <span className="nav-subtitle">Izúcar de Matamoros</span>
        </div>
        <div className="nav-actions">
          <Link to="/login" className="btn-ghost">Ingresar</Link>
          <Link to="/registro">
            <button className="btn-primary">Publicar Propiedad</button>
          </Link>
        </div>
      </nav>

      {/* Hero Section con Contexto Local */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>
            Encuentra tu espacio ideal en <span className="highlight">Izúcar de Matamoros</span>
          </h1>
          <p>
            Olvídate de los grupos de Facebook desordenados. Conectamos estudiantes de la UTIM, 
            trabajadores y familias con las mejores opciones de renta verificadas.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <strong>50+</strong>
              <span>Propiedades</span>
            </div>
            <div className="stat">
              <strong>100%</strong>
              <span>Verificadas</span>
            </div>
            <div className="stat">
              <strong>24/7</strong>
              <span>Soporte</span>
            </div>
          </div>
        </div>
      </div>

      {/* Buscador Centralizado */}
      <div className="search-section">
        <h2>Encuentra tu próximo hogar</h2>
        <form onSubmit={handleSearchSubmit} className="search-bar">
          <div className="search-filter">
            <label>📍 Ubicación</label>
            <select 
              name="location" 
              value={searchFilters.location}
              onChange={handleSearchChange}
            >
              <option value="">Todas las zonas</option>
              <option value="centro">Centro</option>
              <option value="san-bernardino">San Bernardino (Cerca UTIM)</option>
              <option value="santiago">Barrio de Santiago</option>
              <option value="calvario">El Calvario</option>
              <option value="san-miguel">San Miguel</option>
              <option value="santa-cruz">Santa Cruz</option>
            </select>
          </div>
          
          <div className="search-filter">
            <label>🏠 Tipo de Propiedad</label>
            <select 
              name="propertyType" 
              value={searchFilters.propertyType}
              onChange={handleSearchChange}
            >
              <option value="">Cualquiera</option>
              <option value="cuarto">Cuarto para estudiante</option>
              <option value="departamento">Departamento</option>
              <option value="casa">Casa completa</option>
              <option value="vecindad">Vecindad</option>
              <option value="local">Local comercial</option>
            </select>
          </div>

          <div className="search-filter">
            <label>💰 Precio Mínimo</label>
            <input 
              type="number" 
              name="minPrice" 
              placeholder="Mínimo"
              value={searchFilters.minPrice}
              onChange={handleSearchChange}
            />
          </div>

          <div className="search-filter">
            <label>💰 Precio Máximo</label>
            <input 
              type="number" 
              name="maxPrice" 
              placeholder="Máximo"
              value={searchFilters.maxPrice}
              onChange={handleSearchChange}
            />
          </div>

          <button type="submit" className="search-button">
            🔍 Buscar Propiedades
          </button>
        </form>

        <div className="quick-search">
          <p>Búsquedas populares:</p>
          <div className="quick-tags">
            <Link to="/buscar?location=san-bernardino&type=cuarto" className="quick-tag">
              🎓 Cuartos cerca UTIM
            </Link>
            <Link to="/buscar?type=casa&maxPrice=5000" className="quick-tag">
              🏡 Casas familiares
            </Link>
            <Link to="/buscar?location=centro" className="quick-tag">
              📍 Centro histórico
            </Link>
            <Link to="/buscar?minPrice=1000&maxPrice=2000" className="quick-tag">
              💰 Económicas
            </Link>
          </div>
        </div>
      </div>

      {/* Propuesta de Valor */}
      <section className="features-section">
        <h2>¿Por qué usar IzuHome?</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">✅</div>
            <h3>Confianza Total</h3>
            <p>Verificamos a los propietarios y permitimos reseñas reales para evitar estafas y sorpresas.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📋</div>
            <h3>Información Clara</h3>
            <p>Filtra por precio, servicios incluidos (agua, internet) y cercanía a tu universidad o trabajo.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💬</div>
            <h3>Trato Directo</h3>
            <p>Contacta al dueño sin intermediarios mediante nuestro sistema seguro de mensajería.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🗺️</div>
            <h3>Ubicación Exacta</h3>
            <p>Vista de mapa interactiva para encontrar propiedades cerca de puntos importantes.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>¿Eres propietario?</h2>
          <p>Publica tu propiedad y llega a miles de personas buscando hogar en Izúcar.</p>
          <Link to="/registro" className="cta-button">
            Publicar Propiedad Gratis
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>IzuHome</h3>
            <p>Conectando a la comunidad de Izúcar con su próximo hogar.</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Descubrir</h4>
              <Link to="/buscar">Buscar Propiedades</Link>
              <Link to="/buscar?location=san-bernardino">Cerca de UTIM</Link>
              <Link to="/buscar?type=casa">Casas Familiares</Link>
            </div>
            <div className="footer-column">
              <h4>Recursos</h4>
              <Link to="/login">Iniciar Sesión</Link>
              <Link to="/registro">Registrarse</Link>
              <Link to="/recuperar-contrasena">Recuperar Contraseña</Link>
            </div>
            <div className="footer-column">
              <h4>Legal</h4>
              <Link to="/terminos">Términos de uso</Link>
              <Link to="/privacidad">Política de privacidad</Link>
              <Link to="/faq">Preguntas frecuentes</Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 IzuHome. Proyecto UTIM. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default Landing;