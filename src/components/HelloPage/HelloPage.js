import React, { PropTypes, Component } from 'react';

class HelloPage extends Component{
  render() {
    return (
      <div>
        Hello, {this.props.name}!
      </div>
    );
  }
}

export default HelloPage;
