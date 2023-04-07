import React, { Component } from 'react';
import styled from 'styled-components';
import device from '../../Assets/Responsive/breakpoints';

const Container = styled.section`
    height: 100vh;
    width:100%;
    /* border: 1px solid blue; */
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-content: flex-start;
    @media ${device.mobileS} {
    padding-left:15px;
    }
    @media ${device.mobileM} {
    padding-left:15px;
    }
    @media ${device.mobileL} {
    padding-left:30px;
    }
    @media ${device.tablet} {
    padding-left:3px;
    }
    @media ${device.laptop} {
    padding-left:60px;
    }
`;

const SkillsTitle = styled.div`
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

const SkillsList = styled.div`
  font-family: 'Ubuntu';
  z-index: 1;
  
  @media ${device.mobileS} {
    margin-top: 30px;
    font-size: 20px;
  }
  @media ${device.mobileM} {
    margin-top: 35px;
    font-size: 23px;
  }
  @media ${device.mobileL} {
    margin-top: 35px;
    font-size: 25px;
  }
  @media ${device.tablet} {
    margin-top: 45px;
    font-size: 35px;
  }
  @media ${device.laptop} {
    margin-top: 60px;
    font-size: 45px;
  }
`;

class Skills extends Component {
  render() {
    return (
      <Container>
        <SkillsTitle>SKILLS</SkillsTitle>
        <SkillsList>
          <div>
            HTML/CSS/JS
            <br />
            ReactJS
            <br />
            NEXTJS
            <br />
            <br />
            Design system
            <br />
            Responsive & adaptive Design
            <br />
            Performance optimization
            <br />
            <br />
            Communication & collaboration
            <br />
            Leadership & mentorship
            <br />
            User experience
            <br />
            <br />
            LINQ
            <br />
            REST API
            <br />
            SQL
            <br />
          </div>
        </SkillsList>
      </Container>
    );
  }
}

export default Skills;
