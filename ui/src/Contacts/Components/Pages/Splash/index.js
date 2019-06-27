import React,{useState,useEffect} from 'react';
import SplashScreen from '../../Screens/Splash';
import {Redirect} from 'react-router-dom'

function decideNext(){
    let currentStorageData=localStorage.getItem('form-contacts');
    if(!currentStorageData){
        return "/welcomeSplash";
    }
    else{
        return "/pinEntry";
    }
}

function Splash(){
    const [showNext, setShowNext] = useState(false)
    useEffect(() => {
      setTimeout(()=>{
          setShowNext(true);
      },1000)
    }, []);
    return (
        <React.Fragment>
            <SplashScreen/>
            {showNext && <Redirect to={decideNext()}/>}
        </React.Fragment>
    )
}

export default Splash;