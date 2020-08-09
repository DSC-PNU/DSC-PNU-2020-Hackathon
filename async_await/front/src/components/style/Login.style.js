import styled from "styled-components";

export const LogInForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 30%;
  min-width: 200px;

  .typeInfo {
    width: 30%;
    min-width: 200px;
    margin-bottom: 20px;
  }

  .signup {
    width: 20%;
    min-width: 60px;
    margin-top: 5px;
    font-size: 11px;
    color: #aeaeae;
    cursor: pointer;
  }

  button {
    width: 30%;
    min-width: 100px;
    margin-top: 10px;
  }
  .ant-btn {
    background: #63a4ff;
    border-color: #63a4ff;
  }
`;
