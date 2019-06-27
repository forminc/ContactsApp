import React,{useState} from 'react'
import NewUserFormScreen from '../../../Screens/NewUserForm';

function onSubmit(userData){
    alert("Haha");
}

function WelcomeUserInfo(props){
    const [userData, setUserData] = useState({})
    return (
        <NewUserFormScreen data={userData} setData={setUserData} onSubmit={()=>{onSubmit(userData)}}/>
    )
}
export default WelcomeUserInfo;