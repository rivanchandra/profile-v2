import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import dutaponsel from '../../../../Assets/Images/Ecommerce/dutaponsel.png';
import petcann from '../../../../Assets/Images/Ecommerce/petcann.png';
import urbanleaf from '../../../../Assets/Images/Ecommerce/urbanleaf.png';
import greenship from '../../../../Assets/Images/Ecommerce/greenship.png';

const Restaurant = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 15}%)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -120vh;
left:0vw;
/* border: 1px dashed red; */
width: 45vw;
`;

const Home = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 8}%) scale(0.9)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom:-75vh;
right: 9vw;
/* border: 1px dashed red; */
width: 45vw;
/* filter: blur(0.6px); */
`;

const AddFood = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 5}%) scale(0.7)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-60vh;
left:4vw;
position: absolute;
/* border: 1px dashed red; */
width: 45vw;
/* filter: blur(0.8px); */
`;

const AddRestaurant = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 2}%) scale(0.6)`,
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

class WhatsMyFoodImages extends Component {
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
    return (
      <React.Fragment>
        <AddFood src={dutaponsel} scroll={scrollPercent} alt="dutaponsel" />
        <AddRestaurant src={petcann} scroll={scrollPercent} alt="petcann" />
        <Home src={urbanleaf} scroll={scrollPercent} alt="urbanleaf" />
        <Restaurant src={greenship} scroll={scrollPercent} alt="greenship" />
      </React.Fragment>
    );
  }
}

WhatsMyFoodImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default WhatsMyFoodImages;
