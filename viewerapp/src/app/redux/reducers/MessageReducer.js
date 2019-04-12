import { GET_ALL_MESSAGES, INITIALSTATE, TOGGLE_STARRED } from '../actionTypes/Types';


export default function(state = INITIALSTATE, action){
    switch(action.type){
        case GET_ALL_MESSAGES:
            return {
                ...state,
                messages: action.messages,
                starred: action.starred,
                trashed: action.trashed
            }
        case TOGGLE_STARRED:
            console.log('reducing', action.messages)
            return {
                ...state,
                messages: action.messages,
                starred: action.starred
            }
        default:
            return state;
    }
}