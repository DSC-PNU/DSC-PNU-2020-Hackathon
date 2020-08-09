import styled from 'styled-components';

export const AppContainer = styled.main`
  width: 100%;
  height: 100vh;
  font-family: 'MaplestoryOTFLight';

  .menu-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid lightgray;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    z-index: 2;
    background: #ffffff;
    box-shadow: rgb(191, 199, 206) 0px 2px 5px 0.5px;

    & span {
      a {
        color: #9e9e9e;
      }
      width: 20%;
      min-width: 300px;
      margin-left: 30px;
      font-weight: bold;
      font-size: 25px;
    }
  }

  & > section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-top: 100px;
  }

  .login {
    width: 10%;
    min-width: 150px;
    height: 100%;
    position: fixed;
    left: 0;
    top: 100px;
  }

  .section-content {
    margin-left: 225px;
    width: 80%;
    height: 100%;
  }
`;
