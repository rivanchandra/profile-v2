import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import digitime from '../../../../Assets/Images/WebApp/digitime.png';
import booking from '../../../../Assets/Images/WebApp/booking.png';
import skyjed from '../../../../Assets/Images/WebApp/skyjed.png';
import yearglance from '../../../../Assets/Images/WebApp/yearglance.png';


const Yearglance = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 15}%)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -90vh;
left:0vw;
/* border: 1px dashed red; */
width: 45vw; 
`;

const Skyjed = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 8}%) scale(0.9)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom:-95vh;
right: 2vw;
/* border: 1px dashed red; */
width: 45vw;
/* filter: blur(0.6px); */
`;

const Booking = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 5}%) scale(0.7)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-95vh;
left:2vw;
position: absolute;
/* border: 1px dashed red; */
width: 45vw;
/* filter: blur(0.8px); */
`;

const Digitime = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 2}%) scale(0.8)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-85vh;
right: 5vw;
position: absolute;
/* border: 1px dashed red; */
width: 45vw;
/* filter: blur(1.2px); */
`;

class VoistrapImages extends Component {
  render() {
    let { scrollPercent } = this.props;
    const {
      boxHeight, index, scrollHeight, screenHeight,
    } = this.props;
    const heighttoBeReducedinVH = ((boxHeight * index) - 100);
    const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
    const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight);
    scrollPercent -= scrollOffsetInPercent;
    return (
      <React.Fragment>
        <Digitime src={digitime} scroll={scrollPercent} alt="digitime" />
        <Booking src={booking} scroll={scrollPercent} alt="booking" />
        <Skyjed src={skyjed} scroll={scrollPercent} alt="skyjed" />
        <Yearglance src={yearglance} scroll={scrollPercent} alt="yearglance" />
      </React.Fragment>
    );
  }
}

VoistrapImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default VoistrapImages;
