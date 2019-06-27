import React,{useContext} from 'react';
import {MenubarContainer} from './styles';
import {Context} from '../../Store';

function Menubar(){
    const { state } = useContext(Context);
    let {showMenu,menuItems}=state.menu;
    return (
        <MenubarContainer showMenu={showMenu}>
            Menu Items
        </MenubarContainer>
    )
}
export default Menubar;