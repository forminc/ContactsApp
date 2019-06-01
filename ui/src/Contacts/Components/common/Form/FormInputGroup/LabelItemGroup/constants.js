const constants={
    paddingVertical:"20px",
    labelMarginBottom:"20px",
    labelFontSize:"20px",
    labelPaddingVertical:"2px",
    getGroupHeight:(componentHeight)=>{
        let paddingVertical     =parseInt(constants.paddingVertical     .substring(0,constants.paddingVertical.length-2));
        let labelMarginBottom   =parseInt(constants.labelMarginBottom   .substring(0,constants.labelMarginBottom.length-2));
        let labelFontSize       =parseInt(constants.labelFontSize       .substring(0,constants.labelFontSize.length-2));
        let labelPaddingVertical=parseInt(constants.labelPaddingVertical.substring(0,constants.labelPaddingVertical.length-2));
        componentHeight         =parseInt(componentHeight               .substring(0,componentHeight.length-2));
        return paddingVertical*2+labelFontSize+labelPaddingVertical*2+labelMarginBottom+componentHeight;
    }
}

export default constants;