import React, { useContext } from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import Link from 'next/link';
import { ThemeContext } from '../../pages/_app';
import { lightTheme, Theme } from '../../styles/theme';

interface ThemeProps {
  theme: Theme;
}

const Container = styled('div')<ThemeProps>`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const MainContent = styled.div`
  padding: 7rem 13rem;
  z-index: 1;
  @media only screen and (max-width: 768px) {
    padding: 2.5rem 1rem 2.5rem 2.5rem;
  }

  p {
    padding: 0.5rem 0rem;
    font-size: 16px;
  }

  h1 {
    font-size: 2rem;
    padding-bottom: 3rem;
  }
  h2 {
    font-size: 1.3rem;
    padding-bottom: 1rem;
  }
`;

const BackgroundContianer = styled('div')<ThemeProps>`
  background-color: ${({ theme }) => theme.body};
  position: absolute;
  bottom: 0;
  width: 100%;
  transition: color, background 0.25s ease-in;
`;

const BackgroundContent = styled('div')<ThemeProps>`
  z-index: 1;
  width: 100%;
  height: 600px;
  clip-path: polygon(100% 20%, 0% 100%, 100% 100%);
  background: linear-gradient(to right, #01c9ca 40%, #3886ff 100%);

  @media only screen and (max-height: 768px) {
    height: 380px;
  }

  ::before {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    background: linear-gradient(to right, #01c9ca 0%, #000 100%);
    transition: all 0.5s ease-in-out;
    opacity: ${({ theme }) => theme.mainBgOpacity};
  }
`;

const SunMoon = styled('div')<ThemeProps>`
  margin: 5rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.sunMoonBackground};
  box-shadow: ${({ theme }) => theme.sunMoon};
  transition: all 0.5s ease-in-out;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  animation: ${({ theme }) => theme.sunAmimation};

  @media only screen and (max-width: 768px) {
    margin: 3rem 3rem;
  }

  @keyframes sunrise {
    0% {
      box-shadow: none;
    }
  }

  @keyframes rays {
    0% {
      box-shadow: 0 0 0 0 #ffde0080, 0 0 0 20px #ffde0080, 0 0 0 40px #ffde0040, 0 0 0 60px #ffde0020,
        0 0 0 80px #ffde0010, 0 0 40px 100px #ffde0010;
    }
    100% {
      box-shadow: 0 0 0 20px #ffde0080, 0 0 0 40px #ffde0040, 0 0 0 60px #ffde0020, 0 0 0 80px #ffde0010,
        0 0 0 100px #ffde0000, 0 0 40px 100px #ffde0010;
    }
  }
`;

const StartButton = styled('button')<ThemeProps>`
  width: 100px;
  height: 40px;
  border-radius: 30px;
  font-size: 1rem;
  padding: 0rem;
  margin-top: 2.5rem;
  color: ${({ theme }) => (theme === lightTheme ? theme.mainColor : theme.body)};
  background: ${({ theme }) => theme.startBackground};
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);

  a {
    color: ${({ theme }) => (theme === lightTheme ? theme.mainColor : theme.mainColor)};
    transition: all 0.1s ease-in-out;
  }
  &:hover {
    transition: all 0.1s ease-in-out;
    filter: brightness(${({ theme }) => (theme === lightTheme ? '0.9' : '1.13')});
  }
`;

const Main: NextPage = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Container>
      <MainContent>
        <h2>조금 더 편한 아침을 위한</h2>
        <h1>수면 계산기</h1>
        <p>아침에 일어날 때 항상 피곤하셨나요?</p>
        <p>편하게 일어날 수 있는 시간을 계산해 보세요!</p>
        <StartButton theme={theme}>
          <Link href="../calc/">Start</Link>
        </StartButton>
      </MainContent>
      <SunMoon theme={theme} />
      <BackgroundContianer theme={theme}>
        <BackgroundContent theme={theme} />
      </BackgroundContianer>
    </Container>
  );
};

export default Main;
