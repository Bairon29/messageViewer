import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { toggleStarred } from '../../redux/actions/MessageActions';
import { getActualDate } from '../../utilities/Helper';

class MessageItem extends Component {

  constructor(){
    super();
    this.state = {
      messages: [],
      trashed: false
    }
    this.displayMessages = this.displayMessages.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.messages !== this.state.messages){
      console.log('next props', nextProps.messages)
        this.setState({
            messages: nextProps.messages,
            trashed: nextProps.trashed
        })
    }
  }
  static getDerivedStateFromProps(props, current_state) {
    if (current_state.messages !== props.messages) {
      return {
        messages: props.messages,
        trashed: props.trashed
      }
    }
    return null
  }

  shouldComponentUpdate(nextProps, nextState){
    if(nextState.messages !== this.state.messages){
      // console.log('next props', nextProps.messages)
      //   this.setState({
      //       messages: nextProps.messages,
      //       trashed: nextProps.trashed
      //   })
      return true;
    }
    return false;
  }

  // componentDidMount(){
  //   this.setState({
  //     messages: this.props.messages,
  //     trashed: this.props.trashed
  //   })
  // }

  toggle(id){
    this.props.toggleStarred(this.state.messages, id);
  }

  displayMessages(){
    let messages;
    if(this.state.messages !== null && this.state.messages.length > 0){
      messages = this.state.messages.map((message) => 
        <div className="message-item" key={message['id']} >
          <div className="message-photo-name-time-wrapper">
            <div className="message-photo-name">
              <img src={message.avatar} alt="Avatar" />
              <span>{message.handle}</span>
            </div>
            <div className="message-time">
              <span className="time">{`${message.source} | ${getActualDate(message.timestamp)}`}</span>
              <p className="message-actual">{message.content}</p>
            </div>
          </div>
          <div className="message-starred">
            <button className={message.meta.isStarred ? "button-starred" : ""} 
              onClick={() => this.toggle(message.id)} 
              ref="message-starred" >{message.meta.isStarred ? "Starred!" : "Star Message!"}</button>
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
      trashed: state.messageViewer.trashed
  }
}

export default connect(mapStateToProps, {toggleStarred})(MessageItem);