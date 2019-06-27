import React,{useState} from 'react';
import PinEntry from '../../common/PinEnter';


function PinEntryScreen(){
    const [formData, setFormData] = useState({pin:""})
    return (
       <PinEntry data={formData} setData={setFormData}/>
    )
}

export default PinEntryScreen