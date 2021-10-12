import React from 'react';
import styled from 'styled-components';

const IntroContainer = styled.div`
  font-size: 16px;
  line-height: 1.8rem;
  padding-left: 3rem;

  p:last-child {
    padding-top: 1.5rem;
    font-size: 14px;

    a {
      display: inline;
      color: pink;
      /* text-align: right; */
      /* align-items: right; */
    }
  }
`;

const GuidInfo = () => {
  return <IntroContainer></IntroContainer>;
};

export default GuidInfo;
