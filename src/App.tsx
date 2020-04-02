import React, { Component } from 'react';
import { Header, NameCard,SelectedCard } from "./components";
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
  justify-items:center;
  padding: 10% 21%;
`


class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: '100vh', backgroundColor: '#7b26c3' }}>
        <Header />
        <Container>
          <NameCard />
          <SelectedCard />
        </Container>
      </div>
    );
  }
}

export default App;
