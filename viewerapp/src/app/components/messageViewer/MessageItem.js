import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { toggleStarred } from '../../redux/actions/MessageActions';
import { getActualDate } from '../../utilities/Helper';

class MessageItem extends Component {
  constructor(){
    super();
    this.displayMessages = this.displayMessages.bind(this);
    this.toggleStarred = this.toggleStarred.bind(this);
  }

  toggleStarred(id){
    this.props.toggleStarred(this.props.messages, id);
  }

  displayMessages(){
    // console.log('dattaaaa',this.props.messages)
    const messages = this.props.messages.map((message) => 
      <div className="message-item" key={message['id']} >
        <div className="message-photo-name-time-wrapper">
          <div className="message-photo-name">
            {/* <div className="message-img"> */}
              <img src={message.avatar} alt="Avatar" />
            {/* </div> */}
            <span>{message.handle}</span>
          </div>
          <div className="message-time">
            <span className="time">{`${message.source} | ${getActualDate(message.timestamp)}`}</span>
            <p className="message-actual">{message.content}</p>
          </div>
        </div>
        <div className="message-starred">
          <button className={message.meta.isStarred ? "button-starred" : ""} onClick={() => this.toggleStarred(message.id)} ref="message-starred">{message.meta.isStarred ? "Starred!" : "Star Message!"}</button>
        </div>
      </div>
    );
    return messages;
  }

  render() {
    return (
      <section className="message-main-item">
        {this.displayMessages()}
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
      messages: state.messageViewer.messages,
      starred: state.messageViewer.starred,
      trashed: state.messageViewer.trashed
  }
}

export default connect(mapStateToProps, {toggleStarred})(MessageItem);