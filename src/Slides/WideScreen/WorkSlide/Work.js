import React, { Component } from 'react';
import styled from 'styled-components';
import TextContent from './TextContent';
import ImageContent from './ImageContent';

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  /* border: 1px dashed red; */
`;

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vh: 0,
      slideNumber: 0,
    };
    this.pageSplitTimes = 1.4;
    this.lastScrollTop = 0;
    this.scrollDirectionDown = true;
    this.handleScroll = this.handleScroll.bind(this);
    this.workDetails = [
      {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        techs: [''],
      },
      {
        number: '01',
        projectName: '',
        projectDesc: 'High-performance web apps with optimized UI/UX components seamlessly integrated with APIs.',
        projectType: 'Web APP',
        techs: ['React', 'Vue', 'API', 'MySQL'],
      },
      {
        number: '02',
        projectName: '',
        projectDesc: 'Responsive websites that seamlessly integrates with BC and NAV, offering E-commerce and quote functionality.',
        projectType: 'ECommerce',
        techs: ['Prestashop', 'DynamicWeb', 'eConSolutions'],
      },
      {
        number: '03',
        projectName: '',
        projectDesc: 'Powerful company profile websites that enhances SEO and enables efficient management of multiple sub-company websites.',
        projectType: 'Website',
        techs: ['Wordpress', 'Expression Engine2'],
      },
      {
        number: '04',
        projectName: '',
        projectDesc: 'Captivating web apps with unique content and concept, allowing for self-expression and creativity.',
        projectType: 'Personal Projects',
        techs: ['React', 'NextJS', 'Firebase', 'API'],
      },
      {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        techs: [''],
      },
    ];
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.setState(
      {
        vh: Math.round(
          window.document.documentElement.clientHeight * this.pageSplitTimes,
        ),
      },
    );
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const { body, documentElement } = event.srcElement;
    const { vh, slideNumber } = this.state;
    const scrollDistance = Math.max(body.scrollTop, documentElement.scrollTop);
    if (scrollDistance > this.lastScrollTop) {
      this.scrollDirectionDown = true;
    } else {
      this.scrollDirectionDown = false;
    }
    this.lastScrollTop = scrollDistance;
    // console.log(scrollDistance);

    if (Math.floor(scrollDistance / vh) !== slideNumber
      && slideNumber < this.workDetails.length - 1) {
      this.setState({ slideNumber: Math.floor(scrollDistance / vh) });
    } else if (slideNumber === this.workDetails.length - 1
      && (Math.floor(scrollDistance / vh) < slideNumber)) {
      this.setState({ slideNumber: Math.floor(scrollDistance / vh) });
    }
  }

  changeTextContentBasedOnScroll() {
    const { slideNumber } = this.state;
    const refresh = true;
    return (
      <TextContent
        number={this.workDetails[slideNumber].number}
        projectName={this.workDetails[slideNumber].projectName}
        projectDesc={this.workDetails[slideNumber].projectDesc}
        projectType={this.workDetails[slideNumber].projectType}
        techs={this.workDetails[slideNumber].techs}
        refreshToggle={refresh}
      />
    );
  }

  render() {
    return (
      <Container>
        {this.changeTextContentBasedOnScroll()}
        <ImageContent pageSplitTimes={this.pageSplitTimes} />
      </Container>
    );
  }
}

export default Work;
