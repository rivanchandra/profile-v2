import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import beautify from '../../../../Assets/Images/Personal/beautify.png';
import lofsong from '../../../../Assets/Images/Personal/lofsong.png';
import monthlyexpen from '../../../../Assets/Images/Personal/monthlyexpen.png';
import personal from '../../../../Assets/Images/Personal/personal.png';


const Beautify = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 6}%)`,
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

const Lofsong = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 5}%)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom:-90vh;
right: 2vw;
transform-origin: right center;
/* border: 1px dashed red; */
width:75vw;
`;

const Monthlyexpen = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 3.5}%)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-100vh;
left:10vw;
transform-origin: left center;
position: absolute;
/* border: 1px dashed red; */
width:75vw;
`;

const Personal = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 2}%)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-110vh;
right: 10vw;
transform-origin: right center;
position: absolute;
/* border: 1px dashed red; */
width:75vw;
`;

class PersonalProjects extends Component {
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
        <a href="https://beauty-text.vercel.app" target="_blank" rel="noreferrer">
          <Beautify src={beautify} scroll={scrollPercent} alt="beautify" />
        </a>
        <a href="https://lofsong.vercel.app" target="_blank" rel="noreferrer">
          <Lofsong src={lofsong} scroll={scrollPercent} alt="lofsong" />
        </a>
        <a href="https://monthly-expen-demo.web.app" target="_blank" rel="noreferrer">
          <Monthlyexpen src={monthlyexpen} scroll={scrollPercent} alt="monthlyexpen" />
        </a>
        <a href="https://rivan-profile.vercel.app" target="_blank" rel="noreferrer">
          <Personal src={personal} scroll={scrollPercent} alt="personal" />
        </a>
      </React.Fragment>
    );
  }
}

PersonalProjects.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default PersonalProjects;
