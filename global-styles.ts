import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

interface ThemeInterface {
  theme: {
    body: string;
    text: string;
    toggleBorder: string;
    toggleBackground: string;
    mainColor: string;
    navBar: string;
  };
}

export const GlobalStyle = createGlobalStyle<ThemeInterface>`
    @font-face { font-family: 'ghanachoco'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@1.0/ghanachoco.woff') format('woff'); font-weight: normal; font-style: normal; }
    ${reset}
    * {
        box-sizing: border-box;
    }
    body {
        font-family: 'NanumSquare', sans-serif;
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        transition: all 0.5s ease-in-out;
    }
    button {
        background: none;
        cursor: pointer;
        border: none;
        outline: none;
        transition: all 0.5s ease-in-out;
    }
    ol, ul, li {
        list-style: none;
    }
    a {
        text-decoration: none;
        cursor: pointer;
    }
    img {
        width: 100%;
        height: 100%;
    }
`;
