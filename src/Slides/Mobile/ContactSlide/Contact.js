import React, { Component } from 'react';
import styled from 'styled-components';
import twitterImg from '../../../Assets/Images/Social/twitter.svg';
import githubImg from '../../../Assets/Images/Social/git.svg';
import mailImg from '../../../Assets/Images/Social/mail.svg';
import instaImg from '../../../Assets/Images/Social/insta.svg';
import dribbbleImg from '../../../Assets/Images/Social/dribbble.svg';
import linkedInImg from '../../../Assets/Images/Social/linkedin.svg';
import SocialLogo from './SocialLogo';
import device from '../../../Assets/Responsive/breakpoints';

const Container = styled.section`
    margin-top:20vh;
    height: 100vh;
    width:100%;
    /* border: 1px solid blue; */
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-content: flex-start;
    @media ${device.mobileS} {
    padding-left:60px;
    }
    @media ${device.mobileM} {
    padding-left:60px;
    }
    @media ${device.mobileL} {
    padding-left:60px;
    }
    @media ${device.tablet} {
    padding-left:90px;
    margin-bottom:90px;
    }
    @media ${device.laptop} {
    padding-left:120px;
    margin-bottom:120px;
    }
`;

const ContactTitle = styled.div`
  font-family: 'Ubuntu';
  color: #000;
  @media ${device.mobileS} {
    font-size: 40px;
  }
  @media ${device.mobileM} {
    font-size: 50px;
  }
  @media ${device.mobileL} {
    font-size: 60px;
  }
  @media ${device.tablet} {
    font-size: 90px;
  }
  @media ${device.laptop} {
    font-size: 95px;
  }
`;

const SocialMediaIcons = styled.div`
  /* border: 1px solid black; */
  z-index: 1;
  display: grid;
  grid-template: 80px 80px 80px / 1fr 1fr;
  @media ${device.mobileS} {
    margin-top: 60px;
    grid-gap: 40px;
  }
  @media ${device.mobileM} {
    margin-top: 60px;
    grid-gap: 60px;
  }
  @media ${device.mobileL} {
    margin-top: 60px;
    grid-gap: 70px;
  }
  @media ${device.tablet} {
    margin-top: 80px;
    grid-gap: 170px;
  }
  @media ${device.laptop} {
    margin-top: 120px;
    grid-gap: 200px;
  }
`;

class Contact extends Component {
  render() {
    return (
      <Container>
        <ContactTitle>CONTACT</ContactTitle>
        <SocialMediaIcons>
          <SocialLogo imgURL={githubImg} alternate="Github" redirectURL="https://github.com/rivanchandra" />
          <SocialLogo imgURL={mailImg} alternate="Mail" redirectURL="mailto:rivanchan@gmail.com" />
          <SocialLogo imgURL={instaImg} alternate="Instagram" redirectURL="https://www.instagram.com/rivan_chandra" />
          <SocialLogo imgURL={linkedInImg} alternate="Linkedin" redirectURL="https://www.linkedin.com/in/rivanchandra" />
        </SocialMediaIcons>
      </Container>
    );
  }
}

export default Contact;
