import React, { Component } from 'react';
import { Header, NameCard } from "./components";
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
  justify-items:center;
  padding: 5% 30%;
`


class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: '100vh', backgroundColor: '#7b26c3' }}>
        <Header />
        <Container>
          <NameCard />
          <NameCard />
        </Container>
      </div>
    );
  }
}

export default App;
