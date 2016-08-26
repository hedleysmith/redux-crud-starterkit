/**
 * Example Component.
 * 'Smart' component example.
 */
 import React, { Component, PropTypes } from 'react';

 export default class Item extends Component {

  // [Prop validation](https://facebook.github.io/react/docs/reusable-components.html#prop-validation)
  static propTypes = {
    // Id can be a number, or a string, but it needs to be defined!
    id: React.PropTypes.oneOfType([
      React.PropTypes.number,
      React.PropTypes.string
    ]).isRequired,

    // Messages should be an object with a title and text property of type string
    message: React.PropTypes.shape({
      title: React.PropTypes.string,
      text: React.PropTypes.string
    }).isRequired,

    // The comments property needs to be an array of objects.
    comments: React.PropTypes.arrayOf(React.PropTypes.object),

    // The date needs to be an instance of type Date.
    date: React.PropTypes.instanceOf(Date)
  };

  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
    this._tick = this._tick.bind(this);
  }

  _tick() {
    this.setState({count: this.state.count + 1});
  }

  render() {
    return (
      <div id={ this.props.id }>
        <h3>{ this.props.title }</h3>
        <p>{ this.props.message }</p>
        <div onClick={this._tick}>
          Clicks: {this.state.count}
        </div>
      </div>
    );
  }
}
