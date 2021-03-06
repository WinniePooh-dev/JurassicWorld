import {createGlobalStyle} from 'styled-components';
import JurassicPark from './assets/fonts/JurassicPark.ttf';

export const Colors = {
  mainColor: '#2a6686',
  secondColor: '#F8F8F8',
  thirdColor: '#888888',
  fourthColor: '#C2C6D6',
  foreground: '#FAFAFA',
  background: '#FFFFFF',
  textColor: '#444444',
  errorColor: '#FF6347',
  attentionColor: '#FF4D62',
  cautionColor: '#FFA500',
  successColor: '#34CA00',
  titleColor: '#FFFFF0'
};

const {foreground} = Colors;

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Jurassic Park;
    src: url(${JurassicPark});
  }

  html, body {
    width: 100%;
    height: 100%;
  }
  
  body {
    padding: 0;
    margin: 0;
    background: ${foreground};
    font-family: Jurassic Park;
    font-size: 3rem;
    font-style: normal;
    font-weight: normal;

    #root {
      height: 100%;
    }

    *
    ::before
    ::after {
      box-sizing: border-box;
    }
  }
`;

export default GlobalStyle;
