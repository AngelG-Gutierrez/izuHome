import { Link } from "react-router-dom";

function PropertyFormPage() {
  return (
    <div className="landing-container">
      {/* Navbar */}
      <nav>
        <h1 style={{ color: "#0f172a", fontSize: "1.5rem" }}>IzuHome</h1>
        <div>
          <Link to="/" className="btn-ghost">
            Inicio
          </Link>
        </div>
      </nav>

      {/* Encabezado */}
      <div className="hero-section">
        <h1 style={{ fontSize: "2.2rem" }}>
          Publicar propiedad en{" "}
          <span style={{ color: "#10b981" }}>IzuHome</span>
        </h1>
        <p style={{ fontSize: "1.1rem", maxWidth: "700px", margin: "0 auto" }}>
          Completa la información para que tu propiedad sea visible para
          estudiantes, trabajadores y familias de Izúcar de Matamoros.
        </p>
      </div>

      {/* Formulario */}
      <section style={{ background: "#f8fafc", padding: "3rem 1rem" }}>
        <form
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            background: "#ffffff",
            padding: "2rem",
            borderRadius: "12px",
            boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
            display: "grid",
            gap: "1.5rem",
          }}
        >
          {/* Información básica */}
          <h3 style={{ color: "#0f172a" }}>Información básica</h3>
          <label style={{ fontSize: "0.85rem", color: "#334155" }}>
            Título de la propiedad
          </label>
          <input placeholder="Ej-Departamento a 10 minutos del centro" />
          <textarea placeholder="Descripción detallada" rows={4} />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
            }}
          >
            <select>
              <option>Tipo de propiedad</option>
              <option>Casa</option>
              <option>Departamento</option>
              <option>Cuarto</option>
              <option>Estudio</option>
              <option>Vecindad</option>
            </select>

            <select>
              <option>Tipo de renta</option>
              <option>Completa</option>
              <option>Cuarto</option>
              <option>Espacio compartido</option>
            </select>
          </div>

          {/* Ubicación */}
          <h3 style={{ color: "#0f172a" }}>Ubicación</h3>
          <label style={{ fontSize: "0.85rem", color: "#334155" }}>
            Direccion:
          </label>
          <input placeholder="Calle..." />
          <input placeholder="Colonia" />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "1rem",
            }}
          >
            <input placeholder="Código postal" />
            <select>
              <option>Zona</option>
              <option>Centro</option>
              <option>Norte</option>
              <option>Sur</option>
              <option>Este</option>
              <option>Oeste</option>
              <option>Periferia</option>
            </select>
            <input placeholder="Metros cuadrados" type="number" />
          </div>

          {/* Características */}
          <h3 style={{ color: "#0f172a" }}>Características</h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "1rem",
            }}
          >
            <input type="number" placeholder="Habitaciones" />
            <input type="number" placeholder="Baños" />
            <select>
              <option>¿Amueblado?</option>
              <option>Sí</option>
              <option>No</option>
            </select>
          </div>

          {/* Servicios */}
          <div>
            <p style={{ fontSize: "0.9rem", color: "#64748b" }}>
              Servicios incluidos
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <label>
                <input type="checkbox" /> Agua
              </label>
              <label>
                <input type="checkbox" /> Luz
              </label>
              <label>
                <input type="checkbox" /> Internet
              </label>
              <label>
                <input type="checkbox" /> Gas
              </label>
              <label>
                <input type="checkbox" /> Cable
              </label>
              <label>
                <input type="checkbox" /> Limpieza
              </label>
            </div>
          </div>

          {/* Precio y disponibilidad */}
          <h3 style={{ color: "#0f172a" }}>Precio y disponibilidad</h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "1rem",
            }}
          >
            <input placeholder="Precio mensual" type="number" />
            <input placeholder="Depósito de garantía" type="number" />
            <input placeholder="Duración mínima (meses)" type="number" />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
            }}
          >
            <select>
              <option>Disponibilidad inmediata</option>
              <option>Sí</option>
              <option>No</option>
            </select>
            <input type="date" />
          </div>

          {/* Botón */}
          <button className="btn-primary" style={{ marginTop: "1rem" }}>
            Publicar / Editar propiedad
          </button>
        </form>
      </section>
    </div>
  );
}

export default PropertyFormPage;
