import data from '../../localData/messages.json';
import { GET_ALL_MESSAGES } from '../actionTypes/Types';
import { trashFilter } from '../../utilities/Helper';
// var AUTH = sessionStorage.getItem('Auth');
//     let user = JSON.parse(AUTH);

export const getMessages = (trashed) => (dispatch) => {
    if(sessionStorage.getItem('messagesData') === null){
        sessionStorage.setItem('messagesData', JSON.stringify(data));
    }

    if(sessionStorage.getItem('messagesData') !== null){
        var sessionData = sessionStorage.getItem('messagesData');
        var messagesData = JSON.parse(sessionData);

        messagesData = trashFilter(messagesData, trashed);

        dispatch({
            type: GET_ALL_MESSAGES,
            messages: messagesData,
            starred: 10,
            trashed: false
        })
    }
}