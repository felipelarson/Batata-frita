import React from 'react';
import LogoBatata from './components/Logo'
import HeaderBatata from './components/HeaderBatata'
import Button from './components/ButtonBatata';
import FooterBatata from './components/FooterBatata'
import HighlightBatata from './components/HighlightBatata'

// JSX = (J)ava(S)cript (X)ML
function App() {
  return (
    <>
      <HeaderBatata>
        <LogoBatata />
        <Button>
          Novo Video
        </Button>
      </HeaderBatata>
      <FooterBatata>
        <LogoBatata />
        <p>Site feito na <HighlightBatata>#ImersaoReact</HighlightBatata></p>
      </FooterBatata>
    </>
  );
}

export default App;
