import { GET_USERNAME } from "./Action";

function reducer (state,action){

if(action.type === GET_USERNAME){
    return {...state ,user: action.payload.username}
}


return state;
}
export default reducer