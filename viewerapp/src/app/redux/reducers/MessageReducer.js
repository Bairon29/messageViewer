import { 
    GET_ALL_MESSAGES, 
    INITIALSTATE, 
    TOGGLE_STARRED, 
    TOGGLE_TRASHED, 
    TRASH_MESSAGE, 
    HIGHLIGHT } from '../actionTypes/Types';


export default function(state = INITIALSTATE, action){
    switch(action.type){
        case GET_ALL_MESSAGES:
            return {
                ...state,
                messages: [...action.messages],
                starred: action.starred,
                trashed: action.trashed
            }
        case TRASH_MESSAGE:
        case TOGGLE_STARRED:
            console.log('reducing', action.messages)
            return {
                ...state,
                messages: [...action.messages],
                starred: action.starred
            }
        case TOGGLE_TRASHED:
            return {
                ...state,
                trashed: action.trashed,
                use_highlighted: action.use_highlighted
            }
        case HIGHLIGHT:
            return {
                ...state,
                // messages_highlighted: [...action.messages_highlighted],
                use_highlighted: action.use_highlighted,
                word: action.word
            }
        default:
            return state;
    }
}