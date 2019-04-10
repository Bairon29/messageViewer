import React, { Component } from 'react';

class MessageItem extends Component {
  constructor(){
    super();
    this.displayMessages = this.displayMessages.bind(this);
  }

  displayMessages(){
    // console.log('dattaaaa',this.props.messages)
    const messages = this.props.messages.map((message) => 
      <div className="option-video" key={message['id']} >
        <div>
          <div>
            <img />
          </div>
          <h3>Name</h3>
        </div>
        <div>
          <span>time</span>
          <p>message</p>
        </div>
        <div>
          <button>starred</button>
        </div>
      </div>
    );
    return messages;
  }

  render() {
    return (
      <section className="message-item">
        <h1>MessageItem</h1>
        {this.displayMessages()}
      </section>
    );
  }
}

export default MessageItem;