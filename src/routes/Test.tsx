import React from 'react';
import styled from 'styled-components';
import DarkModeToggle from '../components/DarkModeToggle';
import Navigation from '../components/Navigation';
import Test from '../components/Test';

const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Home() {
  return (
    <HomeContainer>
      <Navigation />
      <DarkModeToggle />
      <Test />
    </HomeContainer>
  );
}
