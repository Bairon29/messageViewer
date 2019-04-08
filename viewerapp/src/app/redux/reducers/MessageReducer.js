import { GET_ALL_MESSAGES, INITIALSTATE } from '../actionTypes/Types';


export default function(state = INITIALSTATE, action){
    switch(action.type){
        case GET_ALL_MESSAGES:
            return {
                ...state,
                messages: action.messages,
                viewTrashedMessages: action.viewTrashedMessages
            }
        default:
            return state;
    }
}