import React from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import Link from 'next/link';
import palette from '../../styles/palette';

const Container = styled.div`
  /* display: flex; */
  width: 100%;
  position: relative;
  height: 1200px;
  background-color: gray;
`;

const MainContent = styled.div`
  position: absolute;
  top: 10%;
  /* height: 400px; */
  background-color: ${palette.gray_48};
  padding: 1rem;

  p {
    padding: 1rem 0rem;
  }

  h1 {
    font-size: 2rem;
    padding-bottom: 3rem;
  }
  h2 {
    font-size: 1.5rem;
    padding-bottom: 1rem;
  }
`;

const Button = styled.button`
  background-color: ${palette.black};
  padding: 1rem;
  border: 0;
  color: ${palette.white};
`;

const Main: NextPage = () => {
  return (
    <Container>
      <MainContent>
        <h2>조금 더 편한 아침을 위한</h2>
        <h1>수면계산기</h1>
        <p>아침에 일어날때 항상 피곤하셨나요?</p>
        <p>#꿀잠 #수면계산기</p>
        <Link href="../calc/">
          <Button>시작하기</Button>
        </Link>
      </MainContent>
    </Container>
  );
};

export default Main;
