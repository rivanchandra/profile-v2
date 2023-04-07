import React, { Component } from 'react';
import styled from 'styled-components';
import vhCheck from 'vh-check';
import TextContent from './TextContent';
// Website
import backinmotion from '../../../Assets/Images/Website/backinmotion.png';
import cantabile from '../../../Assets/Images/Website/cantabile.png';
// Ecommerce
import petcann from '../../../Assets/Images/Ecommerce/petcann.png';
import urbanleaf from '../../../Assets/Images/Ecommerce/urbanleaf.png';
// Personal
import lofsong from '../../../Assets/Images/Personal/lofsong.png';
import monthlyexpen from '../../../Assets/Images/Personal/monthlyexpen.png';
// WebApp
import digitime from '../../../Assets/Images/WebApp/digitime.png';
import booking from '../../../Assets/Images/WebApp/booking.png';

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  /* border: 1px dashed red; */
  height:380vh;
`;

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vh: 0,
      slideNumber: 0,
    };
    this.pageSplitTimes = 0.8;
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
        websites: [],
      },
      {
        number: '01',
        projectName: '',
        projectDesc: 'High-performance web apps with optimized UI/UX components seamlessly integrated with APIs.',
        projectType: 'Web APP',
        techs: ['React', 'Vue', 'API', 'MySQL'],
        websites: [
          { url: 'https://app.digitime.com.au', src: digitime, alt: 'digitime' },
          { url: 'https://www.backinmotion.com.au', src: booking, alt: 'booking' }],
      },
      {
        number: '02',
        projectName: '',
        projectDesc: 'Responsive websites that seamlessly integrates with BC and NAV, offering E-commerce and quote functionality.',
        projectType: 'ECommerce',
        techs: ['Prestashop', 'DynamicWeb', 'eConSolutions'],
        websites: [
          { url: 'https://petcann.com.au', src: petcann, alt: 'petcann' },
          { url: 'https://urbanleaf.com.au', src: urbanleaf, alt: 'urbanleaf' }],
      },
      {
        number: '03',
        projectName: '',
        projectDesc: 'Powerful company profile websites that enhances SEO and enables efficient management of multiple sub-company websites.',
        projectType: 'Website',
        techs: ['Wordpress', 'Expression Engine2'],
        websites: [
          { url: 'https://www.backinmotion.com.au', src: backinmotion, alt: 'backinmotion' },
          { url: 'http://www.cantabilemusicschool.com', src: cantabile, alt: 'cantabile' }],
      },
      {
        number: '04',
        projectName: '',
        projectDesc: 'Captivating web apps with unique content and concept, allowing for self-expression and creativity.',
        projectType: 'Personal Project',
        techs: ['React', 'NextJS', 'Firebase', 'API'],
        websites: [
          { url: 'https://lofsong.vercel.app', src: lofsong, alt: 'lofsong' },
          { url: 'https://monthly-expen-demo.web.app', src: monthlyexpen, alt: 'monthlyexpen' }],
      },
      {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        techs: [''],
        websites: [],
      },
    ];
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    const vhDiff = vhCheck().offset;
    this.setState(
      {
        vh: Math.round(
          (window.document.documentElement.clientHeight + vhDiff) * this.pageSplitTimes,
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
        websites={this.workDetails[slideNumber].websites}
        refreshToggle={refresh}
      />
    );
  }

  render() {
    return (
      <Container>
        {this.changeTextContentBasedOnScroll()}
      </Container>
    );
  }
}

export default Work;
