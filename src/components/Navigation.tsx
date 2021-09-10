import React, { useContext  } from 'react';
import styled from 'styled-components';
import DarkModeToggle from './DarkModeToggle';
import { ThemeContext } from '../App';
import { lightTheme, Theme } from '../theme';
import {Link} from 'react-router-dom';

interface NavProps {
  navBar: string;
}

const NavContainer = styled('nav')<NavProps>`
  width: 100%;
  height: 63px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.07);
  background: ${({ navBar }) => navBar};
  transition: all 0.5s ease-in-out;
`;

const NavContentContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.5s ease-in-out;
`;

interface ColorProps {
  color: string;
}

const TitleContainer = styled('header')<ColorProps>`
  height: 100%;
  font-size: 2rem;
  font-weight: 900;
  color: ${({ color }) => color};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
`;

const InfoContainer = styled.div`
  width: 250px;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  transition: all 0.5s ease-in-out;
`;

interface ThemeProps {
  theme: Theme;
}

const LoginButton = styled('button')<ThemeProps>`
  width: 90px;
  height: 40px;
  border-radius: 30px;
  font-size: 14px;
  border: 1px solid #fcfcfc;
  color: ${({ theme }) => theme.text};
  &:hover {
    background: #fcfcfc;
    color: ${({ theme }) =>
      theme === lightTheme ? theme.mainColor : theme.body};
    transition: all 0.1s ease-in-out;
  }
`;

const RegisterButton = styled('button')<ThemeProps>`
  width: 90px;
  height: 40px;
  border-radius: 30px;
  font-size: 14px;
  border: 1px solid #fcfcfc;
  color: ${({ theme }) => theme.text};
  &:hover {
    background: #fcfcfc;
    color: ${({ theme }) =>
      theme === lightTheme ? theme.mainColor : theme.body};
    transition: all 0.1s ease-in-out;
  }
`;

export default function Navigation() {
  const { theme } = useContext(ThemeContext);
  return (
    <NavContainer navBar={theme.navBar}>
      <NavContentContainer>
        <TitleContainer color={theme.mainColor}>React</TitleContainer>
        <DarkModeToggle />
        <InfoContainer>
          <LoginButton theme={theme}>
          <Link to="./Test" >
            로그인
          </Link>
            </LoginButton>
          <RegisterButton theme={theme}>회원가입</RegisterButton>
          
        </InfoContainer>
      </NavContentContainer>
    </NavContainer>
  );
}
