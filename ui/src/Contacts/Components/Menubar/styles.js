import styled from 'styled-components';
import colors from '../../colors';
import constants from '../../constants'
export const MenubarContainer= styled.div`
    background-color:${colors.backgroundColor2};
    width:${constants.sidebarWidth};
    height:100%;
    position:fixed;
    left:${props=>props.showMenu?"0":"-"+constants.sidebarWidth};
`;