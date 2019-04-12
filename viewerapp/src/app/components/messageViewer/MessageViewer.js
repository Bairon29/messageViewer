import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { toggleTrashed, highlightWords } from '../../redux/actions/MessageActions';
import MessageItem from './MessageItem';
import './MessageViewer.css';

class MessageViewer extends Component {
  constructor(){
    super();
    this.state = {
      starred: 0,
      trashed: false,
      messages: [],
      word: ""
    }
    this.trash = this.trash.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  // componentWillReceiveProps(nextProps){
  //   if(nextProps.messages !== this.state.messages){
  //       this.setState({
  //           starred: nextProps.starred,
  //           trashed: nextProps.trashed
  //       })
  //   }
  // }
  // shouldLoadTemple(){
  //   if(this.state.messages !== null && this.state.messages.length > 0){
  //     return <MessageItem  loadTemple={false}/>
  //   } else{
  //       return <h1>Loading..</h1>
  //   }
  // }

  static getDerivedStateFromProps(props, current_state) {
    if (current_state.trashed !== props.trashed 
        || current_state.starred !== props.starred) {
      console.log("props changedddddddd")
      return {
        starred: props.starred,
        trashed: props.trashed,
        messages: props.messages,
        word: props.word
      }
    }
    return null
  }

  onChange(e) {
    this.setState({
      word: e.target.value
    })
  }

  handleSearch() {
    this.props.highlightWords(this.state.word)
  }

  shouldComponentUpdate(nextProps, nextState){
    if(nextState.trashed !== this.state.trashed 
      || nextState.starred !== this.state.starred){
      return true;
    }
    return false;
  }

  trash(e){
    console.log('only trashed messages')
    var trash = this.state.trashed;
    console.log('how is before',trash)
    trash = trash ? false : true;
    console.log('how is after',trash)
    this.props.toggleTrashed(trash);
  }

  render() {
    return (
      <section className="message-viewer">
        <div className="control-info">
          <h1>Starred: {this.state.starred}</h1>
          <div className="message-already-trashed">
            <button className="message-toggle-trashed"
              onClick={this.trash} 
                >{this.state.isTrashed ? "Show Trashed Messages" : "Show Untrashed Message"}</button>

            <div className="search-container">
              <div className="search-field">
                <input type="text" onChange={this.onChange} />
              </div>
              <button className="search-btn" onClick={this.handleSearch} >Submit</button>
            </div>
          </div>
        </div>
        <MessageItem />
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
      starred: state.messageViewer.starred,
      trashed: state.messageViewer.trashed,
      messages: state.messageViewer.messages,
      messages_highlighted: state.messageViewer.messages_highlighted,
      use_highlighted: state.messageViewer.use_highlighted,
      word: state.messageViewer.word
  }
}

MessageViewer.propTypes = {
  starred: PropTypes.number,
  trashed: PropTypes.bool
};

export default connect(mapStateToProps, {toggleTrashed, highlightWords})(MessageViewer);