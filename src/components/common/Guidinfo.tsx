import React from 'react';
import styled, { css } from 'styled-components';

const ViewContainer = styled.div`
  font-size: 16px;
  line-height: 1.8rem;
  padding-left: 3rem;
  /* height: 700px; */
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 2px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #f50057;
    border-radius: 50px;
    width: 0px;
  }

  @media only screen and (max-width: 768px) {
    padding-left: 0;
    overflow: hidden;
    height: auto;

    h1 {
      padding: 0.5rem 0;
    }
    p {
      padding: 0.5rem 0;
    }
  }

  h1:nth-child(3) {
    padding-top: 1rem;
  }
`;

const GuidInfo = (props: any) => {
  return <ViewContainer>{props.children}</ViewContainer>;
};

export default GuidInfo;
