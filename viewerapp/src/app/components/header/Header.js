import React, { Component } from 'react';
import './Header.css';

import Signafire from '../images/logo-sf-small.png';

class Header extends Component {
  render() {
    return (
      <section className="header">
        <nav className="main-menu">
            <ul className="main-menu-items">
                <li className="logo">
                    <a href="/" >
                        <img src={Signafire} alt="Logo" />
                    </a>
                </li>
                <li>
                    MESSAGE VIEWER
                </li>
            </ul>
        </nav>
      </section>
    );
  }
}

export default Header;