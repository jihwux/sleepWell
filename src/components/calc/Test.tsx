import React from 'react';
import { useRouter } from 'next/router';

import styled from 'styled-components';

const Container = styled.footer`
  width: 100%;
  height: 53px;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
  .footer-button {
    font-size: 32px;
    width: 32px;
    height: 32px;
    border-radius: 5px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding: 0;
    line-height: 0;
    outline: none;
  }
`;

const Footer: React.FC = () => {
  const router = useRouter();

  const isMain = router.pathname === '/';
  return (
    <Container>
      <button type="button" className="footer-button" onClick={() => router.push('/todo/add/')}>
        {isMain ? '+' : '-'}
      </button>

      <a href="/todo/add/">sdsad</a>
    </Container>
  );
};

export default Footer;
