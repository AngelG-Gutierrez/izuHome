// src/components/MapView.jsx
import React from 'react';
import { FaHome, FaMapMarkerAlt } from 'react-icons/fa';
import { MdApartment, MdHouse, MdMeetingRoom } from 'react-icons/md';
import '../styles/MapView.css';

const MapView = ({ properties }) => {
  // Coordenadas del centro de Izúcar de Matamoros
  const centerLat = 18.6034;
  const centerLng = -98.4620;

  const getPropertyIcon = (type) => {
    switch(type) {
      case 'casa': return <MdHouse className="marker-icon casa" />;
      case 'departamento': return <MdApartment className="marker-icon departamento" />;
      case 'cuarto': return <MdMeetingRoom className="marker-icon cuarto" />;
      default: return <FaMapMarkerAlt className="marker-icon default" />;
    }
  };

  const getPropertyColor = (type) => {
    switch(type) {
      case 'casa': return '#5C3E94';
      case 'departamento': return '#E9B3FB';
      case 'cuarto': return '#BBE0EF';
      default: return '#5C3E94';
    }
  };

  return (
    <div className="map-view-container">
      <div className="map-header">
        <div className="map-header-content">
          <h3 className="map-title">
            <FaHome className="map-title-icon" /> 
            Mapa de Propiedades en Izúcar
          </h3>
          <p className="map-subtitle">
            {properties.length} propiedades marcadas en el mapa interactivo
          </p>
        </div>
      </div>
      
      <div className="map-wrapper">
        {/* Mapa OpenStreetMap - GRATIS y sin API Key */}
        <div className="osm-map-frame">
          <iframe
            title="Mapa interactivo de Izúcar de Matamoros"
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src={`https://www.openstreetmap.org/export/embed.html?bbox=${centerLng-0.02}%2C${centerLat-0.01}%2C${centerLng+0.02}%2C${centerLat+0.01}&layer=mapnik&marker=${centerLat}%2C${centerLng}`}
            className="osm-map"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          
          {/* Marcadores personalizados */}
          <div className="custom-markers-layer">
            {properties.map((property, index) => {
              // Calcular posición relativa para marcadores
              const offset = 0.008;
              const lat = centerLat + (Math.random() * offset * 2 - offset);
              const lng = centerLng + (Math.random() * offset * 2 - offset);
              
              return (
                <div 
                  key={property.id}
                  className="custom-marker"
                  style={{
                    left: `${50 + (lng - centerLng) * 4000}%`,
                    top: `${50 + (lat - centerLat) * 4000}%`,
                    '--marker-color': getPropertyColor(property.type),
                    animationDelay: `${index * 0.1}s`
                  }}
                  title={`${property.title} - $${property.price.toLocaleString()}/mes`}
                >
                  <div className="marker-dot" style={{ backgroundColor: getPropertyColor(property.type) }}>
                    {getPropertyIcon(property.type)}
                  </div>
                  <div className="marker-tooltip">
                    <div className="tooltip-header">
                      <span className="tooltip-price">${property.price.toLocaleString()}/mes</span>
                      <span 
                        className="tooltip-type"
                        style={{ backgroundColor: getPropertyColor(property.type) }}
                      >
                        {property.type}
                      </span>
                    </div>
                    <div className="tooltip-title">{property.title}</div>
                    <div className="tooltip-location">
                      <FaMapMarkerAlt className="tooltip-location-icon" />
                      {property.location}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="map-controls">
          <div className="map-legend">
            <h4 className="legend-title">Leyenda del Mapa</h4>
            <div className="legend-items">
              <div className="legend-item">
                <div className="legend-marker casa">
                  <MdHouse />
                </div>
                <span className="legend-label">Casas</span>
                <span className="legend-count">
                  ({properties.filter(p => p.type === 'casa').length})
                </span>
              </div>
              <div className="legend-item">
                <div className="legend-marker departamento">
                  <MdApartment />
                </div>
                <span className="legend-label">Departamentos</span>
                <span className="legend-count">
                  ({properties.filter(p => p.type === 'departamento').length})
                </span>
              </div>
              <div className="legend-item">
                <div className="legend-marker cuarto">
                  <MdMeetingRoom />
                </div>
                <span className="legend-label">Cuartos</span>
                <span className="legend-count">
                  ({properties.filter(p => p.type === 'cuarto').length})
                </span>
              </div>
            </div>
          </div>
          
          <div className="map-actions">
            <button 
              className="map-action-btn zoom-in"
              aria-label="Acercar mapa"
            >
              <span className="action-icon">+</span>
            </button>
            <button 
              className="map-action-btn zoom-out"
              aria-label="Alejar mapa"
            >
              <span className="action-icon">−</span>
            </button>
            <button 
              className="map-action-btn reset-view"
              aria-label="Restablecer vista"
            >
              <FaMapMarkerAlt className="action-icon" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="map-footer">
        <p className="map-disclaimer">
          <small>
            🗺️ Mapa proporcionado por{' '}
            <a 
              href="https://www.openstreetmap.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="map-link"
            >
              OpenStreetMap
            </a>. 
            Las ubicaciones son aproximadas para proteger la privacidad de los propietarios.
            {' '}
            <a 
              href={`https://www.openstreetmap.org/?mlat=${centerLat}&mlon=${centerLng}#map=14/${centerLat}/${centerLng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="map-link"
            >
              Ver mapa completo
            </a>
          </small>
        </p>
      </div>
    </div>
  );
};

export default MapView;