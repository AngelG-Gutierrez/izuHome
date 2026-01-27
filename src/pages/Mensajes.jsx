import React from 'react';
import { Link } from 'react-router-dom';

export const Chat = () => {
  return (
    <div className="landing-container" style={{ padding: '2rem' }}>
      <Link to="/" style={{ textDecoration: 'none', color: '#64748b', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '20px' }}>
        ← Volver al inicio
      </Link>

      <h2 style={{ color: '#0f172a', marginBottom: '1.5rem' }}>Mensajes</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', border: '1px solid #e2e8f0', borderRadius: '12px', overflow: 'hidden' }}>
        <div style={{ background: '#f8fafc', padding: '1rem', borderBottom: '1px solid #e2e8f0' }}>
          <strong>Luis Arriaga</strong> • <small style={{ color: '#64748b' }}>Interesado en: Cuarto UTIM</small>
        </div>
        <div style={{ height: '300px', padding: '1.5rem', background: '#fff' }}>
          <div style={{ background: '#f1f5f9', padding: '10px', borderRadius: '8px', maxWidth: '80%', marginBottom: '10px', fontSize: '0.9rem' }}>
            ¿Sigue disponible el cuarto? Me gustaría verlo mañana.
          </div>
          <div style={{ background: '#10b981', color: 'white', padding: '10px', borderRadius: '8px', maxWidth: '80%', marginLeft: 'auto', fontSize: '0.9rem' }}>
            ¡Hola! Sí, aún disponible. ¿A qué hora te queda bien?
          </div>
        </div>
        <div style={{ padding: '1rem', borderTop: '1px solid #e2e8f0', display: 'flex', gap: '10px', background: '#fff' }}>
          <input type="text" placeholder="Escribe un mensaje..." style={{ flex: 1, padding: '10px', border: '1px solid #cbd5e1', borderRadius: '8px', outline: 'none' }} />
          <button className="btn-primary" style={{ borderRadius: '8px' }}>Enviar</button>
        </div>
      </div>
    </div>
  );
};