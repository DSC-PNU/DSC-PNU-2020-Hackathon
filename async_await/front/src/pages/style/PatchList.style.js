import styled from 'styled-components';

export const PatchDiv = styled.div`
  width: 100%;
  height: 80vh;
  .title {
    width: 100%;
    font-size: 40px;
    font-weight: bold;
  }

  ul {
    height: 100%;
    padding: 0;
    margin: 0;
    list-style: none;

    a {
      font-size: 20px;
      color: black;
    }
    a:hover {
      color: #63a4ff;
    }
    li {
      margin-top: 20px;
      margin-bottom: 20px;
      padding-top: 20px;
      border-top: 1px solid #e0e0e0;
    }
  }
`;
