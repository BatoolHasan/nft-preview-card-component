import './App.css';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import CardContainer from './components/CardContainer';
import Footer from "./components/Footer";
import Container from './components/Container';
function App() {
  const theme = {
    FontColor1: "hsl(215, 51%, 70%)",
    FontColor2: "hsl(178, 100%, 50%)",
    FontColor3: "hsl(0, 0%, 100%)",
    MainBackground: "hsl(217, 54%, 11%)",
    CardBackground: "hsl(216, 50%, 16%)",
    HorizontalLine: "hsl(215, 32%, 27%)",
  };
  return (
    <ThemeProvider theme={theme}>
      <main>
        <Container>
          <div>
            <CardContainer />
            <Footer
              challengeUrl="hhttps://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U"
              repoUrl="https://github.com/BatoolHasan/nft-preview-card-component"
            />
          </div>
        </Container>
      </main>
    </ThemeProvider>
  );
}

export default App;
