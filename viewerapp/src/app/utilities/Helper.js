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