import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Highlighter from './Highlighter';
import { toggleStarred, trashMessage } from '../../redux/actions/MessageActions';
import { getActualDate, trashFilter } from '../../utilities/Helper';

class MessageItem extends Component {

  constructor(){
    super();
    this.state = {
      messages: [],
      trashed: false,
      messages_highlighted: [],
      use_highlighted: false,
      word: ""
    }
    this.displayMessages = this.displayMessages.bind(this);
    this.toggle = this.toggle.bind(this);
    this.trash = this.trash.bind(this);
  }
  // componentWillReceiveProps(nextProps){
  //   if(nextProps.messages !== this.state.messages){
  //     console.log('next props', nextProps.messages)
  //       this.setState({
  //           messages: nextProps.messages,
  //           trashed: nextProps.trashed
  //       })
  //   }
  // }
  static getDerivedStateFromProps(props, current_state) {
    if (current_state.messages !== props.messages
        || current_state.trashed !== props.trashed 
        || current_state.starred !== props.starred
        || current_state.messages_highlighted !== props.messages_highlighted 
        || current_state.use_highlighted !== props.use_highlighted
        || current_state.word !== props.word) {
      console.log("props changedddddddd")
      return {
        messages: props.messages,
        trashed: props.trashed,
        messages_highlighted: props.messages_highlighted,
        use_highlighted: props.use_highlighted,
        word: props.word
      }
    }
    return null
  }

  shouldComponentUpdate(nextProps, nextState){
    if(nextState.messages !== this.state.messages 
        || nextState.trashed !== this.state.trashed 
        || nextState.starred !== this.state.starred
        || nextState.messages_highlighted !== this.state.messages_highlighted 
        || nextState.use_highlighted !== this.state.use_highlighted
        || nextState.word !== this.state.word){
      return true;
    }
    return false;
  }

  trash(e){
    var id = Number.parseInt(e.target.value)
    this.props.trashMessage(this.state.messages, id);
  }

  toggle(e){
    console.log(e.target.value)
    var id = Number.parseInt(e.target.value)
    this.props.toggleStarred(this.state.messages, id);
  }

  displayMessages(){
    let messages;
    var parser = new DOMParser()
// var el = parser.parseFromString(markup, "text/xml");
    // var tempMessages = this.state.use_highlighted === true ? this.state.messages_highlighted : this.state.messages;
    var tempMessages = this.state.messages;
    if(tempMessages !== null && tempMessages.length > 0){
      messages = trashFilter(tempMessages, this.state.trashed).map((message) => 
        <div className="message-item" key={message['id']} >
          <div className="message-photo-name-time-wrapper">
            <div className="message-photo-name">
              <img src={message.avatar} alt="Avatar" />
              <span>{message.handle}</span>
            </div>
            <div className="message-time">
              <span className="time">{`${message.source} | ${getActualDate(message.timestamp)}`}</span>
              <p className="message-actual">{this.state.use_highlighted ? <Highlighter text={message.content} highlight={this.state.word} /> : message.content}</p>
            </div>
          </div>
          <div className="message-starred">
            <button className={message.meta.isStarred ? "button-starred" : ""} 
              onClick={this.toggle} value={message.id}
              ref="message-starred" >{message.meta.isStarred ? "Starred!" : "Star Message!"}</button>
          </div>
          <div className="message-starred">
            <button className={`trashed${message.meta.isTrashed ? " hide-trashed" : ""}`}
              onClick={this.trash} value={message.id}
              ref="message-starred" >Trash</button>
          </div>
        </div>
      );
    } else{
        messages = <h1>Loading..</h1>
    }
    
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
      trashed: state.messageViewer.trashed,
      messages_highlighted: state.messageViewer.messages_highlighted,
      use_highlighted: state.messageViewer.use_highlighted,
      word: state.messageViewer.word
  }
}

export default connect(mapStateToProps, {toggleStarred, 
                                          trashMessage})(MessageItem);