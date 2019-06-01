import React from 'react';
import {CandidHeaderContainer} from './styles';

function Header(props){
    return (
        <CandidHeaderContainer>
            {props.children}
        </CandidHeaderContainer>
    )
}

export default Header;