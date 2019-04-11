import { MONTH_SHORT_NAMES } from './Contants';

export const trashFilter = (messagesData, trashed) => {
    var tempMessages = {
        messages: []
    };

    var m = messagesData.messages;
    m.forEach(message => {
        if(trashed === message.meta.isTrashed){
            tempMessages.messages.push(message);
        }
    });
    return tempMessages;
}

export const getActualDate = (dateString) => {
    var date = new Date(dateString);
    var str = "";

    str += MONTH_SHORT_NAMES[date.getMonth()];
    str += `, ${date.getDate()}`;
    str += ` ${date.getFullYear()}`;
    return str;
}