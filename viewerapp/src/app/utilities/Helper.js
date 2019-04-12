import { MONTH_SHORT_NAMES } from './Contants';

export const trashFilter = (messages, trashed) => {
    
    console.log(messages)
    var m = [];
    messages.forEach(message => {
        if(trashed === message.meta.isTrashed){
            m.push(message);
        }
    });
    return m;
}

export const getActualDate = (dateString) => {
    var date = new Date(dateString);
    var str = "";

    str += MONTH_SHORT_NAMES[date.getMonth()];
    str += `, ${date.getDate()}`;
    str += ` ${date.getFullYear()}`;
    return str;
}

export const starredAmount = (messages) => {
    var count = 0;

    for(var i = 0; i < messages.length; i++){
        if(messages[i]["meta"]["isStarred"] === true && !messages[i]["meta"]["isTrashed"]){
            count++;
        }
    }
    return count;
}

// export const findWord = (messages, word) => {
//     var re = new RegExp(word, 'g');

//     for(var i = 0; i < messages.length; i++){
//         if(messages[i]["content"] !== null && re.test(messages[i]["content"])){
//             var s = '<div id="myDiv"></div>';
//             var htmlObject = document.createElement('div');
//             htmlObject.innerHTML = "<span>"+messages[i]["content"].replace(re, "<span className='highlight' >${word}</span>")+"</span>";
//             messages[i]["content"] = htmlObject;
//             console.log('miraaaaaa',messages[i]["content"])
//         }
//     }
//     return messages;
// }