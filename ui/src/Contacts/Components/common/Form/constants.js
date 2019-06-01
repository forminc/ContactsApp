import labelItemConstants from './FormInputGroup/LabelItemGroup/constants';
import inputConstants from './FormInputGroup/Input/constants';
let formConstants={
    getInputGroupHeight:()=>{
        return labelItemConstants.getGroupHeight(inputConstants.inputHeight)
    }
}

export default formConstants;