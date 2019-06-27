import styled from 'styled-components';
import colors from '../../colors';
export const AlertContainer = styled.div``;
export const AlertBackground = styled.div`
    display : ${props=> props.visibility? "block" : "none"};
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,0.5);
`;
export const AlertPopupContainer = styled.div`
    position:fixed;
    bottom:${props=> props.visibility? "0px" : "-100px"};
    height:100px;
    background-color:${colors.backgroundColor2};
    left:0;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    transition: all 0.5s;
`;
export const AlertText = styled.div`
    width:100%;
    color:${colors.fontColor1};
    text-align:center;
`;