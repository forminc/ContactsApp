import styled from 'styled-components';
import constants from './constants'
import colors from '../../../../../colors';

export const StyledInput=styled.input`
    background-color:${colors.textBackgroundColor};
    color:${colors.textColor};
    border-color:${colors.fontColor1};
    height:${constants.inputHeight}
    border-width:1px;
    border-style:solid;
    border-radius:5px;
    width:100%;
`;
