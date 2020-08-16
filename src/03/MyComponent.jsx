import React, { Component } from 'react';

class MyComponent extends React.Component {
  render() {
    const name = this.props.name;
    return (
      <div>
        <span>{name}</span>
      </div>
    );
  }
}

export default MyComponent;
