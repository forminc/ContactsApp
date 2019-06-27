import React,{useState} from 'react';
import Form from '../../common/Form';


function FormSampleScreen(){
    const [formData, setFormData] = useState({})
    const config={
        fields:[{
            type:"input",
            label:"Sample field"
        }]
    }
    return (
       <Form config={config} data={formData} setData={setFormData}/>
    )
}

export default FormSampleScreen