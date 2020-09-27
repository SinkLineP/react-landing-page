import React from 'react';
import './App.scss';
import HeroBlock from './components/HeroBlock/HeroBlock';
import gcLogo from './assets/GC_logo.svg';
import ITNLogo from './assets/ITN_logo.svg';
import shidLogo from './assets/shid-emozhl-logo.svg';
// import heroBg from './assets/hero-bg.jpg';

function App() {
  const partners = [
    shidLogo,
    ITNLogo,
    gcLogo
  ]
  const links = [
    "Основные факты",
    "Индекс качества воздуха",
    "Политика по уменьшению загрязнений"
  ]
  return (
    <>
      <HeroBlock title="Качество атмосферного воздуха и здоровье"
                 logos={partners}
                //  bgImg={heroBg}
                 links={links}/>
    </>
  );
}

export default App;