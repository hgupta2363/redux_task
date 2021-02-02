let lastid=0;
const reducer=(state=[],action)=>{

    if(action.type=="LIST_ADDED")
    {
        return [...state,{
            id:++lastid,
            description:action.payload.description
        }]
    }
    else{
        return [...state]
    }
   
}
export default reducer;