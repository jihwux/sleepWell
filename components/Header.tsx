import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 100%;
  padding: 2rem;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <h2>꿀잠</h2>
        <div>
          <span>ios</span>
          <span>anroid</span>
        </div>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
