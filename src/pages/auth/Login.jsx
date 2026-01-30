import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdEmail, MdLock } from 'react-icons/md';
import { BiArrowBack } from 'react-icons/bi';
import './Login.css'

function Login() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', credentials);
    navigate('/');
  };

  return (
    <div className="split-screen">
      {/*Branding*/}
      <div className="split-brand">
        <div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '900' }}>IzuHome</h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.9, marginTop: '1rem' }}>
            Conectando a la comunidad de Izúcar con su próximo hogar.
          </p>
        </div>
        <div style={{ fontSize: '0.9rem', opacity: 0.7 }}>
          © 2026 IzuHome. Proyecto UTIM.
        </div>
      </div>

      {/* LADO DERECHO: Formulario */}
      <div className="split-form">
        {/* Botón de regreso solicitado */}
        <Link to="/" className="back-link">
          <BiArrowBack /> Volver al inicio
        </Link>

        <div className="auth-header">
          <h2>¡Bienvenido de nuevo!</h2>
          <p>Ingresa tus credenciales para continuar.</p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Input con Icono */}
          <div className="input-group">
            <label>Correo Electrónico</label>
            <div className="input-wrapper">
              <MdEmail className="input-icon" />
              <input 
                type="email" 
                name="email" 
                placeholder="ejemplo@utizucar.edu.mx" 
                required 
                onChange={handleChange} 
              />
            </div>
          </div>

          <div className="input-group">
            <label>Contraseña</label>
            <div className="input-wrapper">
              <MdLock className="input-icon" />
              <input 
                type="password" 
                name="password" 
                placeholder="••••••••"
                required 
                onChange={handleChange} 
              />
            </div>
          </div>

          <div style={{ textAlign: 'right', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
            <Link to="/recuperar-password" style={{ color: 'var(--text-muted)' }}>
              ¿Olvidaste tu contraseña?
            </Link>
          </div>

          <button type="submit" className="btn-primary" style={{ padding: '1rem' }}>
            Iniciar Sesión
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '2rem', color: 'var(--text-muted)' }}>
          <p>
            ¿Aún no tienes cuenta? <Link to="/registro">Regístrate gratis</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;