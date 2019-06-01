import styled from "styled-components";
import colors from "../../../../colors";
import constants from './constants';
export const FormPaginatorContainer = styled.div`
  width: 100%;
  display:flex;
  justify-content:flex-end;
  align-items:center;
  height:${constants.paginatorHeight};
`;

export const PaginatorButton = styled.div`
  background-color: ${colors.fontColor1};
  height: 12px;
  width: 12px;
  border-radius: 50%;
  cursor: pointer;
  user-select: none;
  margin: 20px 10px;
  opacity: 0.5;
  cursor:pointer;
`;

export const ActivePaginatorButton = styled(PaginatorButton)`
  height: 20px;
  width: 20px;
  opacity: 0.75;
`;

export const ArrowPaginatorButton = styled(PaginatorButton)`
  height: 25px;
  width: 25px;
  background-color: ${colors.backgroundColor2};
  color: ${colors.fontColor1};
  border-width: 1px;
  border-style: solid;
  opacity: 1;
`;
