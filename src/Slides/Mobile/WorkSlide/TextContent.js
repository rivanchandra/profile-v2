import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import device from '../../../Assets/Responsive/breakpoints';

const TextContainer = styled.section`
position: fixed;
top:0;
left:0;
display: flex;
flex-flow: column nowrap;
/* border: 1px dashed black; */
height:100vh;
width: 100%;
`;

// const ProjectName = styled.div`
//   font-family: 'Ubuntu';
//   @media ${device.mobileS} {
//     font-size: 40px;
//   }
//   @media ${device.mobileM} {
//     font-size: 45px;
//   }
//   @media ${device.mobileL} {
//     font-size: 50px;
//   }
//   @media ${device.tablet} {
//     font-size: 60px;
//   }
//   @media ${device.laptop} {
//     font-size: 90px;
//   }
//   /* border: 1px dashed black; */
// `;

const ProjectDesc = styled.div`
  padding-top:2%;
  font-family: 'Ubuntu';
  @media ${device.laptopL} {
    font-size: 30px;
  }
  @media ${device.desktop} {
    font-size: 50px;
  }
  /* border: 1px dashed black; */
`;

const MyRole = styled.div`
  // padding-top:5%;
  font-family: 'Ubuntu';
  @media ${device.laptopL} {
    font-size: 30px;
  }
  @media ${device.desktop} {
    font-size: 50px;
  }
  /* border: 1px dashed black; */
`;

const ProjectID = styled.div`
  font-family: 'Ubuntu';
  @media ${device.laptopL} {
    font-size: 30px;
  }
  @media ${device.desktop} {
    font-size: 58px;
  }
  /* border: 1px dashed black; */
  padding-top: 5%;
  padding-left: 5%;
  padding-right: 5%;
`;

const ProjectType = styled.div`
  font-family: 'Ubuntu';
  @media ${device.laptopL} {
    font-size: 30px;
  }
  @media ${device.desktop} {
    font-size: 58px;
  }
  /* border: 1px dashed black; */
  padding-left: 5%;
  padding-right: 5%;
`;

const ProjectDetails = styled.div`
display: flex;
flex-flow: column nowrap;
/* border: 1px dashed black; */
width: 100%;
padding-left: 5%;
padding-right: 5%;
`;


const ProjectDetailsContainer = styled.div`
display: flex;
flex-flow: column nowrap;
align-items: center;
/* border: 2px solid black; */
padding-top:5%;
height: 100%;
`;

const appearText = () => keyframes`
0%{
    left: -100%;
}
50%{
    left:-50%;
}
100%{
    left:0;
}
`;

let BlockTextReveal = styled.span`
`;

const BlockTextRevealQuick = styled.span`
display:${props => (props.inline ? 'inline' : 'block')};
color: #222;
animation: ${appearText} 0.5s linear forwards;
animation-delay: 0s;
position: relative;
`;

const BlockTextRevealNoAnim = styled.span`

`;

const BlockTextChips = styled.span`
display: ${props => (props.text ? 'inline-block' : 'none')};
background: #383838;
color: white;
padding: 5px 12px;
border-radius: 32px;
font-size: 13px;
margin-right: 5px;

&:hover{
  background: #1a1a1a;
}
`;

const BlockImages = styled.span`
`;

class TextContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshBlock: false,
    };
    this.refresh = this.refresh.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.refresh(nextProps);
  }

  refresh(nextProps) {
    const { refreshToggle } = nextProps;
    if (refreshToggle) {
      BlockTextReveal = BlockTextRevealNoAnim;
      this.setState({ refreshBlock: true },
        () => {
          BlockTextReveal = BlockTextRevealQuick;
          this.setState({ refreshBlock: false });
        });
    }
  }

  render() {
    const {
      number, projectDesc, techs, websites, projectType, refreshToggle,
    } = this.props;
    return (
      <TextContainer>
        <ProjectID>
          <BlockTextReveal refreshToggle={refreshToggle} inline>
            {number}
          </BlockTextReveal>
        </ProjectID>
        <ProjectDetailsContainer>
          <ProjectDetails>
            {/* <ProjectName>
              <BlockTextReveal refreshToggle={refreshToggle} inline>
                {projectName}
              </BlockTextReveal>
            </ProjectName> */}
            <MyRole>
              <BlockTextReveal refreshToggle={refreshToggle} inline>
                {techs.map(tech => (
                  <BlockTextChips key={tech} refreshToggle={refreshToggle} text={tech}>
                    {tech}
                  </BlockTextChips>
                ))}
              </BlockTextReveal>
            </MyRole>
            <ProjectDesc>
              <BlockTextReveal refreshToggle={refreshToggle} inline={false}>
                {projectDesc}
              </BlockTextReveal>
            </ProjectDesc>
            <BlockImages refreshToggle={refreshToggle}>
              {websites.map(website => (
                <div>
                  <a href={website.url} target="_blank" rel="noreferrer">
                    <img src={website.src} alt={website.alt} style={{ width: '80vw' }} />
                  </a>
                </div>
              ))}
            </BlockImages>
          </ProjectDetails>
        </ProjectDetailsContainer>

        <ProjectType>
          <BlockTextReveal refreshToggle={refreshToggle} inline>
            {projectType}
          </BlockTextReveal>
        </ProjectType>
      </TextContainer>
    );
  }
}

TextContent.propTypes = {
  number: PropTypes.string.isRequired,
  // projectName: PropTypes.string.isRequired,
  projectDesc: PropTypes.string.isRequired,
  projectType: PropTypes.string.isRequired,
  techs: PropTypes.array.isRequired,
  websites: PropTypes.array.isRequired,
  refreshToggle: PropTypes.bool.isRequired,
};

export default TextContent;
