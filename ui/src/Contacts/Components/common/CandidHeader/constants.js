let constants={
    height:"60px",
    paddingVertical:"15px",
    marginVertical:"40px",
    headingFontSize:"28px",
    getHeaderHeight:()=>{
        let height         =parseInt(constants.height        .substring(0,constants.height.length-2));
        let marginVertical =parseInt(constants.marginVertical.substring(0,constants.marginVertical.length-2));
        let paddingVertical=parseInt(constants.paddingVertical.substring(0,constants.paddingVertical.length-2));
        return height+2*marginVertical+2*paddingVertical;
    }
}

export default constants