import reset from 'styled-reset';
import styled, { createGlobalStyle, css } from 'styled-components';
import palette from './palette';

const globalStyle = css`
  ${reset};
  * {
    box-sizing: border-box;
  }

  a {
    color: ${palette.white};
    text-decoration: none;
  }
  body {
    background-color: ${palette.black};
    color: ${palette.white};
  }
`;

const GlobalStyle = createGlobalStyle`
  ${globalStyle};
`;

export default GlobalStyle;
