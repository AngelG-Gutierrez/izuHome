// src/pages/PropertyDetail.jsx - VERSIÓN CORREGIDA
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { FaBed, FaBath, FaRulerCombined, FaStar, FaCheck, FaMapMarkerAlt, FaPhone, FaEnvelope, FaCalendarAlt } from 'react-icons/fa';
import { MdArrowBack, MdApartment, MdHouse, MdMeetingRoom, MdShare, MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { GiHomeGarage } from 'react-icons/gi';
import '../styles/PropertyDetail.css';

const PropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  // Intentar obtener la propiedad del state primero
  useEffect(() => {
    if (location.state?.property) {
      setProperty(location.state.property);
      setIsFavorite(location.state.property.isFavorite || false);
      setLoading(false);
    } else {
      // Si no viene del state, cargar de datos locales
      loadPropertyFromLocal();
    }
  }, [id, location]);

  const loadPropertyFromLocal = () => {
    // Datos de ejemplo locales (deberían coincidir con los de SearchResults)
    const localProperties = [
      {
        id: 1,
        title: "Casa Colonial en Centro Histórico",
        description: "Hermosa casa colonial restaurada con 3 habitaciones, patio central con fuente, cocina equipada, ideal para familia. A dos cuadras del zócalo principal. La propiedad cuenta con acabados de calidad, pisos de madera y techos altos. Perfecta para familias que buscan comodidad y tradición.",
        price: 4500,
        location: "Centro Histórico, Izúcar de Matamoros",
        bedrooms: 3,
        bathrooms: 2,
        area: "150 m²",
        image: require('../assets/casa1.jpg'),
        images: [
          require('../assets/casa1.jpg'),
          'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80',
          'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80'
        ],
        type: "casa",
        coordinates: { lat: 18.6034, lng: -98.4620 },
        services: ["Agua 24/7", "Internet", "Estacionamiento", "Patio", "Cocina", "Luz", "Gas"],
        amenities: ["Patio central", "Cocina equipada", "Área de lavado", "Jardín", "Terraza"],
        rating: 4.8,
        owner: {
          name: "María González",
          phone: "222 123 4567",
          email: "maria.gonzalez@email.com",
          verified: true,
          memberSince: "2020"
        },
        rules: [
          "No se permiten mascotas",
          "Horario de silencio: 10pm - 7am",
          "Depósito de seguridad: $4,500",
          "Contrato mínimo: 1 año",
          "Prohibido fumar dentro de la propiedad"
        ],
        nearby: ["Zócalo (2 cuadras)", "Mercado (3 cuadras)", "Parque central (5 min)", "Hospital (10 min)"]
      },
      // ... agregar más propiedades según sea necesario
    ];

    const foundProperty = localProperties.find(p => p.id === parseInt(id));
    
    setTimeout(() => {
      if (foundProperty) {
        setProperty(foundProperty);
        setIsFavorite(foundProperty.isFavorite || false);
      }
      setLoading(false);
    }, 500);
  };

  const getPropertyTypeIcon = (type) => {
    switch(type) {
      case 'casa': return <MdHouse className="detail-type-icon" />;
      case 'departamento': return <MdApartment className="detail-type-icon" />;
      case 'cuarto': return <MdMeetingRoom className="detail-type-icon" />;
      default: return <MdHouse className="detail-type-icon" />;
    }
  };

  const getPropertyTypeLabel = (type) => {
    switch(type) {
      case 'casa': return 'Casa';
      case 'departamento': return 'Departamento';
      case 'cuarto': return 'Cuarto';
      default: return 'Propiedad';
    }
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleContact = () => {
    alert(`Contactando a ${property.owner.name}\nTeléfono: ${property.owner.phone}\nEmail: ${property.owner.email}`);
  };

  const handleScheduleVisit = () => {
    alert('Funcionalidad para agendar visita - En desarrollo');
  };

  if (loading) {
    return (
      <div className="property-detail-loading">
        <div className="loading-spinner"></div>
        <p>Cargando detalles de la propiedad...</p>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="property-detail-not-found">
        <h2>Propiedad no encontrada</h2>
        <p>La propiedad que buscas no existe o ha sido removida.</p>
        <button onClick={() => navigate('/buscar')} className="back-to-search-btn">
          <MdArrowBack /> Volver a la búsqueda
        </button>
      </div>
    );
  }

  return (
    <div className="property-detail-container">
      {/* Header */}
      <div className="property-detail-header">
        <button onClick={() => navigate('/buscar')} className="back-button">
          <MdArrowBack /> Volver a resultados
        </button>
        
        <div className="header-actions">
          <button className="share-button" title="Compartir propiedad">
            <MdShare />
          </button>
          <button 
            className={`favorite-button ${isFavorite ? 'active' : ''}`}
            onClick={toggleFavorite}
            title={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
          >
            {isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
          </button>
        </div>
      </div>

      {/* Galería de imágenes - USA LA MISMA IMAGEN PRINCIPAL */}
      <div className="property-gallery">
        <div className="main-image">
          <img 
            src={property.image} 
            alt={property.title}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='500' viewBox='0 0 800 500'%3E%3Crect width='800' height='500' fill='%23FCF6D9'/%3E%3Ctext x='400' y='250' font-family='Arial' font-size='32' fill='%235C3E94' text-anchor='middle'%3E${encodeURIComponent(property.title)}%3C/text%3E%3C/svg%3E`;
            }}
          />
        </div>
        
        {property.images && property.images.length > 1 && (
          <div className="thumbnail-gallery">
            {property.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Vista ${index + 1} de ${property.title}`}
                className={activeImage === index ? 'active' : ''}
                onClick={() => setActiveImage(index)}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='70' viewBox='0 0 100 70'%3E%3Crect width='100' height='70' fill='%23${index % 2 === 0 ? 'E9B3FB' : 'BBE0EF'}'/%3E%3Ctext x='50' y='35' font-family='Arial' font-size='10' fill='%235C3E94' text-anchor='middle'%3EVista ${index + 1}%3C/text%3E%3C/svg%3E`;
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Contenido principal */}
      <div className="property-detail-content">
        <div className="main-info">
          {/* Título y ubicación */}
          <div className="property-header">
            <div className="property-type-tag">
              {getPropertyTypeIcon(property.type)}
              <span>{getPropertyTypeLabel(property.type)}</span>
            </div>
            
            <h1 className="property-title">{property.title}</h1>
            
            <div className="property-location">
              <FaMapMarkerAlt className="location-icon" />
              <span>{property.location}</span>
            </div>
          </div>

          {/* Precio */}
          <div className="price-section">
            <div className="price-display">
              <span className="price-amount">${property.price.toLocaleString()}</span>
              <span className="price-period"> / mes</span>
            </div>
            
            <div className="property-rating">
              <FaStar className="rating-icon" />
              <span className="rating-value">{property.rating}</span>
              <span className="rating-max">/5.0</span>
              <span className="rating-label"> ({property.rating >= 4.5 ? 'Excelente' : 'Bueno'})</span>
            </div>
          </div>

          {/* Características principales */}
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <FaBed />
              </div>
              <div className="feature-info">
                <strong>{property.bedrooms}</strong>
                <span>Habitaciones</span>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FaBath />
              </div>
              <div className="feature-info">
                <strong>{property.bathrooms}</strong>
                <span>Baños</span>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FaRulerCombined />
              </div>
              <div className="feature-info">
                <strong>{property.area}</strong>
                <span>Área total</span>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <GiHomeGarage />
              </div>
              <div className="feature-info">
                <strong>{property.services.includes('Estacionamiento') ? 'Sí' : 'No'}</strong>
                <span>Estacionamiento</span>
              </div>
            </div>
          </div>

          {/* Descripción completa */}
          <div className="description-section">
            <h2>Descripción</h2>
            <p>{property.description}</p>
          </div>

          {/* Servicios incluidos */}
          <div className="services-section">
            <h2>Servicios Incluidos</h2>
            <div className="services-list">
              {property.services.map((service, index) => (
                <div key={index} className="service-item">
                  <FaCheck className="service-check" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Amenidades */}
          {property.amenities && (
            <div className="amenities-section">
              <h2>Comodidades</h2>
              <div className="amenities-grid">
                {property.amenities.map((amenity, index) => (
                  <span key={index} className="amenity-tag">{amenity}</span>
                ))}
              </div>
            </div>
          )}

          {/* Reglas */}
          <div className="rules-section">
            <h2>Reglas de la Propiedad</h2>
            <ul className="rules-list">
              {property.rules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>
          </div>

          {/* Ubicación cercana */}
          {property.nearby && (
            <div className="nearby-section">
              <h2>Cerca de aquí</h2>
              <div className="nearby-list">
                {property.nearby.map((place, index) => (
                  <div key={index} className="nearby-item">
                    <FaMapMarkerAlt className="nearby-icon" />
                    <span>{place}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="property-sidebar">
          {/* Información del propietario */}
          <div className="owner-card">
            <h3>Propietario</h3>
            <div className="owner-info">
              <div className="owner-header">
                <div className="owner-avatar">
                  {property.owner.name.charAt(0)}
                </div>
                <div className="owner-details">
                  <strong>{property.owner.name}</strong>
                  {property.owner.verified && (
                    <span className="verified-badge">✓ Verificado</span>
                  )}
                  <span className="owner-member">Miembro desde {property.owner.memberSince}</span>
                </div>
              </div>
              
              <div className="owner-contact">
                <div className="contact-item">
                  <FaPhone className="contact-icon" />
                  <span>{property.owner.phone}</span>
                </div>
                <div className="contact-item">
                  <FaEnvelope className="contact-icon" />
                  <span>{property.owner.email}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="action-buttons">
            <button onClick={handleContact} className="contact-button primary">
              <FaPhone /> Contactar Propietario
            </button>
            <button onClick={handleScheduleVisit} className="contact-button secondary">
              <FaCalendarAlt /> Agendar Visita
            </button>
          </div>

          {/* Mapa de ubicación */}
          <div className="map-section">
            <h3>Ubicación Aproximada</h3>
            <div className="map-container">
              <iframe
                title="Ubicación en mapa"
                width="100%"
                height="200"
                frameBorder="0"
                scrolling="no"
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${property.coordinates.lng-0.005}%2C${property.coordinates.lat-0.003}%2C${property.coordinates.lng+0.005}%2C${property.coordinates.lat+0.003}&layer=mapnik&marker=${property.coordinates.lat}%2C${property.coordinates.lng}`}
                className="location-map"
              />
              <div className="map-overlay">
                <FaMapMarkerAlt className="map-marker" />
              </div>
            </div>
            <p className="location-note">
              <small>La ubicación exacta se comparte después del contacto con el propietario.</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;