import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { BiArrowBack } from 'react-icons/bi';
import '../../styles/Auth.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulación de envío (en frontend)
    setTimeout(() => {
      setMessage(`Se ha enviado un enlace de recuperación a ${email}`);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        {/* Botón de regreso */}
        <Link to="/login" className="back-link">
          <BiArrowBack /> Volver al inicio de sesión
        </Link>

        <div className="auth-header">
          <h2 className="auth-title">Recuperar Contraseña</h2>
          <p className="auth-subtitle">
            Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label>Correo Electrónico</label>
            <div className="input-wrapper">
              <MdEmail className="input-icon" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ejemplo@utizucar.edu.mx"
                required
              />
            </div>
          </div>
          
          {message && (
            <div className="success-message">
              <p>{message}</p>
            </div>
          )}
          
          <button 
            type="submit" 
            className="auth-button"
            disabled={loading}
          >
            {loading ? 'Enviando...' : 'Enviar Enlace de Recuperación'}
          </button>
        </form>
        
        <div className="auth-links">
          <p>
            ¿Recordaste tu contraseña? <Link to="/login">Inicia sesión aquí</Link>
          </p>
          <p>
            ¿No tienes cuenta? <Link to="/registro">Regístrate gratis</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;