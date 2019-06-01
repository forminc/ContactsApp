import styled from "styled-components";
import colors from '../../colors'
import constants from '../../constants'
export const AppBodyContainer = styled.div`
  background-color: ${colors.backgroundColor1};
  width: calc(100% - ${constants.sidebarWidth});
  height: 100%;
  box-shadow:0px 0px 5px 4px rgba(0,0,0,0.4);
`;
