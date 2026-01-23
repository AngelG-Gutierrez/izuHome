import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  
  // Estado para los datos del formulario
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Estado para manejar errores de validación local
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Limpiamos el error si el usuario empieza a escribir de nuevo
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Validación: Contraseñas coinciden
    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    // 2. Validación: Longitud mínima (opcional pero recomendada)
    if (formData.password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    // 3. Simulación de envío al Backend
    console.log('Enviando datos de registro:', {
      fullName: formData.fullName,
      email: formData.email,
      password: formData.password
      // Nota: No enviamos 'confirmPassword' al backend, no es necesario allá
    });

    // Redirigir al Login para que el usuario inicie sesión con su nueva cuenta
    // O redirigir directo al dashboard si el backend devuelve el token inmediatamente
    navigate('/login');
  };

  return (
    <div className="auth-container">
      <h2>Crear Cuenta</h2>
      
      {/* Mensaje de error visual */}
      {error && <p style={{ color: 'red', marginBottom: '1rem' }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre Completo</label>
          <input 
            type="text" 
            name="fullName" 
            value={formData.fullName} 
            onChange={handleChange} 
            placeholder="Ej. Juan Pérez"
            required 
          />
        </div>

        <div>
          <label>Correo Electrónico</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            placeholder="correo@ejemplo.com"
            required 
          />
        </div>

        <div>
          <label>Contraseña</label>
          <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div>
          <label>Confirmar Contraseña</label>
          <input 
            type="password" 
            name="confirmPassword" 
            value={formData.confirmPassword} 
            onChange={handleChange} 
            required 
          />
        </div>

        <button type="submit" style={{ marginTop: '10px' }}>
          Registrarse
        </button>
      </form>

      <p style={{ marginTop: '1rem' }}>
        ¿Ya tienes cuenta? <Link to="/login">Inicia Sesión</Link>
      </p>
    </div>
  );
}

export default Register;