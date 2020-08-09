import styled from "styled-components";

export const TypingInfo = styled.div`
  margin-top: 10px;

  input {
    width: ${props => props.length || "150px"};
    margin-bottom: 10px;
  }
`;
