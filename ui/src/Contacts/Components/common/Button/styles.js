import styled from 'styled-components';
import colors from '../../../colors';
import constants from './constants';
export const ButtonContainer=styled.span`
    border-width:3px;
    border-style:solid;
    color:${colors.fontColor1};
    font-size:${constants.fontSize};
    padding:${constants.paddingVertical} ${constants.paddingHorizontal};
`;