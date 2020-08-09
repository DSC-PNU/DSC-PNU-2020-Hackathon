import styled from 'styled-components';

export const MenuForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  min-width: 400px;
  height: 9vh;
  margin-top: 20px;
  margin-bottom: 20px;

  a {
    color: black;
    font-weight: bold;
    width: 200px;
    padding-right: 20px;
    :hover {
      color: #63a4ff;
    }
  }
`;
