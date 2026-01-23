import React from 'react';
import { Link } from 'react-router-dom';

function ContactRequests() {
  // Datos simulados basados en tu tabla 'solicitudes_contacto'
  const solicitudes = [
    {
      id: 1,
      propiedad: "Departamento cerca de la UTIM",
      inquilino: "Diego Lopez",
      mensaje: "Hola, me gustaría saber si aceptan mascotas pequeñas. Soy estudiante.",
      fecha_entrada: "2026-02-10",
      duracion: "12 meses",
      estado: "pendiente"
    },
    {
      id: 2,
      propiedad: "Cuarto en Barrio de Santiago",
      inquilino: "Mauricio Diaz",
      mensaje: "Me interesa el cuarto, ¿cuenta con servicio de internet?",
      fecha_entrada: "2026-02-01",
      duracion: "6 meses",
      estado: "contactado"
    }
  ];

  return (
    <div className="landing-container" style={{ background: '#f8fafc', minHeight: '100vh' }}>
      <nav style={{ background: '#fff', borderBottom: '1px solid #cbd5e1' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <h1 style={{ color: '#0f172a', fontSize: '1.2rem' }}>IzuHome <span style={{fontWeight: 'normal'}}>| Mis Solicitudes</span></h1>
        </div>
        <Link to="/" className="btn-ghost">Volver</Link>
      </nav>

      <div style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
        <header style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: '#0f172a' }}>Solicitudes de Interés</h2>
          <p style={{ color: '#64748b' }}>Personas interesadas en tus propiedades en Izúcar.</p>
        </header>

        <div style={{ display: 'grid', gap: '1.5rem' }}>
          {solicitudes.map((sol) => (
            <div key={sol.id} className="feature-card" style={{ textAlign: 'left', background: 'white', position: 'relative' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#10b981' }}>{sol.propiedad}</span>
                <span style={{ 
                  fontSize: '0.7rem', 
                  padding: '2px 8px', 
                  borderRadius: '12px', 
                  background: sol.estado === 'pendiente' ? '#fef3c7' : '#dcfce7',
                  color: sol.estado === 'pendiente' ? '#92400e' : '#166534'
                }}>
                  {sol.estado.toUpperCase()}
                </span>
              </div>

              <h3 style={{ margin: '0 0 10px 0', fontSize: '1.1rem' }}>{sol.inquilino}</h3>
              <p style={{ fontSize: '0.9rem', color: '#334155', marginBottom: '15px' }}>"{sol.mensaje}"</p>
              
              <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '10px', display: 'flex', gap: '20px', fontSize: '0.8rem', color: '#64748b' }}>
                <span>📅 <strong>Entrada:</strong> {sol.fecha_entrada}</span>
                <span>⏱️ <strong>Estancia:</strong> {sol.duracion}</span>
              </div>

              <div style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
                <button className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.8rem' }}>Aceptar Contacto</button>
                <button className="btn-ghost" style={{ padding: '8px 16px', fontSize: '0.8rem', color: '#ef4444' }}>Rechazar</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactRequests;