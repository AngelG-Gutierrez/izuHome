import React from 'react';
import { Link } from 'react-router-dom';

function AdminPanel() {
  return (
    <div className="landing-container" style={{ background: '#f8fafc', minHeight: '100vh', paddingBottom: '50px' }}>
      
      {/* Navbar  */}
      <nav style={{ background: '#fff', borderBottom: '1px solid #cbd5e1', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <h1 style={{ color: '#0f172a', fontSize: '1.5rem' }}>IzuHome <span style={{fontWeight: 'normal', color: '#64748b'}}>| Administracion</span></h1>
        </div>
        <div>
          <Link to="/" className="btn-ghost">Salir del Panel</Link>
        </div>
      </nav>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1rem' }}>
        <header style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', color: '#0f172a' }}>Panel de administración</h2>
          
        </header>

        {/* --- SECCIÓN 1: PROPIEDADES --- */}
        <section style={{ marginBottom: '4rem' }}>
          <h3 style={{ borderLeft: '4px solid #10b981', paddingLeft: '10px', color: '#0f172a' }}>Propiedades por Aprobar</h3>
          <div className="feature-card" style={{ textAlign: 'left', marginTop: '1rem' }}>
            <p><strong>Cuarto cerca de la UTIM</strong> - San Bernardino</p>
            <p style={{ fontSize: '0.8rem', color: '#64748b' }}>Solicitado por: Juan Pérez | Precio: $1,200</p>
            <div style={{ marginTop: '10px' }}>
              <button className="btn-primary" style={{ marginRight: '10px', padding: '5px 15px' }}>Publicar</button>
              <button className="btn-ghost" style={{ color: '#ef4444', border: '1px solid #ef4444', padding: '5px 15px' }}>Rechazar</button>
            </div>
          </div>
        </section>

        {/* --- SECCIÓN 2: USUARIOS --- */}
        <section style={{ marginBottom: '4rem' }}>
          <h3 style={{ borderLeft: '4px solid #10b981', paddingLeft: '10px', color: '#0f172a' }}>Verificación de Arrendadores</h3>
          <div className="feature-card" style={{ textAlign: 'left', marginTop: '1rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ textAlign: 'left', color: '#64748b', fontSize: '0.8rem' }}>
                  <th>USUARIO</th>
                  <th>ESTADO</th>
                  <th>ACCIÓN</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderTop: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '10px 0' }}>Kike</td>
                  <td style={{ color: '#10b981' }}>Pendiente de verificacion de INE</td>
                  <td><button className="btn-primary" style={{ fontSize: '0.7rem' }}>Validar</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* --- SECCIÓN 3: REPORTES --- */}
        <section style={{ marginBottom: '4rem' }}>
          <h3 style={{ borderLeft: '4px solid #ef4444', paddingLeft: '10px', color: '#0f172a' }}>Reportes de Seguridad</h3>
          <div className="feature-card" style={{ textAlign: 'left', marginTop: '1rem', border: '1px solid #fee2e2' }}>
            <p><strong style={{ color: '#ef4444' }}>[POSIBLE FRAUDE]</strong></p>
            <p style={{ fontSize: '0.9rem' }}>"La casa que se renta no es igual a la de las fotos."</p>
            <small style={{ color: '#64748b' }}>Reportado por: Inquilino1</small>
            <div style={{ marginTop: '10px' }}>
              <button className="btn-ghost" style={{ fontSize: '0.8rem' }}>Ver mas detalles...</button>
            </div>
          </div>
        </section>

        {/* --- SECCIÓN 4: RESEÑAS --- */}
        <section>
          <h3 style={{ borderLeft: '4px solid #10b981', paddingLeft: '10px', color: '#0f172a' }}>Moderación de Reseñas</h3>
          <div className="feature-card" style={{ textAlign: 'left', marginTop: '1rem' }}>
            <p style={{ fontStyle: 'italic' }}>"No me gustó, el dueño es muy grosero."</p>
            <p style={{ fontSize: '0.8rem' }}>Publicada en: <strong>Casa Centro</strong></p>
            <button className="btn-ghost" style={{ color: '#64748b', fontSize: '0.8rem' }}>Ocultar Comentario</button>
          </div>
        </section>

        {/* --- SECCIÓN 5: SOLICITUDES DE CONTACTO (Basado en RF-018) --- */}
<section style={{ marginBottom: '4rem' }}>
  <h3 style={{ borderLeft: '4px solid #10b981', paddingLeft: '10px', color: '#0f172a' }}>
    Solicitudes de Contacto
  </h3>
  <div className="feature-card" style={{ textAlign: 'left', marginTop: '1rem' }}>
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr style={{ textAlign: 'left', color: '#64748b', fontSize: '0.8rem' }}>
          <th style={{ padding: '10px' }}>PROPIEDAD</th>
          <th style={{ padding: '10px' }}>MENSAJE</th>
          <th style={{ padding: '10px' }}>ESTADO</th>
          <th style={{ padding: '10px' }}>ACCIÓN</th>
        </tr>
      </thead>
      <tbody>
        <tr style={{ borderTop: '1px solid #f1f5f9' }}>
          <td style={{ padding: '10px' }}>
            <strong>Cuarto Estudiantil</strong><br />
            <span style={{ fontSize: '0.7rem' }}>Entrada: 01/02/2026</span>
          </td>
          <td style={{ padding: '10px', fontSize: '0.85rem' }}>
            "Hola, me interesa el cuarto por 6 meses. Soy estudiante de la UTIM."
          </td>
          <td style={{ padding: '10px' }}>
            <span style={{ background: '#fef3c7', color: '#92400e', padding: '4px 8px', borderRadius: '4px', fontSize: '0.7rem' }}>
              PENDIENTE
            </span>
          </td>
          <td style={{ padding: '10px' }}>
            <button className="btn-primary" style={{ fontSize: '0.7rem', padding: '5px 10px' }}>Responder</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

      </div>
    </div>
  );
}

export default AdminPanel;