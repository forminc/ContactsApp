import React from 'react';
import LabelItemGroup from './LabelItemGroup';
import Input from "./Input";
function FormInputGroup(props){
    return(
        props.fields.map(field=>{
            switch(field.type){
                case "name":
                case "input": return <LabelItemGroup field={field} data={props.data[field.key]} setData={props.setData} Component={Input}/>;
            }
        })
    )
}

export default FormInputGroup;