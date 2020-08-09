import React from 'react';
import styled from 'styled-components';

const HomeStyle = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  text-transform: uppercase;
  min-width: 700px;
  height: 70vh;
`;

const Home = () => {
  return (
    <HomeStyle>
      welcome our homepage!
      <br />
      we are async await!
    </HomeStyle>
  );
};

export default Home;
