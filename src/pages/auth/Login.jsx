import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdEmail, MdLock } from 'react-icons/md';
import { BiArrowBack } from 'react-icons/bi';
import '../../styles/Auth.css'; // Agregar esta línea

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
    <div className="auth-container">
      <div className="auth-card">
        {/* Botón de regreso */}
        <Link to="/" className="back-link">
          <BiArrowBack /> Volver al inicio
        </Link>

        <div className="auth-header">
          <h2 className="auth-title">¡Bienvenido de nuevo!</h2>
          <p className="auth-subtitle">Ingresa tus credenciales para continuar.</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {/* Input con Icono */}
          <div className="form-group">
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

          <div className="form-group">
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

          <div className="forgot-password-link">
            <Link to="/recuperar-contrasena">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>

          <button type="submit" className="auth-button">
            Iniciar Sesión
          </button>
        </form>

        <div className="auth-links">
          <p>
            ¿Aún no tienes cuenta? <Link to="/registro">Regístrate gratis</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;