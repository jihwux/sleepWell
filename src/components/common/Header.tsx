import React, { useContext } from 'react';
import Image from 'next/image';

import PlayStoreLogo from '../../public/playStore.png';
import AppstoreLogo from '../../public/appStore.png';
import Link from 'next/link';
import styled from 'styled-components';
import DarkModeToggle from './DarkModeToggle';
import { ThemeContext } from '../../pages/_app';
import { lightTheme, Theme } from '../../styles/theme';
import { useMediaQuery } from 'react-responsive';

interface NavProps {
  navBar: string;
}
const NavContainer = styled('nav')<NavProps>`
  width: 100%;
  height: 63px;
  display: flex;
  /* padding: 3rem; */
  padding: 3rem 13rem;

  @media only screen and (max-width: 768px) {
    padding: 3rem;
  }

  justify-content: center;
  align-items: center;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.07);
  background: ${({ navBar }) => navBar};
  transition: all 0.5s ease-in-out;
`;

const NavContentContainer = styled.div`
  width: 100%;
  height: 100%;
  /* margin-left: rem; */
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

  @media only screen and (max-width: 768px) {
    font-size: 1.5rem;
  }

  font-weight: 900;
  color: ${({ color }) => color};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
`;

const InfoContainer = styled.div`
  width: 250px;
  /* height: 100%; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  transition: all 0.5s ease-in-out;
`;

interface ThemeProps {
  theme: Theme;
}

const PlayStore = styled('button')<ThemeProps>`
  border-radius: 30px;
  font-size: 14px;
  color: ${({ theme }) => theme.text};
`;

const Appstore = styled('button')<ThemeProps>`
  border-radius: 30px;
  font-size: 14px;
  color: ${({ theme }) => theme.text};
`;

function Expected() {
  alert('2월 중 출시 예정입니다!');
}

export default function Navigation() {
  const { theme } = useContext(ThemeContext);
  const isPc = useMediaQuery({
    query: '(min-width: 1028px)',
  });
  return (
    <NavContainer navBar={theme.navBar}>
      <NavContentContainer>
        <TitleContainer color={theme.mainColor}>
          <Link href="/">
            <a>꿀잠</a>
          </Link>
        </TitleContainer>
        <DarkModeToggle />
        {isPc && (
          <InfoContainer>
            <PlayStore theme={theme}>
              <Image
                onClick={Expected}
                src={PlayStoreLogo}
                alt="Appstore"
                width={54}
                height={54}
                placeholder="blur"
                // blurDataURL={PlayStoreLogo}
              />
            </PlayStore>
            <Appstore>
              <Image
                onClick={Expected}
                src={AppstoreLogo}
                alt="Appstore"
                width={44}
                height={44}
                placeholder="blur"
                // blurDataURL={PlayStoreLogo}
              />
            </Appstore>
          </InfoContainer>
        )}
      </NavContentContainer>
    </NavContainer>
  );
}
