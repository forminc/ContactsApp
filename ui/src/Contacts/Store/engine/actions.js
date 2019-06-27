export const goToPageAction=(pageId,params)=>{
    return {
        type:"GO_TO",
        pageId,
        params,
        segmentName:"engine"
    }
}

