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
bottom:-70vh;
left: 0vw;
/* border: 1px dashed red; */
width: 45vw;
`;

const Cantabile = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 2}%) scale(0.94)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -40vh;
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
bottom:-45vh;
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
bottom:-85vh;
right: 8vw;
position: absolute;
/* border: 1px dashed red; */
width: 50vw;
/* filter: blur(1.2px); */
`;

class ComingOrNotImages extends Component {
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
        <Backinmotion src={backinmotion} scroll={scrollPercent} alt="backinmotion" />
        <Cantabile src={cantabile} scroll={scrollPercent} alt="cantabile" />
        <Frostfence src={frostfence} scroll={scrollPercent} alt="frostfence" />
        <Carrotsolutions src={carrotsolutions} scroll={scrollPercent} alt="carrotsolutions" />
      </React.Fragment>
    );
  }
}

ComingOrNotImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default ComingOrNotImages;
