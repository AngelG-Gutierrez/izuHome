import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Iniciando sesión en IzuHome:', credentials);
    // Simulación: Redirigir según rol (esto lo devolvería el backend)
    // Si es admin -> /admin, si es usuario -> /perfil
    navigate('/');
  };

  return (
    <div className="auth-container" style={{ marginTop: '5rem' }}>
      <h1 style={{ color: '#0f172a', fontSize: '1.8rem' }}>¡Hola de nuevo!</h1>
      <p style={{ color: '#64748b', marginBottom: '2rem' }}>
        Accede a tu cuenta IzuHome
      </p>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Correo Electrónico</label>
          <input 
            type="email" 
            name="email" 
            placeholder="tucorreo@ejemplo.com" 
            required 
            onChange={handleChange} 
          />
        </div>
        <div>
          <label>Contraseña</label>
          <input 
            type="password" 
            name="password" 
            required 
            onChange={handleChange} 
          />
        </div>

        <div style={{ textAlign: 'right', fontSize: '0.85rem' }}>
          <Link to="/recuperar-password" style={{ color: '#64748b' }}>
            ¿Olvidaste tu contraseña?
          </Link>
        </div>

        <button type="submit" className="btn-primary">
          Entrar
        </button>
      </form>

      <div style={{ marginTop: '2rem', borderTop: '1px solid #e2e8f0', paddingTop: '1rem' }}>
        <p style={{ fontSize: '0.9rem' }}>
          ¿Aún no eres parte? <Link to="/registro">Regístrate aquí</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;