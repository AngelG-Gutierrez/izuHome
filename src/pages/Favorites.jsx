import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiArrowBack, BiHeart, BiTrash } from 'react-icons/bi';
import { MdLocationOn, MdBed, MdShower, MdAttachMoney } from 'react-icons/md';

function Favorites() {
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      title: 'Cuarto individual cerca de UTIM',
      location: 'San Bernardino, Izúcar de Matamoros',
      price: 1200,
      type: 'Cuarto para estudiante',
      bedrooms: 1,
      bathrooms: 1,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop',
      description: 'Cuarto amplio con baño compartido, ideal para estudiantes. Incluye internet y agua.'
    },
    {
      id: 2,
      title: 'Departamento completo en el Centro',
      location: 'Centro, Izúcar de Matamoros',
      price: 3500,
      type: 'Departamento',
      bedrooms: 2,
      bathrooms: 1,
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop',
      description: 'Departamento moderno con cocina equipada, cerca de servicios y transporte público.'
    },
    {
      id: 3,
      title: 'Casa completa familiar',
      location: 'Barrio de Santiago, Izúcar de Matamoros',
      price: 5000,
      type: 'Casa completa',
      bedrooms: 3,
      bathrooms: 2,
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop',
      description: 'Casa espaciosa con patio, ideal para familias. Incluye todos los servicios básicos.'
    }
  ]);

  const handleRemoveFavorite = (id) => {
    setFavorites(favorites.filter(prop => prop.id !== id));
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 0
    }).format(price);
  };

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
          <Link to="/perfil" className="btn-ghost">Mi Perfil</Link>
          <Link to="/" className="btn-ghost">Inicio</Link>
        </div>
      </nav>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
        {/* Botón de regreso */}
        <Link to="/" className="back-link">
          <BiArrowBack /> Volver al inicio
        </Link>

        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '0.5rem' }}>
            Mis Favoritos
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            {favorites.length === 0 
              ? 'No tienes propiedades favoritas aún. Explora y agrega las que más te interesen.'
              : `Tienes ${favorites.length} ${favorites.length === 1 ? 'propiedad favorita' : 'propiedades favoritas'}`
            }
          </p>
        </div>

        {/* Lista de Favoritos */}
        {favorites.length === 0 ? (
          <div style={{
            background: 'var(--white)',
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-md)',
            padding: '4rem 2rem',
            textAlign: 'center'
          }}>
            <BiHeart style={{ fontSize: '4rem', color: '#e2e8f0', marginBottom: '1rem' }} />
            <h3 style={{ color: 'var(--text-dark)', marginBottom: '0.5rem' }}>No hay favoritos aún</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
              Comienza a explorar propiedades y marca tus favoritas para encontrarlas fácilmente después.
            </p>
            <Link to="/" className="btn-primary">
              Explorar Propiedades
            </Link>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.5rem'
          }}>
            {favorites.map(property => (
              <div
                key={property.id}
                style={{
                  background: 'var(--white)',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: 'var(--shadow-md)',
                  overflow: 'hidden',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  cursor: 'pointer'
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
                {/* Imagen */}
                <div style={{ position: 'relative', width: '100%', height: '200px', overflow: 'hidden' }}>
                  <img
                    src={property.image}
                    alt={property.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveFavorite(property.id);
                    }}
                    style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      background: 'rgba(255, 255, 255, 0.9)',
                      border: 'none',
                      borderRadius: '50%',
                      width: '40px',
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      color: 'var(--danger)',
                      fontSize: '1.2rem'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--danger)';
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                      e.currentTarget.style.color = 'var(--danger)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                    title="Eliminar de favoritos"
                  >
                    <BiTrash />
                  </button>
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    background: 'var(--accent)',
                    color: 'var(--white)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.85rem',
                    fontWeight: '600'
                  }}>
                    {property.type}
                  </div>
                </div>

                {/* Contenido */}
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    color: 'var(--text-dark)',
                    marginBottom: '0.5rem',
                    lineHeight: '1.4'
                  }}>
                    {property.title}
                  </h3>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: 'var(--text-muted)',
                    fontSize: '0.9rem',
                    marginBottom: '1rem'
                  }}>
                    <MdLocationOn style={{ fontSize: '1.1rem' }} />
                    <span>{property.location}</span>
                  </div>

                  <p style={{
                    color: 'var(--text-muted)',
                    fontSize: '0.9rem',
                    marginBottom: '1rem',
                    lineHeight: '1.6',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {property.description}
                  </p>

                  {/* Características */}
                  <div style={{
                    display: 'flex',
                    gap: '1rem',
                    marginBottom: '1rem',
                    paddingBottom: '1rem',
                    borderBottom: '1px solid #e2e8f0'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--text-muted)' }}>
                      <MdBed style={{ fontSize: '1.1rem' }} />
                      <span style={{ fontSize: '0.9rem' }}>{property.bedrooms}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--text-muted)' }}>
                      <MdShower style={{ fontSize: '1.1rem' }} />
                      <span style={{ fontSize: '0.9rem' }}>{property.bathrooms}</span>
                    </div>
                  </div>

                  {/* Precio y Acción */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <div>
                      <div style={{
                        fontSize: '1.5rem',
                        fontWeight: '800',
                        color: 'var(--accent)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}>
                        <MdAttachMoney style={{ fontSize: '1.2rem' }} />
                        {formatPrice(property.price)}
                        <span style={{ fontSize: '0.9rem', fontWeight: '400', color: 'var(--text-muted)' }}>
                          /mes
                        </span>
                      </div>
                    </div>
                    <button
                      className="btn-primary"
                      style={{ padding: '0.75rem 1.5rem', fontSize: '0.9rem' }}
                      onClick={() => {
                        // Aquí iría la navegación a la vista de detalle
                        console.log('Ver detalles de propiedad:', property.id);
                      }}
                    >
                      Ver Detalles
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Botón para agregar más favoritos */}
        {favorites.length > 0 && (
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/" className="btn-primary" style={{ display: 'inline-block' }}>
              Explorar Más Propiedades
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Favorites;
