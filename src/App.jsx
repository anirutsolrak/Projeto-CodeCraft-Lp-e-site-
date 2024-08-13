import React from 'react';
import Header from './componentes/Header';
import Banner from './componentes/Banner';
import Hero from './componentes/Hero';
import BackgroundImage from './assets/background.jpeg'; // Substitua pelo caminho da sua imagem

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#181818', minHeight: '100vh', position: 'relative' }}>
      <Header />
      <Banner />
      <Hero />
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover', zIndex: -1 }}>
        {/* Imagem de fundo fixa */}
      </div>
    </div>
  );
}

export default App;