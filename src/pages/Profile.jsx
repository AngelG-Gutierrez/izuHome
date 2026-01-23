import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiArrowBack, BiEdit, BiSave, BiX } from 'react-icons/bi';
import { MdEmail, MdPerson, MdStar, MdStarHalf, MdStarBorder } from 'react-icons/md';

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Juan Pérez',
    email: 'juan.perez@utizucar.edu.mx',
    description: 'Estudiante de Ingeniería en Sistemas en la UTIM. Busco un lugar tranquilo cerca de la universidad para enfocarme en mis estudios.',
    profilePhoto: 'https://ui-avatars.com/api/?name=Juan+Perez&background=10b981&color=fff&size=200',
    reputation: 4.5,
    totalReviews: 12
  });

  const [editForm, setEditForm] = useState(profile);

  const handleEdit = () => {
    setIsEditing(true);
    setEditForm(profile);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditForm(profile);
  };

  const handleSave = () => {
    setProfile(editForm);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<MdStar key={i} style={{ color: '#fbbf24', fontSize: '1.2rem' }} />);
    }
    if (hasHalfStar) {
      stars.push(<MdStarHalf key="half" style={{ color: '#fbbf24', fontSize: '1.2rem' }} />);
    }
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<MdStarBorder key={`empty-${i}`} style={{ color: '#d1d5db', fontSize: '1.2rem' }} />);
    }
    return stars;
  };

  const getReputationLevel = (rating) => {
    if (rating >= 4.5) return { text: 'Excelente', color: '#10b981' };
    if (rating >= 4.0) return { text: 'Muy Bueno', color: '#22c55e' };
    if (rating >= 3.5) return { text: 'Bueno', color: '#84cc16' };
    if (rating >= 3.0) return { text: 'Regular', color: '#eab308' };
    return { text: 'Necesita Mejora', color: '#f59e0b' };
  };

  const reputationLevel = getReputationLevel(profile.reputation);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-page)', paddingBottom: '3rem' }}>
      {/* Navbar */}
      <nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <h1 style={{ color: '#0f172a', fontSize: '1.5rem' }}>IzuHome</h1>
          </Link>
        </div>
        <div>
          <Link to="/" className="btn-ghost">Inicio</Link>
        </div>
      </nav>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 1rem' }}>
        {/* Botón de regreso */}
        <Link to="/" className="back-link">
          <BiArrowBack /> Volver al inicio
        </Link>

        {/* Tarjeta de Perfil */}
        <div style={{
          background: 'var(--white)',
          borderRadius: 'var(--radius-md)',
          boxShadow: 'var(--shadow-lg)',
          padding: '2.5rem',
          marginBottom: '2rem'
        }}>
          {/* Header con botón de editar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--primary)' }}>
              Mi Perfil
            </h2>
            {!isEditing ? (
              <button 
                onClick={handleEdit}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '0.75rem 1.5rem',
                  background: 'var(--accent)',
                  color: 'var(--white)',
                  border: 'none',
                  borderRadius: 'var(--radius-sm)',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => e.target.style.background = 'var(--accent-dark)'}
                onMouseLeave={(e) => e.target.style.background = 'var(--accent)'}
              >
                <BiEdit /> Editar Perfil
              </button>
            ) : (
              <div style={{ display: 'flex', gap: '10px' }}>
                <button 
                  onClick={handleCancel}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '0.75rem 1.5rem',
                    background: 'transparent',
                    color: 'var(--text-muted)',
                    border: '2px solid #e2e8f0',
                    borderRadius: 'var(--radius-sm)',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  <BiX /> Cancelar
                </button>
                <button 
                  onClick={handleSave}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '0.75rem 1.5rem',
                    background: 'var(--accent)',
                    color: 'var(--white)',
                    border: 'none',
                    borderRadius: 'var(--radius-sm)',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  <BiSave /> Guardar
                </button>
              </div>
            )}
          </div>

          {/* Foto de Perfil y Información Principal */}
          <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center' }}>
              <img 
                src={profile.profilePhoto} 
                alt="Foto de perfil"
                style={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '4px solid var(--accent)',
                  marginBottom: '1rem'
                }}
              />
              {isEditing && (
                <button 
                  style={{
                    padding: '0.5rem 1rem',
                    background: 'var(--bg-page)',
                    border: '2px solid #e2e8f0',
                    borderRadius: 'var(--radius-sm)',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: 'var(--text-dark)'
                  }}
                >
                  Cambiar foto
                </button>
              )}
            </div>

            <div style={{ flex: 1, minWidth: '250px' }}>
              {!isEditing ? (
                <>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--text-dark)' }}>
                    {profile.name}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem', color: 'var(--text-muted)' }}>
                    <MdEmail />
                    <span>{profile.email}</span>
                  </div>
                  <div style={{ 
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '0.5rem 1rem',
                    background: `${reputationLevel.color}15`,
                    borderRadius: 'var(--radius-sm)',
                    border: `2px solid ${reputationLevel.color}40`
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      {renderStars(profile.reputation)}
                    </div>
                    <span style={{ fontWeight: '600', color: reputationLevel.color }}>
                      {profile.reputation} ({profile.totalReviews} reseñas)
                    </span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                      - {reputationLevel.text}
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="input-group">
                    <label>Nombre Completo</label>
                    <div className="input-wrapper">
                      <MdPerson className="input-icon" />
                      <input 
                        type="text" 
                        name="name"
                        value={editForm.name}
                        onChange={handleChange}
                        style={{ paddingLeft: '2.8rem' }}
                      />
                    </div>
                  </div>
                  <div className="input-group">
                    <label>Correo Electrónico</label>
                    <div className="input-wrapper">
                      <MdEmail className="input-icon" />
                      <input 
                        type="email" 
                        name="email"
                        value={editForm.email}
                        onChange={handleChange}
                        style={{ paddingLeft: '2.8rem' }}
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Descripción */}
          <div>
            <label style={{ 
              display: 'block',
              fontSize: '0.875rem',
              fontWeight: '600',
              marginBottom: '0.5rem',
              color: 'var(--text-dark)'
            }}>
              Descripción Personal
            </label>
            {!isEditing ? (
              <p style={{ 
                color: 'var(--text-muted)',
                lineHeight: '1.8',
                padding: '1rem',
                background: 'var(--bg-page)',
                borderRadius: 'var(--radius-sm)'
              }}>
                {profile.description}
              </p>
            ) : (
              <textarea
                name="description"
                value={editForm.description}
                onChange={handleChange}
                rows="4"
                style={{
                  width: '100%',
                  padding: '1rem',
                  border: '2px solid #e2e8f0',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '1rem',
                  fontFamily: 'inherit',
                  resize: 'vertical',
                  transition: 'all 0.3s ease'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--accent)';
                  e.target.style.boxShadow = '0 0 0 4px rgba(16, 185, 129, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e2e8f0';
                  e.target.style.boxShadow = 'none';
                }}
              />
            )}
          </div>
        </div>

        {/* Sección de Navegación Rápida */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem'
        }}>
          <Link 
            to="/favoritos"
            style={{
              display: 'block',
              padding: '1.5rem',
              background: 'var(--white)',
              borderRadius: 'var(--radius-md)',
              boxShadow: 'var(--shadow-md)',
              textDecoration: 'none',
              color: 'var(--text-dark)',
              transition: 'transform 0.2s',
              textAlign: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'var(--shadow-md)';
            }}
          >
            <h3 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>Mis Favoritos</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Ver propiedades guardadas</p>
          </Link>
          <Link 
            to="/blog"
            style={{
              display: 'block',
              padding: '1.5rem',
              background: 'var(--white)',
              borderRadius: 'var(--radius-md)',
              boxShadow: 'var(--shadow-md)',
              textDecoration: 'none',
              color: 'var(--text-dark)',
              transition: 'transform 0.2s',
              textAlign: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'var(--shadow-md)';
            }}
          >
            <h3 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>Guía de Izúcar</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Conoce más sobre la ciudad</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Profile;
