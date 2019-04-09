import React, { Component } from 'react';

class MessageItem extends Component {
  constructor(){
    super();
    this.displayMessages = this.displayMessages.bind(this);
  }

  displayMessages(){
    console.log('dattaaaa',this.props.data)
    const messages = this.props.data.map((message) => 
      <div className="option-video" key={message['id']} >
        
      </div>
    );
    return messages;
  }

  render() {
    return (
      <section className="message-item">
        <h1>MessageItem</h1>
      </section>
    );
  }
}

export default MessageItem;