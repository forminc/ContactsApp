import styled from "styled-components";
import colors from "../../../../colors";
export const PinInputContainer = styled.div`
  margin: 30px;
  display:flex;
  justify-content:center;
`;

export const PinBoxEmpty = styled.div`
  height:30px;
  width:20px;
  margin: 20px;
  border-bottom-style: solid;
  border-bottom-width:1px;
`;

export const PinBoxFull = styled(PinBoxEmpty)`
  background-color: ${colors.fontColor1};
`;
