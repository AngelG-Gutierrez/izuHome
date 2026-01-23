import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className="landing-container">
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
        <h1>MiProyecto</h1>
        <div>
          <Link to="/login" style={{ marginRight: '10px' }}>Iniciar Sesión</Link>
          <Link to="/registro">Registrarse</Link>
        </div>
      </nav>

      <header style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Gestiona tus proyectos de forma inteligente</h1>
        <p>La solución integral para estudiantes y profesionales.</p>
        <Link to="/registro">
          <button style={{ padding: '10px 20px', fontSize: '1.2rem' }}>
            Comenzar Ahora
          </button>
        </Link>
      </header>
    </div>
  );
}

export default Landing;