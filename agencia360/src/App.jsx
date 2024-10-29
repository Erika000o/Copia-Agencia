import React, { useState } from 'react';
import imagen_inicio from './image/Agencia.jpg'; 
import facebook from './image/facebook.png';
import instagram from './image/instagram.png';
import tiktok from './image/tik-tok.png';
import WhatsApp from './image/whatsApp.png'; 

// Imagenes
import PendonM from './image/PendonM.jpeg';
import PendonS from './image/PendonS.jpeg';
import PendonL from './image/PendonL.jpeg';
import PendonXL from './image/PendonXL.jpeg';
import Tarjetas4x1 from './image/Tarjetas4x1.jpeg';
import Tarjetas4x1UV from './image/Tarjetas4x1 UV.jpeg';
import Tarjeta4x4UV from './image/Tarjetas4x4UV.jpeg';
import Volante4x1 from './image/volante4x1.jpeg'
import Volante4x0 from './image/volantes4x0.jpeg'
import Volante4x4 from './image/volante4x4.jpeg'
import StickerP from './image/Sticker.jpg';
import StickerGrande from './image/StickerGrande.jpeg'
import Banner from './image/Banner.jpeg';
import Vinilo from './image/Vinilo.jpeg';
import Post from './image/Post.jpeg';

import CampañaStar from './image/CampañaStar.jpeg'
//Productos Publicidad
import './App.css';
import './components/iconoWhat.css';
import PendonesOptions from "./components/PendonesOptions";
import TarjetasOptions from "./components/TarjetasOptions"; // Asegúrate de importar el componente
import VolantesOptions from './components/VolantesOptions';
import StickersOptions from './components/StickersOptions.jsx';
import ImpresionDigitalOptions from './components/ImpresionDigitalOptions.jsx';
import Modal from './components/Modal.jsx';
//Productos Diseño Logos
import PostOptions from './components/PostOptions.jsx';
import DiseñoLogoOptions from './components/DiseñoLogoOptions.jsx';
import DiseñoImpresionOptions from './components/DiseñoImpresionOptions.jsx';
//Productos Marketing
import MarketingAnunciosOptions from './components/MarketingAnunciosOptions.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



// Simulación de productos y trabajos
const servicios = {
  publicidad: {
    pendones: [
      { name: 'Pendón talla S', description: 'Pendón de 50 Cm x 70 Cm', price: 28000, image: PendonS},
      { name: 'Pendón talla M', description: 'Pendón de 70 Cm x 100 Cm', price: 42000, image: PendonM },
      { name: 'Pendón talla L', description: 'Pendón de 80 Cm x 120 Cm', price: 67000, image: PendonL },
      { name: 'Pendón talla XL', description: 'Pendón de 100 Cm x 150 Cm', price: 90000, image: PendonXL }
    ],
    tarjetas: [
      { name: 'Tarjetas Barniz 4*1', description: '1000 Parte frontal full color barnizda / respaldo blanco y negro', price: 80000, image: Tarjetas4x1 },
      { name: 'Tarjetas Barniz 4*1 Mate UV', description: 'Parte frontal a color Mate con Brillo UV parcial y respaldo en escala de grises', price: 120000, image: Tarjetas4x1UV },
      { name: 'Tarjetas Barniz 4*4', description: 'Tarjetas 4x4 Mate UV - Ambos lados a color mate con brillo UV parcial', price: 150000, image: Tarjeta4x4UV }
    ],
    volantes: [
      { name: 'Volante A1', description: 'Volantes 4x0  Impresión un solo lado a color', price: 145000, image: Volante4x0 },
      { name: 'Volante A2', description: 'Volantes 4x1  Parte frontal a color y respaldo en escala de grises', price: 175000, image: Volante4x1 },
      { name: 'Volante A3', description: 'Volantes 4x4  Ambos lados a color', price: 220000, image: Volante4x4 }
    ],
    stickers: [
      { name: 'Sticker pequeño', description: 'Sticker de 5 cm', price: 5000, image: StickerP },
      { name: 'Sticker grande', description: 'Sticker de 10 cm', price: 10000, image: StickerGrande},
    ],
    impresionDigital: [
      { name: 'Impresión Digital', description: 'Impresión digital- Vinilo adhesivo', price: 35000, image: Vinilo },
      { name: 'Impresión Digital', description: 'Impresión digital - Banner', price: 30000, image: Banner },
    ],
    // Otros productos...
  },
  Diseño: {
    Post: [
      { name: 'Post', description: 'Ingrese la información que considere necesaria para su respectivo diseño', price: 20000, image: Post }
    ],
    DiseñoLogos: [
      {name: 'Logo Negocios Pequeños', description: 'Diseño de logos para negocio pequeño legalmente constituido', price: 200000, image: './image/pendon-pequeno.jpg'},
      {name: 'Logo para Emprendedores', description: 'Diseño de logo para emprendedores', price: 450000, image: './image/pendon-pequeno.jpg'},
      {name: 'Logo para Empresas', description: 'Diseño de logo para empresas con manual de marca (Garantia de cambios y correcciones por 30 dias despues de la entrega) ', price: 500000, image: './image/pendon-pequeno.jpg'}
    ],
    DiseñoImpresion: [
      {name: 'Diseño Impresion', description: 'Impresiones de 1 a 5 unidades $15.000  a partir de 6 diseños 10.000.', price: 15000, image: './image/pendon-pequeno.jpg'}
    ]
  },
  MarketingDigital: {
    MarketingAnuncios: [
      {name: 'Marketing sin Anuncios', description: '7 días 8 post - 15 días 18 post + fotos que el cliente suministre', price: 270000, image: './image/pendon-pequeno.jpg'},
      {name: 'Marketing con Anuncios', description: '7 días carrusel - 15 días carrusel - 30 días total 40 archivos (imágenes)', price: 650000, image: './image/pendon-pequeno.jpg'},
    ]
  }
};

const trabajos = [
  { title: 'Campaña Publicitaria #1', description: 'Diseño de campaña integral para empresa XYZ', image: 'Image.gpg' },
  { title: 'Estrategia Digital #1', description: 'Implementación de estrategia de marketing digital para startup 123', image: CampañaStar },
  // Otros trabajos...
];


const App = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [seccionActiva, setSeccionActiva] = useState('bienvenida');
  const [productos, setProductos] = useState([]);
  const [modalImagen, setModalImagen] = useState(null);
  const [showPendonesOptions, setShowPendonesOptions] = useState(false);
  const [showTarjetasOptions, setShowTarjetasOptions] = useState(false);
  const [showVolantesOptions, setShowVolantesOptions] = useState(false);
  const [showStickersOptions, setShowStickersOptions] = useState(false);
  const [showImpresionDigitalOptions, setShowImpresionDigitalOptions] = useState(false);
  const [showPostOptions, setShowPostOptions] = useState(false);
  const [showDiseñoLogoOptions, setShowDiseñoLogoOptions] = useState(false);
  const [showDiseñoImpresionOptions, setShowDiseñoImpresionOptions] = useState(false);
  const [showMarketingAnunciosOptions, setShowMarketingAnunciosOptions] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar el menú

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Cambia el estado del menú
    console.log("Menú abierto:", !isMenuOpen); // Verifica el estado
  };

  const mostrarSeccion = (seccion) => {
    setSeccionActiva(seccion);
    setProductos([]); // Limpiar productos al cambiar de sección
    setModalImagen(null); // Limpiar modal al cambiar de sección

    // Simular la carga de productos cuando seleccionamos "Publicidad"
    if (seccion === 'publicidad') {
      setProductos(servicios['publicidad']['pendones']['volantes']['tarejetas']['stickers']); // Cambia 'pendones' según el tipo de producto que quieras
    }
    // Simular la carga de productos cuando seleccionamos "Diseño"
    else if (seccion === 'diseno-grafico') {
      setProductos(servicios['Diseño']['Post']['DiseñoLogos']['DiseñoImpresion']); // Cambia según la estructura de tus datos
    }
    else if (seccion === 'marketing-digital') {
      setProductos(servicios['MarketingDigital']['MarketingAnuncios']); // Cambia según la estructura de tus datos
    }
  };

  const renderServiceComponent = () => {
    switch (selectedService) {
      case 'pendones':
        return <PendonesOptions onBack={() => setSelectedService(null)} />;
      case 'tarjetas':
        return <TarjetasOptions onBack={() => setSelectedService(null)} />;
      case 'volantes':
        return <VolantesOptions onBack={() => setSelectedService(null)} />;
      case 'stickers':
        return <StickersOptions onBack={() => setSelectedService(null)} />;
      case 'impresion':
        return <ImpresionDigitalOptions onBack={() => setSelectedService(null)} />;
      case 'post':
        return <PostOptions onBack={() => setSelectedService(null)} />; 
      case 'diseñoLogo':
        return <DiseñoLogoOptions onBack={() => setSelectedService(null)} />
      case 'diseñoImpresion':
        return <DiseñoImpresionOptions onBack={() => setSelectedService(null)} />
      case 'marketinDigital':
        return <MarketingAnunciosOptions onBack={() => setSelectedService(null)} />
      default:
        return null;
    }
  };

  const abrirModal = (imagen) => {
    setModalImagen(imagen);
  };

  const cerrarModal = () => {
    setModalImagen(null);
    setSeccionActiva('bienvenida'); // Restablecer a la sección de bienvenida
  };

  const handlePendonesSelect = () => {
    setProductos(servicios.publicidad.pendones);
    setSelectedService('pendones');
  };

  const handleTarjetasSelect = () => {
    setProductos(servicios.publicidad.tarjetas); // Cargar productos de tarjetas
    setSelectedService('tarjetas');
  };

  const handleVolantesSelect = () => {
    setProductos(servicios.publicidad.volantes);
    setSelectedService('volantes');
  };

  const handleStikcersSelect = () => {
    setProductos(servicios.publicidad.stickers);
    setSelectedService('stickers');
  };

  const handleImpresionDigitalSelect = () => {
    setProductos(servicios.publicidad.impresionDigital);
    setSelectedService('impresionDigital');
  };

  const handlePostSelect = () => {   
    setProductos(servicios.Diseño.Post); // Cargar productos de diseño
    setSelectedService('post');
  };
  const handleDiseñoLogoSelect = () => {  
    setProductos(servicios.Diseño.DiseñoLogos); 
    setSelectedService('diseñoLogo');
  };
  const handleDiseñoImpresionSelect = () => {   
    setProductos(servicios.Diseño.DiseñoImpresion); 
    setSelectedService('diseñoImpresion');
  };
  const handleMarketingAnunciosSelect = () => {   
    setProductos(servicios.MarketingDigital.MarketingAnuncios); 
    setSelectedService('marketingDigital');
  };

  const handleProductClick = (producto) => {
    if (selectedService === 'pendones') {
      setShowPendonesOptions(true);
    } else if (selectedService === 'tarjetas') {
      setShowTarjetasOptions(true);
    } else if (selectedService === 'volantes') {
      setShowVolantesOptions(true);
    } else if (selectedService === 'stickers') {
      setShowStickersOptions(true);
    } else if (selectedService === 'impresionDigital') { 
      setShowImpresionDigitalOptions(true);
    } else if (selectedService === 'post') { 
      setShowPostOptions(true); 
    } else if (selectedService === 'diseñoLogo') { 
      setShowDiseñoLogoOptions(true); 
    } else if (selectedService === 'diseñoImpresion') { 
      setShowDiseñoImpresionOptions(true); 
    } else if (selectedService === 'marketingDigital') { 
      setShowMarketingAnunciosOptions(true); 
    }
  };

  const handleBack = () => {
    setShowPendonesOptions(false);
    setSeccionActiva('publicidad');
    setSeccionActiva('diseno-grafico')
    setSeccionActiva('marketing-digital'); // Actualiza la sección activa
  };

  const handleContinue = (data) => {
    console.log('Datos para continuar con la compra:', data);
    // Aquí puedes manejar la lógica para continuar con la compra
  };

  

  return (
    <>
      <header className="menu">
        <div className="menu-header">
          <h2>Menú</h2>
          <button className="menu-toggle" onClick={toggleMenu}>&#9776;</button>
        </div>
        <ul className={`menu-items ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="#" onClick={() => mostrarSeccion('bienvenida')}><i className="fas fa-home"></i> Inicio</a></li>
          <li className="dropdown">
            <a href="#" className="dropdown-toggle"><i className="fas fa-project-diagram"></i> Servicios</a>
            <ul className="submenu">
              <li><a href="#" onClick={() => mostrarSeccion('publicidad')}>Publicidad</a></li>
              <li><a href="#" onClick={() => mostrarSeccion('diseno-grafico')}>Diseño Gráfico</a></li>
              <li><a href="#" onClick={() => mostrarSeccion('marketing-digital')}>Marketing Digital</a></li>
            </ul>
          </li>
          <li><a href="#" onClick={() => mostrarSeccion('trabajos')}><i className="fas fa-briefcase"></i> Trabajos</a></li>
        </ul>
      </header>

        {seccionActiva === 'bienvenida' && (
          <section id="bienvenida " className="service-section ">
            <h2>Agencia Publicitaria 360°</h2>
            <img src={imagen_inicio} alt="Imagen de bienvenida" className="imagen-bienvenida" />
            <p className="p ">Gracias por visitar nuestra página. Ofrecemos servicios de alta calidad en publicidad, diseño gráfico y marketing digital.</p>
          </section>
        )}

        {seccionActiva === 'publicidad' && (
          <section id="publicidad" className="service-section">
            <h2>Productos de Publicidad</h2>
            <ul className="product-submenu">
              <li><a href="#" onClick={handlePendonesSelect}>Pendones</a></li>
              <li><a href="#" onClick={handleTarjetasSelect}>Tarjetas</a></li>
              <li><a href="#" onClick={handleVolantesSelect}>Volantes</a></li>
              <li><a href="#" onClick={handleStikcersSelect}>Stickers</a></li>
              <li><a href="#" onClick={handleImpresionDigitalSelect}>Impresion Digital</a></li>
            </ul>
            <div className="products-container">
              {productos.map((producto, index) => (
                <div key={index} className="product" onClick={() => handleProductClick(producto)}>
                  <h3>{producto.name}</h3>
                  <img src={producto.image} alt={producto.name} className="product-image" onClick={() => abrirModal(producto.image)} />
                  <p>{producto.description}</p>
                  <p>Precio: ${producto.price}</p>
                </div>
              ))}
              <div className="whatsapp-icon">
              <a href="https://wa.me/573187752351" target="_blank" rel="noopener noreferrer">
                  <img src={WhatsApp} alt="WhatsApp" />
              </a>
            </div>
            </div>
          </section>
        )}

        {seccionActiva === 'diseno-grafico' && (
          <section id="diseno-grafico" className="service-section">
            <h2>Productos de Diseño Gráfico</h2>
            <ul className="product-submenu">
              <li><a href="#" onClick={handlePostSelect}>Post</a></li>
              <li><a href="#" onClick={handleDiseñoLogoSelect}>Diseño de Logos</a></li>
              <li><a href="#" onClick={handleDiseñoImpresionSelect}>Diseño de Impresión</a></li>
            </ul>
            <div className="products-container">
              {productos.map((producto, index) => (
                <div key={index} className="product" onClick={() => handleProductClick(producto)}>
                  <h3>{producto.name}</h3>
                  <img src={producto.image} alt={producto.name} className="product-image" onClick={() => abrirModal(producto.image)} />
                  <p>{producto.description}</p>
                  <p>Precio: ${producto.price}</p>
                </div>
              ))}
              <div className="whatsapp-icon">
              <a href="https://wa.me/573187752351" target="_blank" rel="noopener noreferrer">
                  <img src={WhatsApp} alt="WhatsApp" />
              </a>
            </div>
            </div>
          </section>
        )}

        {seccionActiva === 'marketing-digital' && (
          <section id="marketing-digital" className="service-section">
            <h2>Productos de Marketing Digital</h2>
            <ul className="product-submenu">
              <li><a href="#" onClick={handleMarketingAnunciosSelect}>Marketing Anuncios</a></li>
              
            </ul>
            <div className="products-container">
              {productos.map((producto, index) => (
                <div key={index} className="product" onClick={() => handleProductClick(producto)}>
                  <h3>{producto.name}</h3>
                  <img src={producto.image} alt={producto.name} className="product-image" onClick={() => abrirModal(producto.image)} />
                  <p>{producto.description}</p>
                  <p>Precio: ${producto.price}</p>
                </div>
              ))}
              <div className="whatsapp-icon">
              <a href="https://wa.me/573187752351" target="_blank" rel="noopener noreferrer">
                  <img src={WhatsApp} alt="WhatsApp" />
              </a>
            </div>
            </div>
          </section>
        )}

        {showPendonesOptions && (
          <Modal onClose={() => setShowPendonesOptions(false)}>
            <PendonesOptions 
              onBack={() => setShowPendonesOptions(false)} 
              onContinue={(data) => {
                console.log('Datos para continuar:', data);
                setShowPendonesOptions(false); // Cierra el modal después de continuar
              }} 
              servicios={servicios} 
            />
          </Modal>
        )}

        {showTarjetasOptions && (
          <Modal onClose={() => setShowTarjetasOptions(false)}>
            <TarjetasOptions 
              onBack={() => setShowTarjetasOptions(false)} 
              onContinue={(selectedProducts) => {
                console.log('Productos seleccionados:', selectedProducts);
                setShowTarjetasOptions(false); // Cierra el modal después de continuar
              }} 
            />
          </Modal>
        )}

        {showVolantesOptions && (
          <Modal onClose={() => setShowVolantesOptions(false)}>
            <VolantesOptions 
              onBack={() => setShowVolantesOptions(false)} 
              onContinue={(selectedProducts) => {
                console.log('Productos seleccionados:', selectedProducts);
                setShowVolantesOptions(false); // Cierra el modal después de continuar
              }} 
            />
          </Modal>
        )}

        {showStickersOptions && (
          <Modal onClose={() => setShowStickersOptions(false)}>
            <StickersOptions 
              onBack={() => setShowStickersOptions(false)} 
              onContinue={(selectedProducts) => {
                console.log('Productos seleccionados:', selectedProducts);
                setShowStickersOptions(false); // Cierra el modal después de continuar
              }} 
            />
          </Modal>
        )}

        {showImpresionDigitalOptions && (
          <Modal onClose={() => setShowImpresionDigitalOptions(false)}>
            <ImpresionDigitalOptions 
              onBack={() => setShowImpresionDigitalOptions(false)} 
              onContinue={(selectedProducts) => {
                console.log('Productos seleccionados:', selectedProducts);
                setShowImpresionDigitalOptions(false); // Cierra el modal después de continuar
              }} 
            />
          </Modal>
        )}

        {showPostOptions && (
          <Modal onClose={() => setShowPostOptions(false)}>
            <PostOptions 
              onBack={() => setShowPostOptions(false)} 
              onContinue={(selectedProducts) => {
                console.log('Productos seleccionados:', selectedProducts);
                setShowPostOptions(false); // Cierra el modal después de continuar
              }} 
            />
          </Modal>
        )}

        {showDiseñoLogoOptions && (
          <Modal onClose={() => setShowDiseñoLogoOptions(false)}>
            <DiseñoLogoOptions 
              onBack={() => setShowDiseñoLogoOptions(false)} 
              onContinue={(selectedProducts) => {
                console.log('Productos seleccionados:', selectedProducts);
                setShowDiseñoLogoOptions(false); // Cierra el modal después de continuar
              }} 
            />
          </Modal>
        )}
        {showDiseñoImpresionOptions && (
          <Modal onClose={() => setShowDiseñoImpresionOptions(false)}>
            <DiseñoImpresionOptions 
              onBack={() => setShowDiseñoImpresionOptions(false)} 
              onContinue={(selectedProducts) => {
                console.log('Productos seleccionados:', selectedProducts);
                setShowDiseñoImpresionOptions(false); // Cierra el modal después de continuar
              }} 
            />
          </Modal>
        )}

        {showMarketingAnunciosOptions && (
          <Modal onClose={() => setShowMarketingAnunciosOptions(false)}>
            <MarketingAnunciosOptions 
              onBack={() => setShowMarketingAnunciosOptions(false)} 
              onContinue={(selectedProducts) => {
                console.log('Productos seleccionados:', selectedProducts);
                setShowMarketingAnunciosOptions(false); // Cierra el modal después de continuar
              }} 
            />
          </Modal>
        )}

        

        {seccionActiva === 'trabajos' && (
          <section id="trabajos" className="service-section">
            <h2>Nuestros Trabajos</h2>
            <div className="trabajos-container">
              {trabajos.map((trabajo, index) => (
                <div key={index} className="trabajo">
                  <img src={CampañaStar} alt={trabajo.title} className="trabajo-image" onClick={() => abrirModal(trabajo.image)} />
                  <div className="trabajo-details">
                    <h3>{trabajo.title}</h3>
                    <p>{trabajo.description}</p>
                  </div>
                </div>
              ))}
              <div className="whatsapp-icon">
              <a href="https://wa.me/573187752351" target="_blank" rel="noopener noreferrer">
                  <img src={WhatsApp} alt="WhatsApp" />
              </a>
            </div>  
            </div>
          </section>
        )}

        {/* Modal para mostrar imágenes en grande */}
        {modalImagen && (
          <div className="modal" id="imagenModal" style={{ display: 'block' }}>
            <span className="cerrar" onClick={cerrarModal}>&times;</span>
            <img src={modalImagen} alt="Producto" id="imagenProducto" />
          </div>
        )}

      <footer className="footer" style={{  bottom: '0', width: '100%', display: seccionActiva === 'bienvenida' ? 'block' : 'none' }}>
        <div className="footer-content">
          <div className="social-links">
            <a href="https://www.facebook.com/publicidad360caicedonia?locale=es_LA" target="_blank" rel="noopener noreferrer">
              <div className="icon-container">
                <img src={facebook} alt="Facebook" className="custom-icon" />
              </div>
            </a>
            <a href="https://www.instagram.com/agencia_publicitaria_360/" target="_blank" rel="noopener noreferrer">
              <div className="icon-container">
                <img src={instagram} alt="Instagram" className="custom-icon" />
              </div>
            </a>
            <a href="https://www.tiktok.com/@agenciapublicitaria360?lang=es" target="_blank" rel="noopener noreferrer">
              <div className="icon-container">
                <img src={tiktok} alt="TikTok" className="custom-icon" />
              </div>
            </a>
            <div className="whatsapp-icon">
              <a href="https://wa.me/573187752351" target="_blank" rel="noopener noreferrer">
                  <img src={WhatsApp} alt="WhatsApp" />
              </a>
            </div>
          </div>
          <p className="copyright">&copy; 2024 Agencia Publicitaria 360°. Todos los derechos reservados.</p>
        </div>
        
      </footer>
      
      <ToastContainer />

      

      
    </>
  );
};

export default App;

