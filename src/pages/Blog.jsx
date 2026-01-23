import { Link, useParams, useNavigate } from 'react-router-dom';
import { BiArrowBack, BiCalendar, BiTime } from 'react-icons/bi';

// Datos simulados de artículos
const articles = [
  {
    id: 1,
    title: 'Guía Completa de Zonas para Estudiantes en Izúcar de Matamoros',
    excerpt: 'Descubre las mejores zonas para vivir cerca de la UTIM y otros centros educativos. Información sobre transporte, servicios y seguridad.',
    content: `
      <h2>Zonas Recomendadas para Estudiantes</h2>
      <p>Izúcar de Matamoros ofrece diversas opciones de vivienda para estudiantes. Las zonas más populares incluyen:</p>
      
      <h3>San Bernardino</h3>
      <p>Esta zona es ideal para estudiantes de la UTIM debido a su cercanía. Cuenta con:</p>
      <ul>
        <li>Transporte público frecuente</li>
        <li>Variedad de opciones de renta económica</li>
        <li>Servicios básicos cercanos (tiendas, farmacias)</li>
        <li>Ambiente estudiantil</li>
      </ul>
      
      <h3>Centro</h3>
      <p>El centro de Izúcar ofrece una experiencia más urbana con acceso a todos los servicios:</p>
      <ul>
        <li>Mayor oferta de departamentos</li>
        <li>Proximidad a bancos, supermercados y restaurantes</li>
        <li>Mejor conectividad de transporte</li>
        <li>Mayor seguridad por la presencia constante de personas</li>
      </ul>
      
      <h3>Barrio de Santiago</h3>
      <p>Zona residencial tranquila, ideal para quienes buscan un ambiente más familiar:</p>
      <ul>
        <li>Ambiente más tranquilo</li>
        <li>Opciones de casas completas</li>
        <li>Espacios más amplios</li>
        <li>Ideal para familias o grupos de estudiantes</li>
      </ul>
      
      <h2>Consejos para Elegir tu Vivienda</h2>
      <p>Al buscar una propiedad en Izúcar de Matamoros, considera:</p>
      <ol>
        <li><strong>Presupuesto:</strong> Define cuánto puedes gastar mensualmente, incluyendo servicios.</li>
        <li><strong>Ubicación:</strong> Evalúa la distancia a tu universidad o trabajo y el costo de transporte.</li>
        <li><strong>Servicios incluidos:</strong> Verifica qué servicios están incluidos en la renta (agua, luz, internet).</li>
        <li><strong>Seguridad:</strong> Investiga sobre la seguridad de la zona, especialmente si llegarás tarde.</li>
        <li><strong>Contrato:</strong> Lee cuidadosamente el contrato y asegúrate de entender todos los términos.</li>
      </ol>
    `,
    author: 'Equipo IzuHome',
    date: '2024-01-15',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=400&fit=crop',
    category: 'Guía de Vivienda'
  },
  {
    id: 2,
    title: 'Transporte Público en Izúcar: Cómo Moverse por la Ciudad',
    excerpt: 'Todo lo que necesitas saber sobre las rutas de transporte, horarios y costos para moverte eficientemente por Izúcar de Matamoros.',
    content: `
      <h2>Sistema de Transporte en Izúcar de Matamoros</h2>
      <p>Izúcar de Matamoros cuenta con un sistema de transporte público que conecta las principales zonas de la ciudad.</p>
      
      <h3>Rutas Principales</h3>
      <p>Las rutas más utilizadas por estudiantes y trabajadores incluyen:</p>
      <ul>
        <li><strong>Ruta Centro-San Bernardino:</strong> Conecta el centro con la zona universitaria</li>
        <li><strong>Ruta Periférica:</strong> Recorre las zonas residenciales</li>
        <li><strong>Ruta Mercado:</strong> Acceso a los principales mercados y comercios</li>
      </ul>
      
      <h3>Costos y Horarios</h3>
      <p>El costo del transporte público es accesible, generalmente entre $8-12 pesos por viaje. Los horarios de operación son de 6:00 AM a 10:00 PM en la mayoría de las rutas.</p>
      
      <h3>Alternativas</h3>
      <p>También puedes considerar:</p>
      <ul>
        <li>Bicicleta: La ciudad es relativamente plana y segura para ciclistas</li>
        <li>Taxis: Disponibles 24/7, con tarifas negociables</li>
        <li>Caminar: Muchas zonas están a distancia caminable</li>
      </ul>
    `,
    author: 'Equipo IzuHome',
    date: '2024-01-10',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=400&fit=crop',
    category: 'Transporte'
  },
  {
    id: 3,
    title: 'Servicios Básicos: Agua, Luz e Internet en Izúcar',
    excerpt: 'Información sobre los proveedores de servicios básicos, costos promedio y cómo gestionar tus contratos de servicios.',
    content: `
      <h2>Servicios Básicos en Izúcar de Matamoros</h2>
      <p>Al rentar una propiedad, es importante entender cómo funcionan los servicios básicos en la ciudad.</p>
      
      <h3>Agua</h3>
      <p>El servicio de agua potable es proporcionado por el Sistema de Agua Potable y Alcantarillado de Izúcar de Matamoros (SAPASIM). El costo promedio mensual es de $150-300 pesos dependiendo del consumo.</p>
      
      <h3>Luz Eléctrica</h3>
      <p>La Comisión Federal de Electricidad (CFE) es el proveedor de energía eléctrica. Los costos varían según el consumo, pero el promedio para un cuarto o departamento pequeño es de $200-500 pesos mensuales.</p>
      
      <h3>Internet</h3>
      <p>Los principales proveedores de internet en Izúcar incluyen:</p>
      <ul>
        <li><strong>Telmex:</strong> Planes desde $299/mes</li>
        <li><strong>Totalplay:</strong> Planes desde $399/mes</li>
        <li><strong>Izzi:</strong> Planes desde $349/mes</li>
      </ul>
      <p>Muchos propietarios incluyen el internet en la renta, especialmente en propiedades para estudiantes.</p>
      
      <h3>Consejos</h3>
      <ul>
        <li>Verifica qué servicios están incluidos en tu renta</li>
        <li>Si debes contratar servicios, lleva identificación oficial y comprobante de domicilio</li>
        <li>Considera compartir el costo de internet con roommates</li>
      </ul>
    `,
    author: 'Equipo IzuHome',
    date: '2024-01-05',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop',
    category: 'Servicios'
  },
  {
    id: 4,
    title: 'Lugares de Interés en Izúcar de Matamoros',
    excerpt: 'Descubre los lugares más importantes de Izúcar: mercados, parques, universidades y puntos de referencia que debes conocer.',
    content: `
      <h2>Lugares de Interés en Izúcar de Matamoros</h2>
      <p>Izúcar de Matamoros es una ciudad rica en cultura y servicios. Aquí te presentamos los lugares más importantes:</p>
      
      <h3>Educación</h3>
      <ul>
        <li><strong>Universidad Tecnológica de Izúcar de Matamoros (UTIM):</strong> Principal centro educativo superior</li>
        <li><strong>Institutos y preparatorias:</strong> Varias opciones educativas en diferentes zonas</li>
      </ul>
      
      <h3>Comercio y Servicios</h3>
      <ul>
        <li><strong>Mercado Municipal:</strong> El principal mercado de la ciudad, ideal para compras diarias</li>
        <li><strong>Centro Comercial:</strong> Varias opciones de tiendas y servicios</li>
        <li><strong>Bancos:</strong> Múltiples sucursales en el centro</li>
      </ul>
      
      <h3>Recreación</h3>
      <ul>
        <li><strong>Parques:</strong> Varios espacios verdes para relajarse</li>
        <li><strong>Centro Histórico:</strong> Zona con arquitectura tradicional</li>
        <li><strong>Restaurantes:</strong> Variedad de opciones gastronómicas locales</li>
      </ul>
      
      <h3>Salud</h3>
      <ul>
        <li><strong>Centros de Salud:</strong> Varios centros de atención médica</li>
        <li><strong>Farmacias:</strong> Amplia disponibilidad en todas las zonas</li>
        <li><strong>Hospitales:</strong> Servicios de emergencia disponibles</li>
      </ul>
    `,
    author: 'Equipo IzuHome',
    date: '2024-01-01',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=400&fit=crop',
    category: 'Turismo'
  }
];

function BlogList() {
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
        <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '0.5rem' }}>
            Guía de Izúcar de Matamoros
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
            Información útil sobre vivienda, transporte, servicios y vida en Izúcar de Matamoros
          </p>
        </div>

        {/* Lista de Artículos */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '2rem'
        }}>
          {articles.map(article => (
            <Link
              key={article.id}
              to={`/blog/${article.id}`}
              style={{
                display: 'block',
                background: 'var(--white)',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-md)',
                overflow: 'hidden',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'transform 0.2s, box-shadow 0.2s'
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
              <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
                <img
                  src={article.image}
                  alt={article.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>

              {/* Contenido */}
              <div style={{ padding: '1.5rem' }}>
                <div style={{
                  display: 'inline-block',
                  background: 'var(--accent)',
                  color: 'var(--white)',
                  padding: '0.25rem 0.75rem',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  marginBottom: '1rem'
                }}>
                  {article.category}
                </div>

                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  color: 'var(--text-dark)',
                  marginBottom: '0.75rem',
                  lineHeight: '1.4'
                }}>
                  {article.title}
                </h3>

                <p style={{
                  color: 'var(--text-muted)',
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  marginBottom: '1rem',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {article.excerpt}
                </p>

                {/* Meta información */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '1rem',
                  borderTop: '1px solid #e2e8f0',
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <BiCalendar />
                    <span>{new Date(article.date).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <BiTime />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = articles.find(a => a.id === parseInt(id));

  if (!article) {
    return (
      <div style={{ minHeight: '100vh', background: 'var(--bg-page)', padding: '3rem 1rem', textAlign: 'center' }}>
        <h1 style={{ color: 'var(--text-dark)', marginBottom: '1rem' }}>Artículo no encontrado</h1>
        <Link to="/blog" className="btn-primary">Volver al Blog</Link>
      </div>
    );
  }

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

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 1rem' }}>
        {/* Botón de regreso */}
        <button
          onClick={() => navigate('/blog')}
          className="back-link"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
        >
          <BiArrowBack /> Volver al Blog
        </button>

        {/* Artículo */}
        <article style={{
          background: 'var(--white)',
          borderRadius: 'var(--radius-md)',
          boxShadow: 'var(--shadow-lg)',
          overflow: 'hidden',
          marginBottom: '2rem'
        }}>
          {/* Imagen destacada */}
          <div style={{ width: '100%', height: '400px', overflow: 'hidden' }}>
            <img
              src={article.image}
              alt={article.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>

          {/* Contenido */}
          <div style={{ padding: '3rem' }}>
            {/* Categoría y Meta */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{
                display: 'inline-block',
                background: 'var(--accent)',
                color: 'var(--white)',
                padding: '0.5rem 1rem',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.9rem',
                fontWeight: '600',
                marginBottom: '1rem'
              }}>
                {article.category}
              </div>
              <div style={{
                display: 'flex',
                gap: '1.5rem',
                fontSize: '0.9rem',
                color: 'var(--text-muted)',
                flexWrap: 'wrap'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <BiCalendar />
                  <span>{new Date(article.date).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <BiTime />
                  <span>{article.readTime} de lectura</span>
                </div>
                <div>
                  Por {article.author}
                </div>
              </div>
            </div>

            {/* Título */}
            <h1 style={{
              fontSize: '2.5rem',
              fontWeight: '800',
              color: 'var(--text-dark)',
              marginBottom: '1.5rem',
              lineHeight: '1.2'
            }}>
              {article.title}
            </h1>

            {/* Contenido del artículo */}
            <div
              style={{
                color: 'var(--text-dark)',
                lineHeight: '1.8',
                fontSize: '1.1rem'
              }}
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </article>

        {/* Navegación a otros artículos */}
        <div style={{
          background: 'var(--white)',
          borderRadius: 'var(--radius-md)',
          boxShadow: 'var(--shadow-md)',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <h3 style={{ color: 'var(--text-dark)', marginBottom: '1rem' }}>¿Quieres leer más?</h3>
          <Link to="/blog" className="btn-primary">
            Ver Todos los Artículos
          </Link>
        </div>
      </div>
    </div>
  );
}

function Blog() {
  const { id } = useParams();
  
  if (id) {
    return <BlogDetail />;
  }
  
  return <BlogList />;
}

export default Blog;
