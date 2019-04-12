import data from '../../localData/messages.json';
import { GET_ALL_MESSAGES, TOGGLE_STARRED } from '../actionTypes/Types';
import { trashFilter } from '../../utilities/Helper';
// var AUTH = sessionStorage.getItem('Auth');
//     let user = JSON.parse(AUTH);

export const getMessages = (trashed) => (dispatch) => {

    let messagesData = trashFilter(data, trashed);
    console.log('notttt');
    dispatch({
        type: GET_ALL_MESSAGES,
        messages: messagesData.messages,
        starred: messagesData.messages.length,
        trashed: false
    })
    
}

export const toggleStarred = (messages, id) => (dispatch) => {

    console.log('toggling',messages, id);
    let tempM = messages;
    for(var i = 0; i < tempM.length; i++){
        if(id === tempM[i]["id"]){
            console.log('before',tempM[i]["meta"]["isStarred"])
            tempM[i]["meta"]["isStarred"] = !tempM[i]["meta"]["isStarred"];
            console.log('after',tempM[i]["meta"]["isStarred"])
            break;
        }
    }
    dispatch({
        type: TOGGLE_STARRED,
        messages: tempM,
        starred: messages.length
    })
}