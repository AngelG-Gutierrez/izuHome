import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdPerson, MdEmail, MdLock, MdPhone, MdHomeWork } from 'react-icons/md';
import { BiArrowBack } from 'react-icons/bi';

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: '', apellidos: '', email: '', telefono: '', password: '', confirmPassword: '', tipo: 'inquilino'
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) return alert("Las contraseñas no coinciden");
    console.log('Registro:', formData);
    navigate('/login');
  };

  return (
    <div className="split-screen">
      {/* Branding Lateral */}
      <div className="split-brand" style={{ backgroundPosition: 'center bottom' }}>
        <div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '900' }}>Únete a IzuHome</h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.9, marginTop: '1rem' }}>
            Crea tu cuenta y encuentra (o publica) el espacio ideal en Izúcar.
          </p>
        </div>
      </div>

      {/* Formulario */}
      <div className="split-form">
        <Link to="/" className="back-link"><BiArrowBack /> Volver al inicio</Link>

        <div className="auth-header">
          <h2>Crear Cuenta</h2>
          <p>Completa el formulario para comenzar.</p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Grid para Nombre y Apellido */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="input-group">
              <label>Nombre</label>
              <div className="input-wrapper">
                <MdPerson className="input-icon" />
                <input type="text" name="nombre" required onChange={handleChange} placeholder="Juan" />
              </div>
            </div>
            <div className="input-group">
              <label>Apellidos</label>
              <div className="input-wrapper">
                <MdPerson className="input-icon" />
                <input type="text" name="apellidos" required onChange={handleChange} placeholder="Pérez" />
              </div>
            </div>
          </div>

           {/* Selector de Rol */}
           <div className="input-group">
            <label>Quiero...</label>
            <div className="input-wrapper">
              <MdHomeWork className="input-icon" />
              <select name="tipo" value={formData.tipo} onChange={handleChange}>
                <option value="inquilino">Buscar alojamiento (Estudiante/Familia)</option>
                <option value="arrendador">Rentar mi propiedad</option>
                <option value="ambos">Ambos</option>
              </select>
            </div>
          </div>

          <div className="input-group">
            <label>Correo Electrónico</label>
            <div className="input-wrapper">
              <MdEmail className="input-icon" />
              <input type="email" name="email" required onChange={handleChange} placeholder="ejemplo@utizucar.edu.mx" />
            </div>
          </div>
          
          <div className="input-group">
            <label>Teléfono / WhatsApp</label>
            <div className="input-wrapper">
              <MdPhone className="input-icon" />
              <input type="tel" name="telefono" required onChange={handleChange} placeholder="243 000 0000" />
            </div>
          </div>

          <div className="input-group">
            <label>Contraseña</label>
            <div className="input-wrapper">
              <MdLock className="input-icon" />
              <input type="password" name="password" required onChange={handleChange} placeholder="••••••••"/>
            </div>
          </div>

          <button type="submit" className="btn-primary" style={{ padding: '1rem', marginTop: '1rem' }}>
            Registrarme
          </button>
        </form>
        
        <div style={{ textAlign: 'center', marginTop: '2rem', color: 'var(--text-muted)' }}>
          <p>¿Ya tienes cuenta? <Link to="/login">Inicia Sesión</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Register;