import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import beautify from '../../../../Assets/Images/Personal/beautify.png';
import lofsong from '../../../../Assets/Images/Personal/lofsong.png';
import monthlyexpen from '../../../../Assets/Images/Personal/monthlyexpen.png';
import personal from '../../../../Assets/Images/Personal/personal.png';

const Beautify = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 10}%) scale(0.8)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -90vh;
right:8vw;
/* border: 1px dashed red; */
width: 45vw;
`;

const Lofsong = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 8}%) scale(0.9)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom:-45vh;
right: 2vw;
/* border: 1px dashed red; */
width: 45vw;
/* filter: blur(0.6px); */
`;

const Monthlyexpen = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 5}%) scale(0.9)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-65vh;
left:2vw;
position: absolute;
/* border: 1px dashed red; */
width: 45vw;
/* filter: blur(0.8px); */
`;

const Personal = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 2}%) scale(0.8)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-75vh;
right: 5vw;
position: absolute;
/* border: 1px dashed red; */
width: 45vw;
/* filter: blur(1.2px); */
`;

class TeslaImages extends Component {
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
        <Beautify src={beautify} scroll={scrollPercent} alt="beautify" />
        <Lofsong src={lofsong} scroll={scrollPercent} alt="lofsong" />
        <Monthlyexpen src={monthlyexpen} scroll={scrollPercent} alt="monthlyexpen" />
        <Personal src={personal} scroll={scrollPercent} alt="personal" />
      </React.Fragment>
    );
  }
}

TeslaImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default TeslaImages;
