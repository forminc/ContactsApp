import React from 'react';
import Form from '../../common/Form';


function NewUserFormScreen(props){
    let {data,setData,onSubmit} = props;
    const config={
        fields:[{
            type:"input",
            key:"name",
            label:"Name",
        },{
            type:"input",
            key:"email",
            label:"Email",
        },{
            type:"input",
            key:"number",
            label:"Phone Number",
        }]
    }
    return (
       <Form heading={"Enter your details"} config={config} data={data} setData={setData} onSubmit={onSubmit}/>
    )
}

export default NewUserFormScreen