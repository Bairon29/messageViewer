import React from 'react';
const Highlighter = ({text = '', highlight = ''}) => {
    if (!highlight.trim()) {
      return <span>{text}</span>
    }
    highlight = highlight.split(" ");
    var newHig = "";
    for (var i = 0; i < highlight.length; i++){
        newHig += highlight[i];
        if(i !== highlight.length - 1){
            newHig += "|";
        }
    }
    const regex = new RegExp(newHig, 'gi')
    const parts = text.split(" ")
    return (
      <span>
         {parts.filter(part => part).map((part, i) => (
             regex.test(part) ? <span className="highlight" key={i}>{part}</span>: <span key={i}> {part} </span>
         ))}
     </span>
    )
 }

 export default Highlighter;