import React, { Component } from 'react';

export class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        {children}
      </div>
    );
  }
}
