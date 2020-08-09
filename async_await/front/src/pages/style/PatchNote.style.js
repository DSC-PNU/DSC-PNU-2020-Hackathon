import styled from 'styled-components';

export const PatchNoteStyle = styled.section`
  width: 100%;
  background: ${(props) => (props.name === 'lol' ? '#000913' : '#ffffff')};
  padding: 0 30px;
  color: white;
  & > div {
    color: ${(props) => (props.name === 'lol' ? 'white' : 'black')};
    font-size: 20px;
  }
  & h4 {
    color: white;
  }
`;
