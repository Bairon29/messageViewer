import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MessageItem from './MessageItem';
import './MessageViewer.css';

class MessageViewer extends Component {
  constructor(){
    super();
    this.state = {
      starred: 0,
      messages: {}
    }

    this.shouldLoadTemple = this.shouldLoadTemple.bind(this);
  }
  shouldLoadTemple(){
    if(this.props.messages !== null && this.props.messages.length > 0){
      return <MessageItem messages={this.props.messages} loadTemple={false}/>
    } else{
        return <h1>Loading..</h1>
    }
  }

  render() {
    return (
      <section className="message-viewer">
        <div className="control-info">
          <h1>Starred: {this.state.starred}</h1>
        </div>
        <div className="messages-main-container">
          {this.shouldLoadTemple()}
        </div>
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

MessageViewer.propTypes = {
  messages: PropTypes.object,
  starred: PropTypes.number,
  trashed: PropTypes.bool
};

export default connect(mapStateToProps)(MessageViewer);