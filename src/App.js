import React, { lazy, Suspense, Component } from 'react';
import { render } from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import MediaQuery from 'react-responsive';
// import WideScreenHero from './Slides/WideScreen/HeroSlide/Hero';
// import WideScreenWork from './Slides/WideScreen/WorkSlide/Work';
// import WideScreenSkills from './Slides/WideScreen/Skills';
// import WideScreenContact from './Slides/WideScreen/ContactSlide/Contact';
// import MobileHero from './Slides/Mobile/HeroSlide/Hero';
// import MobileWork from './Slides/Mobile/WorkSlide/Work';
// import MobileSkills from './Slides/Mobile/Skills';
// import MobileContact from './Slides/Mobile/ContactSlide/Contact';
import './Assets/index.css';

const GlobalStyle = createGlobalStyle`
html, body { margin: 0;}
*, *:before, *:after { box-sizing: border-box; }
`;

const WideScreenHero = lazy(() => import('./Slides/WideScreen/HeroSlide/Hero'));
const WideScreenWork = lazy(() => import('./Slides/WideScreen/WorkSlide/Work'));
const WideScreenSkills = lazy(() => import('./Slides/WideScreen/Skills'));
const WideScreenContact = lazy(() => import('./Slides/WideScreen/ContactSlide/Contact'));

const MobileHero = lazy(() => import('./Slides/Mobile/HeroSlide/Hero'));
const MobileWork = lazy(() => import('./Slides/Mobile/WorkSlide/Work'));
const MobileSkills = lazy(() => import('./Slides/Mobile/Skills'));
const MobileContact = lazy(() => import('./Slides/Mobile/ContactSlide/Contact'));

class App extends Component {
  componentDidMount() {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }

  render() {
    return (
      <React.Fragment>
        <MediaQuery query="(min-device-width: 1224px)">
          <Suspense fallback={<></>}>
            <WideScreenHero />
            <WideScreenWork />
            <WideScreenSkills />
            <WideScreenContact />
          </Suspense>
        </MediaQuery>
        <MediaQuery query="(max-device-width: 1224px)">
          <Suspense fallback={<></>}>
            <MobileHero />
            <MobileWork />
            <MobileSkills />
            <MobileContact />
          </Suspense>
        </MediaQuery>
        <GlobalStyle />
      </React.Fragment>
    );
  }
}

render(React.createElement(App), document.getElementById('root'));
