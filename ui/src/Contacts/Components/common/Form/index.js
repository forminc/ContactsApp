import React, { useState,useContext } from "react";
import formConstants from "./constants";
import candidHeaderConstants from "../CandidHeader/constants";
import formSubmitConstants from "./FormSubmitButton/constants";
import paginatorConstants from "./FormPaginator/constants";
import Header from "../CandidHeader";
import FormInputGroup from "./FormInputGroup";
import FormPaginator from "./FormPaginator";
import FormSubmitButton from "./FormSubmitButton";
import { FormScreenContainer, FormContainer } from "./styles";
import {Context} from '../../../Store'
import {alert} from '../../../Store/alert/actions'
function getResidualHeight() {
  console.log("HEader hieght=",candidHeaderConstants.getHeaderHeight());
  console.log("Paginator height="+paginatorConstants.getPaginatorHeight());
  console.log("button height="+formSubmitConstants.getSubmitHeight());
  return (
    candidHeaderConstants.getHeaderHeight() +
    paginatorConstants.getPaginatorHeight() +
    formSubmitConstants.getSubmitHeight()
  );
}

function getFieldSectionHeight(fields) {
  let formHeight = [];

  fields.forEach(field => {
    switch (field.type) {
      case "name":
      case "input":
        formHeight.push(formConstants.getInputGroupHeight());
    }
  });
  return formHeight;
}

function getPageWiseFields(fields){
  let formSpace = window.screen.height - getResidualHeight();
  let pageWiseFields = {};
  let noOfPages = 1;
  let cumulativeHeight = 0;
  let heightsArray=getFieldSectionHeight(fields);
  heightsArray.forEach((height, index) => {
    if (height > formSpace-cumulativeHeight) {
      noOfPages = noOfPages + 1;
      cumulativeHeight = 0;
    }
    cumulativeHeight = cumulativeHeight + height;
    pageWiseFields[noOfPages] = pageWiseFields[noOfPages] ? pageWiseFields[noOfPages].concat(fields[index]): [fields[index]] ;
  });
  return pageWiseFields;
}
function Form(props) {
  const [pageNumber, setPageNumber] = useState(1);
  const {dispatch} = useContext(Context);
  let pageWiseFields=getPageWiseFields(props.config.fields);
  let noOfPages=Object.keys(pageWiseFields).length;
  function setData(field, value) {
    props.setData({
      ...props.data,
      [field]: value
    });
  }
  function callOnSubmit(){
    if(props.config.fields.every((field)=>{
      return props.data[field.key]!==undefined
    })){
      props.onSubmit();
    }
    else{
      dispatch(alert("All fields need to be filled to continue"));
    }
  }
  return (
    <FormScreenContainer>
      <Header>{props.heading}</Header>
      <FormContainer>
        <FormInputGroup
          data={props.data}
          setData={setData}
          fields={pageWiseFields[pageNumber]}
        />
        <FormPaginator
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          noOfPages={noOfPages}
        />
        <FormSubmitButton onClick={callOnSubmit}/>
      </FormContainer>
    </FormScreenContainer>
  );
}

export default Form;
