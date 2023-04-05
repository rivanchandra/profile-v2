import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import backinmotion from '../../../../Assets/Images/Website/backinmotion.png';
import cantabile from '../../../../Assets/Images/Website/cantabile.png';
import frostfence from '../../../../Assets/Images/Website/frostfence.png';
import carrotsolutions from '../../../../Assets/Images/Website/carrotsolutions.png';


const Backinmotion = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 8}%)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -80vh;
transform-origin: left center;
left:2vw;
/* border: 1px dashed red; */
width:75vw;
`;

const Cantabile = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 6}%)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -90vh;
transform-origin: right center;
right:2vw;
/* border: 1px dashed red; */
width:75vw;
`;

const Frostfence = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 3.5}%)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -100vh;
transform-origin: right center;
right:12vw;
/* border: 1px dashed red; */
width:75vw;
`;

const Carrotsolutions = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 2}%)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -110vh;
transform-origin: right center;
right:5vw;
/* border: 1px dashed red; */
width:75vw;
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
