import React from 'react';
import { Link } from 'react-router-dom';

export const Dashboard = () => {
  return (
    <div className="landing-container" style={{ padding: '2rem' }}>
      <Link to="/" style={{ textDecoration: 'none', color: '#64748b', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '20px' }}>
        ← Volver al inicio
      </Link>
      
      <h2 style={{ color: '#0f172a', marginBottom: '2rem' }}>Resumen de actividad</h2>
      <div className="feature-grid">
        <div className="feature-card">
          <h3 style={{ color: '#10b981', margin: 0 }}>124</h3>
          <p style={{ fontSize: '0.9rem', color: '#64748b' }}>Vistas de tus propiedades</p>
        </div>
        <div className="feature-card">
          <h3 style={{ color: '#10b981', margin: 0 }}>8</h3>
          <p style={{ fontSize: '0.9rem', color: '#64748b' }}>Nuevos interesados</p>
        </div>
        <div className="feature-card">
          <h3 style={{ color: '#10b981', margin: 0 }}>4.9 ★</h3>
          <p style={{ fontSize: '0.9rem', color: '#64748b' }}>Reputación de arrendador</p>
        </div>
      </div>
    </div>
  );
};