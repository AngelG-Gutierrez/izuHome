// src/components/PropertyCard.jsx - VERSIÓN CORREGIDA COMPLETA
import React from 'react';
import { Link } from 'react-router-dom';
import { FaBed, FaBath, FaRulerCombined, FaStar, FaHeart } from 'react-icons/fa';
import { MdLocationOn, MdApartment, MdHouse, MdMeetingRoom } from 'react-icons/md';
import '../styles/PropertyCard.css';

const PropertyCard = ({ property, onToggleFavorite }) => {
  const getPropertyTypeIcon = (type) => {
    switch(type) {
      case 'casa': return <MdHouse className="property-type-icon" />;
      case 'departamento': return <MdApartment className="property-type-icon" />;
      case 'cuarto': return <MdMeetingRoom className="property-type-icon" />;
      default: return <MdHouse className="property-type-icon" />;
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

  const getPropertyTypeColor = (type) => {
    switch(type) {
      case 'casa': return '#5C3E94';
      case 'departamento': return '#E9B3FB';
      case 'cuarto': return '#BBE0EF';
      default: return '#5C3E94';
    }
  };

  // Función para crear URL segura para fallback de imagen
  const createFallbackImageUrl = (title) => {
    return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23FCF6D9'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='20' fill='%235C3E94' text-anchor='middle'%3EIzuHome%3C/text%3E%3Ctext x='200' y='180' font-family='Arial' font-size='14' fill='%235C3E94' text-anchor='middle'%3E${encodeURIComponent(title.substring(0, 30))}%3C/text%3E%3C/svg%3E`;
  };

  // Manejar error en imagen
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = createFallbackImageUrl(property.title);
  };

  return (
    <div className="property-card" style={{ borderColor: getPropertyTypeColor(property.type) }}>
      <div className="property-image-container">
        <img 
          src={property.image} 
          alt={property.title} 
          className="property-image"
          onError={handleImageError}
          loading="lazy"
        />
        
        <div className="property-overlay">
          <div className="property-badges">
            <span 
              className="property-type-badge"
              style={{ backgroundColor: getPropertyTypeColor(property.type) }}
            >
              {getPropertyTypeIcon(property.type)}
              <span className="type-label" title={getPropertyTypeLabel(property.type)}>
                {getPropertyTypeLabel(property.type)}
              </span>
            </span>
            
            <button 
              className={`favorite-btn ${property.isFavorite ? 'active' : ''}`}
              onClick={onToggleFavorite}
              aria-label={property.isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
              title={property.isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
            >
              <FaHeart className="favorite-icon" />
            </button>
          </div>
          
          <div className="property-price-tag" title={`$${property.price.toLocaleString()} por mes`}>
            <span className="price-currency">$</span>
            <span className="price-amount">{property.price.toLocaleString()}</span>
            <span className="price-period">/mes</span>
          </div>
        </div>
      </div>
      
      <div className="property-content">
        <div className="property-header">
          <h3 className="property-title" title={property.title}>{property.title}</h3>
          
          <div className="property-rating" title={`Calificación: ${property.rating}/5`}>
            <FaStar className="rating-icon" />
            <span className="rating-value">{property.rating}</span>
          </div>
        </div>
        
        <div className="property-location">
          <MdLocationOn className="location-icon" />
          <span className="location-text" title={property.location}>
            {property.location.length > 40 ? property.location.substring(0, 40) + '...' : property.location}
          </span>
        </div>
        
        <p className="property-description" title={property.description}>
          {property.description.length > 80 ? property.description.substring(0, 80) + '...' : property.description}
        </p>
        
        <div className="property-features">
          <div className="feature" title={`${property.bedrooms} habitaciones`}>
            <div className="feature-icon-wrapper">
              <FaBed className="feature-icon" />
            </div>
            <div className="feature-info">
              <span className="feature-value">{property.bedrooms}</span>
              <span className="feature-label">Hab.</span>
            </div>
          </div>
          
          <div className="feature" title={`${property.bathrooms} baños`}>
            <div className="feature-icon-wrapper">
              <FaBath className="feature-icon" />
            </div>
            <div className="feature-info">
              <span className="feature-value">{property.bathrooms}</span>
              <span className="feature-label">Baños</span>
            </div>
          </div>
          
          <div className="feature" title={`Área: ${property.area}`}>
            <div className="feature-icon-wrapper">
              <FaRulerCombined className="feature-icon" />
            </div>
            <div className="feature-info">
              <span className="feature-value">{property.area}</span>
              <span className="feature-label">Área</span>
            </div>
          </div>
        </div>
        
        <div className="property-services">
          <div className="services-tags">
            {property.services.slice(0, 2).map((service, index) => (
              <span key={index} className="service-tag" title={service}>
                {service.length > 12 ? service.substring(0, 10) + '...' : service}
              </span>
            ))}
            {property.services.length > 2 && (
              <span className="service-tag more-tag" title={`${property.services.length - 2} servicios más`}>
                +{property.services.length - 2}
              </span>
            )}
          </div>
        </div>
        
        <div className="property-actions">
          {/* CAMBIADO: Quitado el state que causa problemas */}
          <Link 
            to={`/propiedad/${property.id}`}
            className="view-details-btn"
            title="Ver todos los detalles de esta propiedad"
          >
            Ver Detalles
          </Link>
          
          <button 
            className="contact-owner-btn"
            title="Contactar al propietario de esta propiedad"
            onClick={() => alert(`Contactando al propietario de: ${property.title}`)}
          >
            Contactar
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;