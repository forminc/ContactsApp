export const setMenuItems=(menuItems)=>{
    return {
        type:"SET_MENU_ITEMS",
        menuItems,
        segmentName:"menu"
    }
}

export const hideMenu=()=>{
    return{
        type:"HIDE_MENU",
        segmentName:"menu"
    }
}