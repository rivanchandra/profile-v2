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
bottom: -30vh;
left:0vw;
/* border: 1px dashed red; */
width: 45vw;

&:hover {
  filter: brightness(0.6);
  transition: filter 0.5s ease-in-out;
}
`;

const Skyjed = styled.img.attrs({
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

&:hover {
  filter: brightness(0.6);
  transition: filter 0.5s ease-in-out;
}
`;

const Booking = styled.img.attrs({
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

&:hover {
  filter: brightness(0.6);
  transition: filter 0.5s ease-in-out;
}
`;

const Digitime = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 4}%) scale(0.9)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-85vh;
right: 5vw;
position: absolute;
/* border: 1px dashed red; */
width: 45vw;
/* filter: blur(1.2px); */

&:hover {
  filter: brightness(0.6);
  transition: filter 0.5s ease-in-out;
}
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
