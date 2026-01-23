import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    telefono: '', // Requerido según RF-001
    password: '',
    confirmPassword: '',
    tipo: 'inquilino' // Valor por defecto según Schema DB
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    // Aquí iría la conexión con tu API (Node.js)
    // endpoint: POST /api/usuarios
    console.log('Registrando usuario IzuHome:', formData);
    navigate('/login');
  };

  return (
    <div className="auth-container">
      <h2 style={{ marginBottom: '0.5rem' }}>Únete a IzuHome</h2>
      <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '1.5rem' }}>
        La comunidad inmobiliaria de Izúcar
      </p>

      <form onSubmit={handleSubmit}>
        {/* Nombre y Apellidos */}
        <div style={{ display: 'flex', gap: '10px' }}>
          <div style={{ flex: 1 }}>
            <label>Nombre</label>
            <input type="text" name="nombre" required onChange={handleChange} />
          </div>
          <div style={{ flex: 1 }}>
            <label>Apellidos</label>
            <input type="text" name="apellidos" required onChange={handleChange} />
          </div>
        </div>

        {/* Selección de Rol - CRÍTICO para el proyecto */}
        <div>
          <label>¿Cómo usarás la plataforma?</label>
          <select 
            name="tipo" 
            value={formData.tipo} 
            onChange={handleChange}
            style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1' }}
          >
            <option value="inquilino">Busco un lugar para vivir (Inquilino)</option>
            <option value="arrendador">Quiero rentar mi propiedad (Arrendador)</option>
            <option value="ambos">Ambos</option>
          </select>
        </div>

        {/* Contacto */}
        <div>
          <label>Correo Electrónico</label>
          <input type="email" name="email" placeholder="ejemplo@utizucar.edu.mx" required onChange={handleChange} />
        </div>
        
        <div>
          <label>Teléfono (WhatsApp)</label>
          <input type="tel" name="telefono" placeholder="243 000 0000" required onChange={handleChange} />
        </div>

        {/* Seguridad */}
        <div>
          <label>Contraseña</label>
          <input type="password" name="password" required onChange={handleChange} />
        </div>
        <div>
          <label>Confirmar Contraseña</label>
          <input type="password" name="confirmPassword" required onChange={handleChange} />
        </div>

        <button type="submit" className="btn-primary" style={{ marginTop: '1rem' }}>
          Crear Cuenta
        </button>
      </form>

      <p style={{ marginTop: '1.5rem', fontSize: '0.9rem' }}>
        ¿Ya tienes cuenta? <Link to="/login" style={{ fontWeight: 'bold' }}>Inicia Sesión</Link>
      </p>
    </div>
  );
}

export default Register;