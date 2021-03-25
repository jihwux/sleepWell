import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Container = styled.div`
  /* display: flex; */
  position: relative;
  height: 1200px;
  background-color: aliceblue;
`;

const MainContent = styled.div`
  position: absolute;
  top: 10%;
  height: 400px;
  background-color: aqua;
  padding: 1rem;

  p {
    padding: 1rem 0rem;
  }
`;

const Main = () => {
  return (
    <Container>
      <MainContent>
        <h2>안녕하세요.</h2>
        <h1>수면계산기</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
          dignissimos quod saepe vitae delectus assumenda reiciendis a, mollitia
          obcaecati omnis quae illo corporis corrupti tenetur nemo praesentium
          dolorum quisquam exercitationem?
        </p>
        <Link href="../calc/">
          <a>ss</a>
        </Link>
      </MainContent>
    </Container>
  );
};

export default Main;
