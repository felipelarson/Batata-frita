import React from 'react';
import LogoBatata from './components/Logo'
import HeaderBatata from './components/HeaderBatata'
import Button from './components/ButtonBatata';
import FooterBatata from './components/FooterBatata'
import HighlightBatata from './components/HighlightBatata'
import BannerBatata from './components/BannerBatata'
import TagBatata from './components/TagBatata'
import TitleBatata from './components/TitleBatata'

// JSX = (J)ava(S)cript (X)ML
function App() {
  return (
    <>
      <HeaderBatata>
        <LogoBatata />
        <Button>Novo Video</Button>
      </HeaderBatata>
      <BannerBatata>
        <TagBatata>Front End</TagBatata>
        <TitleBatata>Gueio Runner - Kikano Reeves</TitleBatata>
      </BannerBatata>
      <FooterBatata>
        <LogoBatata />
        <p>Site feito na <HighlightBatata>#ImersaoReact</HighlightBatata></p>
      </FooterBatata>
    </>
  );
}

export default App;
