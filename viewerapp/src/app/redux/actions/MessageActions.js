import data from '../../localData/messages.json';
import { GET_ALL_MESSAGES, TOGGLE_STARRED } from '../actionTypes/Types';
import { trashFilter } from '../../utilities/Helper';
// var AUTH = sessionStorage.getItem('Auth');
//     let user = JSON.parse(AUTH);

export const getMessages = (trashed) => (dispatch) => {

    var sessionData = sessionStorage.getItem('messagesData');
    var messagesData = JSON.parse(sessionData);

    messagesData = trashFilter(messagesData, trashed);

    dispatch({
        type: GET_ALL_MESSAGES,
        messages: messagesData.messages,
        starred: messagesData.messages.length,
        trashed: false
    })
    
}

export const toggleStarred = (messages, id) => (dispatch) => {

    console.log('toggling',messages, id);
    // dispatch({
    //     type: TOGGLE_STARRED,
    //     messages: messagesData.messages,
    //     starred: messagesData.messages.length,
    //     trashed: false
    // })
}