import React from 'react';
import { Link } from 'react-router-dom';

export const MisPropiedades = () => {
  return (
    <div className="landing-container" style={{ padding: '2rem' }}>
      <Link to="/" style={{ textDecoration: 'none', color: '#64748b', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '20px' }}>
        ← Volver al inicio
      </Link>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2 style={{ color: '#0f172a', margin: 0 }}>Mis Propiedades</h2>
        <Link to="/propiedades/nueva"><button className="btn-primary" style={{ padding: '10px 20px', borderRadius: '8px' }}>+ Publicar</button></Link>
      </div>
      
      <div className="feature-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h4 style={{ margin: 0, color: '#0f172a' }}>Cuarto cerca de la UTIM</h4>
          <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b' }}>San Bernardino • $1,800/mes</p>
        </div>
        <span style={{ color: '#10b981', fontWeight: 'bold', fontSize: '0.8rem', padding: '4px 12px', background: '#ecfdf5', borderRadius: '20px' }}>Activa</span>
      </div>
    </div>
  );
};