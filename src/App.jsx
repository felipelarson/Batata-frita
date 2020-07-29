import React from 'react';
import LogoBatata from './components/Logo'
import {HeaderBatata, Wrapper} from './components/HeaderBatata'
import Button from './components/ButtonBatata';
import FooterBatata from './components/FooterBatata'
import HighlightBatata from './components/HighlightBatata'
import {BannerBatata, Text} from './components/BannerBatata'
import TagBatata from './components/TagBatata'
import TitleBatata from './components/TitleBatata'
import DescriptionBatata from './components/DescriptionBatata'
import ThumbBatata from './components/ThumbBatata'
import batata from './assets/img/batata.png'
import senhorBatata from './assets/img/senhorBatata.png'

// JSX = (J)ava(S)cript (X)ML
function App() {
  return (
    <>
      <HeaderBatata>
        <Wrapper>
          <LogoBatata />
          <Button>Novo Video</Button>
        </Wrapper>
      </HeaderBatata>
      <BannerBatata>
        <Text>
          <TagBatata>Front End</TagBatata>
          <TitleBatata>Henrique Gosta de BATATA FRITA</TitleBatata>
          <DescriptionBatata>Meu filho adora batata frita</DescriptionBatata>
        </Text>
        <ThumbBatata 
          src={batata} 
          alt="Batata"
          avatar={senhorBatata}
          channelName="BatataFrita"
        />
      </BannerBatata>
      <FooterBatata>
        <LogoBatata />
        <p>Site feito na <HighlightBatata>#ImersaoReact</HighlightBatata></p>
      </FooterBatata>
    </>
  );
}

export default App;
