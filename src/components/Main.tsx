import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.main`
  width: 100%;
  height: 90vh;
  font-size: 3rem;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Main() {
  return <MainContainer>React Boilerplate with TypeScript</MainContainer>;
}
