/**
 * App.jsx
 */

import React from 'react';
import './App.less';
import Header from '../common/header/header.jsx'

export default class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="app">
        <Header />
        {this.props.children}
      </div>
    )
  }
}