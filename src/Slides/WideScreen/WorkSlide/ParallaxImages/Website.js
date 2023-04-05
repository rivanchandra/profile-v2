import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import backinmotion from '../../../../Assets/Images/Website/backinmotion.png';
import cantabile from '../../../../Assets/Images/Website/cantabile.png';
import frostfence from '../../../../Assets/Images/Website/frostfence.png';
import carrotsolutions from '../../../../Assets/Images/Website/carrotsolutions.png';

const Backinmotion = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 12}%)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom:-10vh;
left: 0vw;
/* border: 1px dashed red; */
width: 45vw;
`;

const Cantabile = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 8}%) scale(0.94)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom:-30vh;
right:0vw;
/* border: 1px dashed red; */
width: 45vw; 
/* filter: blur(0.6px); */
`;

const Frostfence = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 6}%) scale(0.9)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-50vh;
left:2vw;
position: absolute;
/* border: 1px dashed red; */
width: 45vw;
/* filter: blur(0.8px); */
`;

const Carrotsolutions = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 3}%) scale(0.6)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-75vh;
right: 8vw;
position: absolute;
/* border: 1px dashed red; */
width: 50vw;
/* filter: blur(1.2px); */
`;

class Website extends Component {
  render() {
    let { scrollPercent } = this.props;
    const {
      boxHeight, index, scrollHeight, screenHeight,
    } = this.props;
    const heighttoBeReducedinVH = ((boxHeight * index) - 100);
    const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
    const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight) + index - 1;
    scrollPercent -= scrollOffsetInPercent;

    return (
      <React.Fragment>
        <a href="https://www.backinmotion.com.au" target="_blank" rel="noreferrer">
          <Backinmotion src={backinmotion} scroll={scrollPercent} alt="backinmotion" />
        </a>
        <a href="http://www.cantabilemusicschool.com" target="_blank" rel="noreferrer">
          <Cantabile src={cantabile} scroll={scrollPercent} alt="cantabile" />
        </a>
        <a href="https://frostfence.com" target="_blank" rel="noreferrer">
          <Frostfence src={frostfence} scroll={scrollPercent} alt="frostfence" />
        </a>
        <a href="https://carrotsolutions.com.au" target="_blank" rel="noreferrer">
          <Carrotsolutions src={carrotsolutions} scroll={scrollPercent} alt="carrotsolutions" />
        </a>
      </React.Fragment>
    );
  }
}

Website.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default Website;
