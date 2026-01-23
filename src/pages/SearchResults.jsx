// src/pages/SearchResults.jsx - VERSIÓN CORREGIDA
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import MapView from '../components/MapView';
import { FaFilter, FaList, FaMapMarkerAlt, FaSortAmountDown, FaSearch, FaTimes, FaHeart } from 'react-icons/fa';
import { MdMap, MdApartment, MdHouse, MdMeetingRoom } from 'react-icons/md';
import '../styles/SearchResults.css';

// CORREGIDO: Rutas de imágenes desde assets/ (no desde subcarpetas)
import casa1 from '../assets/casa1.jpg';
import casa2 from '../assets/casa2.jpeg';
import casa3 from '../assets/casa3.webp';
import depto1 from '../assets/departamento1.webp';
import depto2 from '../assets/departamento2.webp'; // CORREGIDO: nombre
import depto3 from '../assets/departamento3.webp';
import cuarto1 from '../assets/cuarto1.webp';
import cuarto2 from '../assets/cuarto2.jpg';
import cuarto3 from '../assets/cuarto3.webp';

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [viewMode, setViewMode] = useState('list');
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('relevance');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Estados para filtros
  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    propertyType: '',
    location: '',
    services: []
  });

  // Datos REALES de propiedades en Izúcar de Matamoros
  const sampleProperties = [
    // CASAS
    {
      id: 1,
      title: "Casa Colonial en Centro Histórico",
      description: "Hermosa casa colonial restaurada con 3 habitaciones, patio central con fuente, cocina equipada, ideal para familia. A dos cuadras del zócalo principal.",
      price: 4500,
      location: "Centro Histórico, Izúcar de Matamoros",
      bedrooms: 3,
      bathrooms: 2,
      area: "150 m²",
      image: casa1,
      type: "casa",
      coordinates: { lat: 18.6034, lng: -98.4620 },
      services: ["Agua 24/7", "Internet", "Estacionamiento", "Patio", "Cocina"],
      rating: 4.8,
      isFavorite: false
    },
    {
      id: 2,
      title: "Casa Moderna cerca de UTIM",
      description: "Casa nueva a 5 minutos caminando de UTIM, 4 habitaciones, jardín, cocina integral, closets. Perfecta para estudiantes o familia.",
      price: 3800,
      location: "Col. San Bernardino, Izúcar",
      bedrooms: 4,
      bathrooms: 3,
      area: "180 m²",
      image: casa2,
      type: "casa",
      coordinates: { lat: 18.6050, lng: -98.4600 },
      services: ["Agua 24/7", "Internet", "Estacionamiento", "Jardín", "Cocina integral"],
      rating: 4.5,
      isFavorite: true
    },
    {
      id: 3,
      title: "Casa Económica en Santa Cruz",
      description: "Casa amplia con posibilidad de dividir, 2 habitaciones, patio trasero, cerca de mercados y transporte público.",
      price: 2800,
      location: "Col. Santa Cruz, Izúcar",
      bedrooms: 2,
      bathrooms: 1,
      area: "100 m²",
      image: casa3,
      type: "casa",
      coordinates: { lat: 18.6000, lng: -98.4650 },
      services: ["Agua", "Patio", "Cocina"],
      rating: 4.2,
      isFavorite: false
    },
    
    // DEPARTAMENTOS
    {
      id: 4,
      title: "Departamento de Lujo en Centro",
      description: "Departamento completamente amueblado con vista panorámica, seguridad 24/7, todos los amenities incluidos.",
      price: 3500,
      location: "Centro, Izúcar de Matamoros",
      bedrooms: 2,
      bathrooms: 2,
      area: "85 m²",
      image: depto1,
      type: "departamento",
      coordinates: { lat: 18.6025, lng: -98.4615 },
      services: ["Agua 24/7", "Internet", "Seguridad", "Gimnasio", "Área de lavado"],
      rating: 4.9,
      isFavorite: true
    },
    {
      id: 5,
      title: "Departamento para Estudiante UTIM",
      description: "A 5 minutos caminando de UTIM, completamente amueblado, internet rápido incluido, áreas comunes limpias.",
      price: 2200,
      location: "Cerca UTIM, Izúcar",
      bedrooms: 1,
      bathrooms: 1,
      area: "45 m²",
      image: depto2, // CORREGIDO: usa depto2
      type: "departamento",
      coordinates: { lat: 18.6070, lng: -98.4580 },
      services: ["Internet", "Agua", "Luz", "Muebles"],
      rating: 4.3,
      isFavorite: false
    },
    {
      id: 6,
      title: "Departamento Familiar San Miguel",
      description: "Departamento espacioso con 3 habitaciones, cochera, cerca de escuelas y parques para niños.",
      price: 3200,
      location: "Col. San Miguel, Izúcar",
      bedrooms: 3,
      bathrooms: 2,
      area: "95 m²",
      image: depto3,
      type: "departamento",
      coordinates: { lat: 18.6040, lng: -98.4630 },
      services: ["Estacionamiento", "Agua", "Internet", "Áreas verdes"],
      rating: 4.6,
      isFavorite: false
    },
    
    // CUARTOS
    {
      id: 7,
      title: "Cuarto para Estudiante UTIM",
      description: "Cuarto amplio en casa familiar, internet incluido, cocina y baño compartido, servicio de lavandería.",
      price: 1200,
      location: "San Bernardino, Izúcar",
      bedrooms: 1,
      bathrooms: 1,
      area: "25 m²",
      image: cuarto1,
      type: "cuarto",
      coordinates: { lat: 18.6065, lng: -98.4590 },
      services: ["Internet", "Agua", "Luz", "Cocina", "Lavandería"],
      rating: 4.4,
      isFavorite: false
    },
    {
      id: 8,
      title: "Cuarto con Baño Privado",
      description: "Cuarto independiente con baño privado, entrada propia, ideal para trabajador o estudiante responsable.",
      price: 1500,
      location: "Centro, Izúcar",
      bedrooms: 1,
      bathrooms: 1,
      area: "30 m²",
      image: cuarto2,
      type: "cuarto",
      coordinates: { lat: 18.6030, lng: -98.4625 },
      services: ["Baño privado", "Internet", "Agua", "Entrada independiente"],
      rating: 4.7,
      isFavorite: true
    },
    {
      id: 9,
      title: "Cuarto Económico en Vecindad",
      description: "Cuarto básico pero cómodo en vecindad tradicional, cocina compartida, cerca del mercado principal.",
      price: 800,
      location: "Barrio de Santiago, Izúcar",
      bedrooms: 1,
      bathrooms: 1,
      area: "20 m²",
      image: cuarto3,
      type: "cuarto",
      coordinates: { lat: 18.6015, lng: -98.4640 },
      services: ["Agua", "Cocina compartida", "Patio"],
      rating: 4.0,
      isFavorite: false
    }
  ];

  useEffect(() => {
    // Simular carga de datos
    setTimeout(() => {
      setProperties(sampleProperties);
      setFilteredProperties(sampleProperties);
      setLoading(false);
    }, 800);
  }, [location]);

  useEffect(() => {
    // Aplicar búsqueda por texto
    if (searchQuery.trim() === '') {
      setFilteredProperties(properties);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = properties.filter(property =>
        property.title.toLowerCase().includes(query) ||
        property.description.toLowerCase().includes(query) ||
        property.location.toLowerCase().includes(query) ||
        property.type.toLowerCase().includes(query)
      );
      setFilteredProperties(filtered);
    }
  }, [searchQuery, properties]);

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFilters(prev => ({
        ...prev,
        services: checked 
          ? [...prev.services, value]
          : prev.services.filter(s => s !== value)
      }));
    } else {
      setFilters({
        ...filters,
        [name]: value
      });
    }
  };

  const applyFilters = () => {
    let filtered = [...properties];
    
    // Filtrar por tipo
    if (filters.propertyType) {
      filtered = filtered.filter(p => p.type === filters.propertyType);
    }
    
    // Filtrar por ubicación
    if (filters.location) {
      filtered = filtered.filter(p => 
        p.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }
    
    // Filtrar por precio mínimo
    if (filters.minPrice) {
      filtered = filtered.filter(p => p.price >= parseInt(filters.minPrice));
    }
    
    // Filtrar por precio máximo
    if (filters.maxPrice) {
      filtered = filtered.filter(p => p.price <= parseInt(filters.maxPrice));
    }
    
    // Filtrar por habitaciones
    if (filters.bedrooms) {
      filtered = filtered.filter(p => p.bedrooms >= parseInt(filters.bedrooms));
    }
    
    // Filtrar por servicios
    if (filters.services.length > 0) {
      filtered = filtered.filter(p =>
        filters.services.every(service => p.services.includes(service))
      );
    }
    
    setFilteredProperties(filtered);
    setShowFilters(false);
  };

  const clearFilters = () => {
    setFilters({
      minPrice: '',
      maxPrice: '',
      bedrooms: '',
      propertyType: '',
      location: '',
      services: []
    });
    setSearchQuery('');
    setFilteredProperties(sampleProperties);
    setShowFilters(false);
  };

  const handleSortChange = (sortType) => {
    setSortBy(sortType);
    let sorted = [...filteredProperties];
    
    switch(sortType) {
      case 'price-asc':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case 'bedrooms':
        sorted.sort((a, b) => b.bedrooms - a.bedrooms);
        break;
      default:
        sorted = [...properties];
    }
    
    setFilteredProperties(sorted);
  };

  const getPropertyTypeCount = (type) => {
    return filteredProperties.filter(p => p.type === type).length;
  };

  const toggleFavorite = (id) => {
    const updatedProperties = properties.map(property =>
      property.id === id ? { ...property, isFavorite: !property.isFavorite } : property
    );
    setProperties(updatedProperties);
    
    const updatedFiltered = filteredProperties.map(property =>
      property.id === id ? { ...property, isFavorite: !property.isFavorite } : property
    );
    setFilteredProperties(updatedFiltered);
  };

  const totalProperties = filteredProperties.length;
  const minPrice = totalProperties > 0 ? Math.min(...filteredProperties.map(p => p.price)) : 0;
  const maxPrice = totalProperties > 0 ? Math.max(...filteredProperties.map(p => p.price)) : 0;
  const avgPrice = totalProperties > 0 ? Math.round(filteredProperties.reduce((sum, p) => sum + p.price, 0) / totalProperties) : 0;

  return (
    <div className="search-results-page">
      {/* Header Principal - Ocupa toda la parte superior */}
      <div className="search-header">
        <div className="header-top">
          <button className="logo-btn" onClick={() => navigate('/')}>
            <MdHouse className="logo-icon" />
            <span className="logo-text">IzuHome</span>
          </button>
          
          <div className="header-search">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Buscar propiedades por nombre, ubicación o tipo..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            {searchQuery && (
              <button className="clear-search" onClick={() => setSearchQuery('')}>
                <FaTimes />
              </button>
            )}
          </div>
          
          <button 
            className={`filter-toggle-btn ${showFilters ? 'active' : ''}`}
            onClick={() => setShowFilters(!showFilters)}
          >
            <FaFilter className="filter-icon" />
            <span className="filter-text">Filtros</span>
          </button>
        </div>
        
        <div className="header-bottom">
          <h1 className="page-title">
            <FaMapMarkerAlt className="title-icon" />
            <span className="title-text">Propiedades en Izúcar de Matamoros</span>
          </h1>
          <p className="page-subtitle">
            {totalProperties} {totalProperties === 1 ? 'propiedad encontrada' : 'propiedades encontradas'} 
            para ti en la Perla de la Mixteca
          </p>
        </div>
      </div>

      {/* Contenedor Principal - Ocupa toda la pantalla */}
      <div className="main-container">
        {/* Filtros Sidebar */}
        <div className={`filters-sidebar ${showFilters ? 'visible' : ''}`}>
          <div className="filters-header">
            <h3><FaFilter className="filter-header-icon" /> Filtros Avanzados</h3>
            <button className="close-filters" onClick={() => setShowFilters(false)}>
              <FaTimes />
            </button>
          </div>
          
          <div className="filters-content">
            <div className="filter-section">
              <h4 className="filter-section-title">Tipo de Propiedad</h4>
              <div className="property-type-filters">
                <button 
                  className={`type-filter-btn ${filters.propertyType === 'casa' ? 'active' : ''}`}
                  onClick={() => setFilters({...filters, propertyType: filters.propertyType === 'casa' ? '' : 'casa'})}
                >
                  <MdHouse className="type-icon" />
                  <span className="type-text">Casas</span>
                  <span className="type-count">({getPropertyTypeCount('casa')})</span>
                </button>
                <button 
                  className={`type-filter-btn ${filters.propertyType === 'departamento' ? 'active' : ''}`}
                  onClick={() => setFilters({...filters, propertyType: filters.propertyType === 'departamento' ? '' : 'departamento'})}
                >
                  <MdApartment className="type-icon" />
                  <span className="type-text">Departamentos</span>
                  <span className="type-count">({getPropertyTypeCount('departamento')})</span>
                </button>
                <button 
                  className={`type-filter-btn ${filters.propertyType === 'cuarto' ? 'active' : ''}`}
                  onClick={() => setFilters({...filters, propertyType: filters.propertyType === 'cuarto' ? '' : 'cuarto'})}
                >
                  <MdMeetingRoom className="type-icon" />
                  <span className="type-text">Cuartos</span>
                  <span className="type-count">({getPropertyTypeCount('cuarto')})</span>
                </button>
              </div>
            </div>

            <div className="filter-section">
              <h4 className="filter-section-title">Rango de Precio</h4>
              <div className="price-range">
                <div className="price-input-group">
                  <label>Mínimo (MXN)</label>
                  <div className="price-input-wrapper">
                    <span className="price-prefix">$</span>
                    <input
                      type="number"
                      name="minPrice"
                      value={filters.minPrice}
                      onChange={handleFilterChange}
                      placeholder="0"
                      className="price-input"
                    />
                  </div>
                </div>
                <div className="price-separator">-</div>
                <div className="price-input-group">
                  <label>Máximo (MXN)</label>
                  <div className="price-input-wrapper">
                    <span className="price-prefix">$</span>
                    <input
                      type="number"
                      name="maxPrice"
                      value={filters.maxPrice}
                      onChange={handleFilterChange}
                      placeholder="10000"
                      className="price-input"
                    />
                  </div>
                </div>
              </div>
              <div className="price-slider-labels">
                <span>$0</span>
                <span>$5,000</span>
                <span>$10,000+</span>
              </div>
            </div>

            <div className="filter-section">
              <h4 className="filter-section-title">Habitaciones</h4>
              <div className="bedroom-filters">
                {[1, 2, 3, 4].map(num => (
                  <button
                    key={num}
                    className={`bedroom-filter-btn ${filters.bedrooms === num.toString() ? 'active' : ''}`}
                    onClick={() => setFilters({...filters, bedrooms: filters.bedrooms === num.toString() ? '' : num.toString()})}
                  >
                    {num}+
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-section">
              <h4 className="filter-section-title">Ubicación</h4>
              <div className="location-select-wrapper">
                <select 
                  name="location" 
                  value={filters.location} 
                  onChange={handleFilterChange}
                  className="location-select"
                >
                  <option value="">Todas las zonas</option>
                  <option value="centro">Centro Histórico</option>
                  <option value="san bernardino">San Bernardino (UTIM)</option>
                  <option value="santa cruz">Santa Cruz</option>
                  <option value="san miguel">San Miguel</option>
                  <option value="santiago">Barrio de Santiago</option>
                  <option value="el calvario">El Calvario</option>
                </select>
              </div>
            </div>

            <div className="filter-section">
              <h4 className="filter-section-title">Servicios Incluidos</h4>
              <div className="services-filters">
                {['Internet', 'Agua 24/7', 'Estacionamiento', 'Cocina', 'Patio', 'Seguridad', 'Lavandería', 'Muebles'].map(service => (
                  <label key={service} className="service-filter-label">
                    <input
                      type="checkbox"
                      value={service}
                      checked={filters.services.includes(service)}
                      onChange={handleFilterChange}
                      className="service-checkbox"
                    />
                    <span className="service-checkmark"></span>
                    <span className="service-name">{service}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="filter-actions">
              <button className="apply-filters-btn" onClick={applyFilters}>
                <FaFilter className="apply-icon" />
                Aplicar Filtros
              </button>
              <button className="clear-all-btn" onClick={clearFilters}>
                <FaTimes className="clear-icon" />
                Limpiar Todo
              </button>
            </div>
          </div>
        </div>

        {/* Overlay para móviles cuando los filtros están abiertos */}
        {showFilters && <div className="filters-overlay" onClick={() => setShowFilters(false)}></div>}

        {/* Contenido Principal */}
        <div className="main-content">
          {/* Barra de controles */}
          <div className="controls-bar">
            <div className="results-info">
              <span className="results-count">
                {totalProperties} {totalProperties === 1 ? 'resultado' : 'resultados'}
              </span>
              <div className="price-stats">
                <span className="price-stat">Mín: ${minPrice}</span>
                <span className="price-stat">Prom: ${avgPrice}</span>
                <span className="price-stat">Máx: ${maxPrice}</span>
              </div>
            </div>
            
            <div className="view-controls">
              <div className="sort-control">
                <FaSortAmountDown className="sort-icon" />
                <select 
                  value={sortBy} 
                  onChange={(e) => handleSortChange(e.target.value)}
                  className="sort-select"
                >
                  <option value="relevance">Ordenar por: Relevancia</option>
                  <option value="price-asc">Precio: Menor a Mayor</option>
                  <option value="price-desc">Precio: Mayor a Menor</option>
                  <option value="rating">Mejor Calificadas</option>
                  <option value="bedrooms">Más Habitaciones</option>
                  <option value="newest">Más Recientes</option>
                </select>
              </div>
              
              <div className="view-toggle">
                <button
                  className={`view-toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
                  onClick={() => setViewMode('list')}
                >
                  <FaList className="view-icon" />
                  <span className="view-text">Lista</span>
                </button>
                <button
                  className={`view-toggle-btn ${viewMode === 'map' ? 'active' : ''}`}
                  onClick={() => setViewMode('map')}
                >
                  <MdMap className="view-icon" />
                  <span className="view-text">Mapa</span>
                </button>
              </div>
            </div>
          </div>

          {/* Contenido de resultados */}
          {loading ? (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p className="loading-text">Buscando las mejores propiedades en Izúcar...</p>
            </div>
          ) : totalProperties === 0 ? (
            <div className="no-results-container">
              <div className="no-results-icon">🏠</div>
              <h3 className="no-results-title">No encontramos propiedades</h3>
              <p className="no-results-description">
                Intenta con criterios de búsqueda más amplios o ajusta los filtros
              </p>
              <button className="reset-search-btn" onClick={clearFilters}>
                <FaTimes className="reset-icon" />
                Limpiar búsqueda y filtros
              </button>
            </div>
          ) : viewMode === 'list' ? (
            <div className="properties-container">
              <div className="properties-grid">
                {filteredProperties.map(property => (
                  <PropertyCard 
                    key={property.id} 
                    property={property} 
                    onToggleFavorite={() => toggleFavorite(property.id)}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="map-container">
              <MapView properties={filteredProperties} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;