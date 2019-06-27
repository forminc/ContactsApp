import React,{useState,useEffect} from 'react';
import WelcomeSplashScreen from '../../../Screens/WelcomeSplash';
import {Redirect} from 'react-router-dom'

function Splash(){
    const [go, setGo] = useState("")
    useEffect(() => {
        setTimeout(()=>{
            setGo("Go Go Go");
        },1000);
    }, [])
    return (
        <React.Fragment>
            <WelcomeSplashScreen/>
            {go!=="" && <Redirect to="/welcomeInfo"/>}
        </React.Fragment>
    )
}

export default Splash;