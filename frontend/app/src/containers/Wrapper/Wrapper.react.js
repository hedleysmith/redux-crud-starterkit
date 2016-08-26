import React, { Component, PropTypes } from 'react';
import Topnav from '../../components/Topnav/Topnav.react.js';
import Footer from '../../components/Footer/Footer.react.js';

/**
 * Higher order component.
 * Wraps all pages with header, footer etc.
 */
export default class Wrapper extends Component {
  render() {
    return (
      <div>
        <Topnav />
          { this.props.children }
        <Footer />
      </div>
    );
  }
}
