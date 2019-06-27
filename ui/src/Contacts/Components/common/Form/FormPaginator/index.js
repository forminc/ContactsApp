import React from "react";
import {
  FormPaginatorContainer,
  PaginatorButton,
  ActivePaginatorButton,
  ArrowPaginatorButton
} from "./styles";
function FormPaginator(props) {
  if (props.noOfPages !== 1) {
    return (
      <FormPaginatorContainer>
        <ArrowPaginatorButton
          onClick={() => {
            if (props.pageNumber !== 1) {
              props.setPageNumber(props.pageNumber - 1);
            }
          }}
        />

        {[...Array(props.noOfPages).keys()]
          .map(index => index + 1)
          .map(pageNumber => {
            if (pageNumber === props.pageNumber) {
              return <ActivePaginatorButton key={"form-paginator-"+pageNumber}/>;
            } else {
              return (
                <PaginatorButton
                  key={"form-paginator-"+pageNumber}
                  onClick={() => {
                    props.setPageNumber(pageNumber);
                  }}
                />
              );
            }
          })}
        <ArrowPaginatorButton
          onClick={() => {
            if (props.pageNumber !== props.noOfPages) {
              props.setPageNumber(props.pageNumber + 1);
            }
          }}
        />
      </FormPaginatorContainer>
    );
  } else {
    return <FormPaginatorContainer />;
  }
}

export default FormPaginator;
