import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './App.css';

import Header from './components/header/Header';
import MessageViewer from './components/messageViewer/MessageViewer';

import { getMessages } from './redux/actions/MessageActions';

class App extends Component {
  constructor(){
    super();
    this.state = {
      starred: 0,
      messages: {},
      trashed: false
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.messages !== this.state.messages){
      console.log('next props', nextProps.messages)
        this.setState({
            messages: nextProps.messages,
            starred: nextProps.starred,
            trashed: nextProps.trashed
        })
    }
  }

  componentDidMount(){
    this.props.getMessages(false);
  }

  render() {
    // console.log('dataaa', this.state.starred)
    return (
      <div className="app">
        <Header />
        <MessageViewer />
      </div>
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

App.propTypes = {
  messages: PropTypes.object,
  starred: PropTypes.number,
  trashed: PropTypes.bool
};

export default connect(mapStateToProps, {getMessages})(App);
