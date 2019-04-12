import data from '../../localData/messages.json';
import { 
    GET_ALL_MESSAGES, 
    TOGGLE_STARRED, 
    TOGGLE_TRASHED, 
    TRASH_MESSAGE,
    HIGHLIGHT } from '../actionTypes/Types';
import { trashFilter, starredAmount, findWord } from '../../utilities/Helper';
// var AUTH = sessionStorage.getItem('Auth');
//     let user = JSON.parse(AUTH);

export const getMessages = (trashed) => (dispatch) => {

    // let messagesData = trashFilter(data.messages, trashed);
    console.log('notttt');
    dispatch({
        type: GET_ALL_MESSAGES,
        messages: data.messages,
        starred: starredAmount(data.messages),
        trashed: false
    })
    
}

export const toggleStarred = (messages, id) => (dispatch) => {

    console.log('toggling',messages, id);
    for(var i = 0; i < messages.length; i++){
        if(id === messages[i]["id"]){
            console.log('before',messages[i]["meta"]["isStarred"])
            messages[i]["meta"]["isStarred"] = !messages[i]["meta"]["isStarred"];
            console.log('after',messages[i]["meta"]["isStarred"])
            break;
        }
    }
    dispatch({
        type: TOGGLE_STARRED,
        messages: messages,
        starred: starredAmount(messages)
    })
}

export const toggleTrashed = (trashed) => (dispatch) => {

    // console.log('toggling',messages, id);
    // let messagesData = trashFilter(messages, trashed);
    dispatch({
        type: TOGGLE_TRASHED,
        // starred: starredAmount(messagesData),
        trashed: trashed,
        use_highlighted: false
    })
}

export const trashMessage = (messages, id) => (dispatch) => {

    for(var i = 0; i < messages.length; i++){
        if(id === messages[i]["id"]){
            // console.log('before',messages[i]["meta"]["isStarred"])
            messages[i]["meta"]["isTrashed"] = true;
            // console.log('after',messages[i]["meta"]["isStarred"])
            break;
        }
    }
    dispatch({
        type: TRASH_MESSAGE,
        messages: messages,
        starred: starredAmount(messages)
    })
}

export const highlightWords = (word) => (dispatch) => {

    // console.log('toggling',messages, id);
    // let messagesData = findWord(messages, word);
    dispatch({
        type: HIGHLIGHT,
        // messages_highlighted: messagesData,
        use_highlighted: true,
        word: word
    })
}