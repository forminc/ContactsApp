import buttonConstants from '../../Button/constants';
const constants={
    paddingVertical:"50px",
    getSubmitHeight:()=>{
        let buttonHeight  =parseInt(buttonConstants.height.substring(0,buttonConstants.height.length-2));
        let paddingVertical=parseInt(constants.paddingVertical.substring(0,constants.paddingVertical.length-2));
        return buttonHeight+paddingVertical*2;
    }
}
export default constants