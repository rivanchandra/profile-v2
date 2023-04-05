import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import dutaponsel from '../../../../Assets/Images/Ecommerce/dutaponsel.png';
import petcann from '../../../../Assets/Images/Ecommerce/petcann.png';
import urbanleaf from '../../../../Assets/Images/Ecommerce/urbanleaf.png';
import greenship from '../../../../Assets/Images/Ecommerce/greenship.png';

const Dutaponsel = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 8}%)`,
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

const Petcann = styled.img.attrs({
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

const Urbanleaf = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 3.5}%)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-80vh;
left:10vw;
transform-origin: left center;
position: absolute;
/* border: 1px dashed red; */
width:75vw;
/* filter: blur(0.8px); */
`;

const Greenship = styled.img.attrs({
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

class Ecommerce extends Component {
  render() {
    let { scrollPercent } = this.props;
    const {
      boxHeight, index, scrollHeight, screenHeight,
    } = this.props;
    const heighttoBeReducedinVH = ((boxHeight * index) - 100);
    const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
    const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight) + index - 1;
    // console.log('WMF scrollOffsetPercent ', scrollOffsetInPercent);
    scrollPercent -= scrollOffsetInPercent;
    if (scrollPercent > 0 && scrollPercent < 0.1) {
      console.log('WMF');
    }
    return (
      <React.Fragment>
        <a href="https://web.archive.org/web/20190802080207/http://dutaponsel.com/id/" target="_blank" rel="noreferrer">
          <Dutaponsel src={dutaponsel} scroll={scrollPercent} alt="dutaponsel" />
        </a>
        <a href="https://petcann.com.au" target="_blank" rel="noreferrer">
          <Petcann src={petcann} scroll={scrollPercent} alt="petcann" />
        </a>
        <a href="https://urbanleaf.com.au" target="_blank" rel="noreferrer">
          <Urbanleaf src={urbanleaf} scroll={scrollPercent} alt="urbanleaf" />
        </a>
        <a href="https://greenship.com.au" target="_blank" rel="noreferrer">
          <Greenship src={greenship} scroll={scrollPercent} alt="greenship" />
        </a>
      </React.Fragment>
    );
  }
}

Ecommerce.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default Ecommerce;
