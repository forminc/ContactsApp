import styled from 'styled-components';
import colors from '../../../colors';
import constants from './constants';

export const CandidHeaderContainer=styled.div`
    width:100%;
    height:${constants.height};
    margin:${constants.marginVertical} 0px;
    padding:${constants.paddingVertical} 70px;
    background-color:${colors.backgroundColor2};
    color:${colors.fontColor1};
    font-size:${constants.headingFontSize};
    display:flex;
    align-items:center;
    box-shadow:0px 2px 4px 0px rgba(0,0,0,0.5);
    font-weight:bold;
`;