import React, { Component } from 'react';
import styled from 'styled-components';
import NameReveal from './NameReveal';
import TitleReveal from './TitleReveal';

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height:100vh;
  width:100%;
  /* background-color: white; */
  /* border: 1px solid blue; */
`;

class NameAndJobTitle extends Component {
  render() {
    return (
      <Container>
        <NameReveal text="Rivan Chandra" fontFam="'Poppins', sans-serif" timeDelay={500} />
        <br />
        <TitleReveal text="Solution Developer" fontFam="'Ubuntu', sans-serif" timeDelay={1300} />
      </Container>
    );
  }
}

export default NameAndJobTitle;
