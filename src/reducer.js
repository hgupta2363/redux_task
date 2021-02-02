let lastid=0;
//pure function to get current state from prev state and action
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