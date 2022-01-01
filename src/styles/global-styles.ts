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
    startBackground: string;
    mainBgOpacity: string;
    pickerToolBarText: string;
    pickClockText: string;
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
        color: ${({ theme }) => theme.text};

    }
    ol, ul, li {
        list-style: none;
    }
    a {
        display: block;
        text-decoration: none;
        cursor: pointer;
        color: ${({ theme }) => theme.text};
        transition: all 0.5s ease-in-out;
    }
    img {
        width: 100%;
        height: 100%;
    }
    .MuiTab-root {
        color: inherit;
        transition: all 0s ease-in-out;
    }
    .MuiClockPointer-thumb {
        border: 16px solid #f50057 !important;
    }
    
    .MuiClockPointer-root {
        background-color : #f50057 !important;
    }
    .MuiClock-pin {
        background-color : #f50057 !important;
    }
    .css-1t4i7pk-MuiButtonBase-root-MuiButton-root{
        background-color: #f50057 !important;
        &:hover {
        background-color: #b33662 !important;
        }
    }
    .css-4jkopv-MuiIconButton-label {
        color: ${({ theme }) => theme.text};
    }
    .css-1h08vn0-MuiButtonBase-root-MuiTab-root.Mui-selected {
        color: #f50057 !important;
    }
    .css-1f3wfo0-MuiButtonBase-root-MuiTab-root.Mui-selected {
        color: #f50057 !important;
    }
    .MuiPickersStaticWrapper-root {
        background: ${({ theme }) => theme.body} !important;
        transition: all 0.5s ease-in-out;
    }
    .MuiClockNumber-root {
        color: ${({ theme }) => theme.pickClockText};

    }
    .MuiClockNumber-root.Mui-selected {
        color: #fff !important;

    }
    .MuiPickersToolbarText-root.Mui-selected {
        color: ${({ theme }) => theme.text};
    }
    .MuiPickersToolbarText-root {
        color: ${({ theme }) => theme.pickerToolBarText};
        
    }
    .css-1hbyad5-MuiTypography-root {
        color: #7c7c7c;

    }
`;
