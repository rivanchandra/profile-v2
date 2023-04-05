import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import digitime from '../../../../Assets/Images/WebApp/digitime.png';
import booking from '../../../../Assets/Images/WebApp/booking.png';
import skyjed from '../../../../Assets/Images/WebApp/skyjed.png';
import yearglance from '../../../../Assets/Images/WebApp/yearglance.png';


const Digitime = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 10}%)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -60vh;
transform-origin: left center;
left:2vw;
/* border: 1px dashed red; */
width:75vw;
`;

const Booking = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 5}%)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom:-75vh;
right: 2vw;
transform-origin: right center;
/* border: 1px dashed red; */
width:75vw;
/* filter: blur(0.6px); */
`;

const Skyjed = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 3.5}%)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-85vh;
left:10vw;
transform-origin: left center;
position: absolute;
/* border: 1px dashed red; */
width:75vw;
/* filter: blur(0.8px); */
`;

const Yearglance = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 2}%)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-95vh;
right: 10vw;
transform-origin: right center;
position: absolute;
/* border: 1px dashed red; */
width:75vw;
/* filter: blur(1.2px); */
`;

class WebApp extends Component {
  render() {
    let { scrollPercent } = this.props;
    const {
      boxHeight, index, scrollHeight, screenHeight,
    } = this.props;
    const heighttoBeReducedinVH = ((boxHeight * index) - 100);
    const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
    const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight);
    console.log('scrollPercent ', scrollPercent);
    scrollPercent -= scrollOffsetInPercent;
    return (
      <React.Fragment>
        <a href="https://app.digitime.com.au" target="_blank" rel="noreferrer">
          <Digitime src={digitime} scroll={scrollPercent} alt="digitime" />
        </a>
        <a href="https://www.backinmotion.com.au" target="_blank" rel="noreferrer">
          <Booking src={booking} scroll={scrollPercent} alt="booking" />
        </a>
        <a href="https://www.skyjed.com" target="_blank" rel="noreferrer">
          <Skyjed src={skyjed} scroll={scrollPercent} alt="skyjed" />
        </a>
        <a href="https://app.yearglance.com" target="_blank" rel="noreferrer">
          <Yearglance src={yearglance} scroll={scrollPercent} alt="yearglance" />
        </a>
      </React.Fragment>
    );
  }
}

WebApp.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default WebApp;
