import React,{useContext} from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Splash from '../Components/Pages/Splash';
import WelcomeSplash from '../Components/Pages/Welcome/Splash';
import WelcomeUserInfo from '../Components/Pages/Welcome/Info';

function ContactsRouter(props){
    return (<Router>
         <Route path="/pinEntry" exact component={Splash} />


      
         <Route path="/welcomeSplash" exact component={WelcomeSplash} />
         <Route path="/welcomeInfo" exact component={WelcomeUserInfo} />
         <Route path="/welcomePin" exact component={Splash} />
         <Route path="/welcomePinConfirm" exact component={Splash} />

  
        <Route path="/list" exact component={Splash}/>
        <Route path="/user/:id" exact component={Splash}/>

    </Router>)
}

export default ContactsRouter;

