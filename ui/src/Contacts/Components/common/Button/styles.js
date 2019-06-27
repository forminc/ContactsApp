import styled from 'styled-components';
import colors from '../../../colors';
import constants from './constants';
export const ButtonContainer=styled.div`
    border-width:3px;
    border-style:solid;
    color:${colors.fontColor1};
    font-size:${constants.fontSize};
    user-select:none;
    cursor:pointer;
    height:${constants.height};
    box-sizing:border-box;
    transition : all 0.2s;
    :hover{
        color:${colors.backgroundColor1};
        background-color:${colors.fontColor1};
    }
    padding-left:20px;
    padding-right:20px;
    display:flex;
    justify-content:center;
    align-items:center;
`;

