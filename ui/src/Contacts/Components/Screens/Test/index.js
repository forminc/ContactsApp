import React,{useState} from 'react';
import PinEntry from '../../common/PinEnter';


function TestScreen(){
    const [formData, setFormData] = useState({pin:""})
    return (
       <PinEntry data={formData} setData={setFormData}/>
    )
}

export default TestScreen