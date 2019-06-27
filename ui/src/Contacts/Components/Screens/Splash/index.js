import React from 'react';
import {SplashScreenContainer,SplashScreenLogo,SplashScreenTitle} from './styles';

function SplashScreen(props){
    return(
        <SplashScreenContainer>
            <SplashScreenLogo/>
            <SplashScreenTitle>Contacts</SplashScreenTitle>
        </SplashScreenContainer>
    )
}

export default SplashScreen;