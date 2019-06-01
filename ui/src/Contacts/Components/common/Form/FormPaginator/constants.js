const constants={
    paginatorHeight:"100px",
    getPaginatorHeight:()=>{
        return parseInt(constants.paginatorHeight.substring(0,constants.paginatorHeight.length-2));
    }
}
export default constants;