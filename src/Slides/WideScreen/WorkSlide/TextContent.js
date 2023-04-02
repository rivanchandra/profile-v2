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
width: 50%;
`;

const ProjectName = styled.div`
  font-family: 'Ubuntu';
  @media ${device.laptop} {
    font-size: 70px;
  }
  @media ${device.laptopL} {
    font-size: 80px;
  }
  @media ${device.desktop} {
    font-size: 120px;
  }
  /* border: 1px dashed black; */
`;

const ProjectDesc = styled.div`
  padding-top:2%;
  font-family: 'Ubuntu';
  @media ${device.laptop} {
    font-size: 25px;
  }
  @media ${device.laptopL} {
    font-size: 30px;
  }
  @media ${device.desktop} {
    font-size: 50px;
  }
  /* border: 1px dashed black; */
`;

const Tech = styled.div`
  padding-top:5%;
  font-family: 'Ubuntu';
  @media ${device.laptop} {
    font-size: 25px;
  }
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
  @media ${device.laptop} {
    font-size: 25px;
  }
  @media ${device.laptopL} {
    font-size: 30px;
  }
  @media ${device.desktop} {
    font-size: 58px;
  }
  /* border: 1px dashed black; */
  padding: 5%;
`;

const ProjectType = styled.div`
  font-family: 'Ubuntu';
  @media ${device.laptop} {
    font-size: 25px;
  }
  @media ${device.laptopL} {
    font-size: 30px;
  }
  @media ${device.desktop} {
    font-size: 58px;
  }
  /* border: 1px dashed black; */
  padding: 5%;
`;

const ProjectDetails = styled.div`
display: flex;
flex-flow: column nowrap;
/* border: 1px dashed black; */
width: 100%;
padding: 5%;
padding-left:10%;
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
}
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
      number, projectName, projectDesc, techs, projectType, refreshToggle,
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
            <ProjectName>
              <BlockTextReveal refreshToggle={refreshToggle} inline>
                {projectName}
              </BlockTextReveal>
            </ProjectName>
            <ProjectDesc>
              <BlockTextReveal refreshToggle={refreshToggle} inline={false}>
                {projectDesc}
              </BlockTextReveal>
            </ProjectDesc>
            <Tech>
              <BlockTextReveal refreshToggle={refreshToggle} inline>
                {techs.map(tech => (
                  <BlockTextChips key={tech} refreshToggle={refreshToggle} text={tech}>
                    {tech}
                  </BlockTextChips>
                ))}
              </BlockTextReveal>
            </Tech>
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
  projectName: PropTypes.string.isRequired,
  projectDesc: PropTypes.string.isRequired,
  projectType: PropTypes.string.isRequired,
  techs: PropTypes.array.isRequired,
  refreshToggle: PropTypes.bool.isRequired,
};

export default TextContent;
