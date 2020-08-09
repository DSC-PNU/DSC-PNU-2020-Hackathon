import styled from "styled-components";

export const SignupDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .ant-modal-title {
    font-size: 20px;
    font-weight: bold;
  }
  .title {
    font-size: 25px;
    margin-bottom: 10px;
    font-weight: bold;
  }

  .check-password {
    margin-top: -10px;
    font-size: 12px;
    color: red;
  }
  button {
    margin-top: 20px;
  }
`;
