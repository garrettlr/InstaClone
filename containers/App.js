import React, { Component } from 'react';
import type { Children } from 'react';


export default class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
