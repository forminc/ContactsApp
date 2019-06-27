import styled from "styled-components";
import colors from './colors';
export const ContactAppContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  color:${colors.fontColor1};
  font-family: 'Quicksand', sans-serif;
  ${props=> props.blur ? "filter:blur(10px); transform:scale(1.01)" : ""};
  transform:all 0.2s;
`;
