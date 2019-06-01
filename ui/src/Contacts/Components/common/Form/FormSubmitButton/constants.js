import buttonConstants from '../../Button/constants';
const constants={
    paddingVertical:"50px",
    getSubmitHeight:()=>{
        let buttonPaddingVertical  =parseInt(buttonConstants.paddingVertical.substring(0,buttonConstants.paddingVertical.length-2));
        let buttonFontSize         =parseInt(buttonConstants.fontSize.substring(0,buttonConstants.fontSize.length-2));
        let paddingVertical        =parseInt(constants.paddingVertical.substring(0,constants.paddingVertical.length-2));
        return buttonPaddingVertical*2+buttonFontSize+paddingVertical*2;
    }
}
export default constants