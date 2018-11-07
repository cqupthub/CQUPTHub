/**
 * 顶部header
 */

import React from 'react';
import Nav from '../nav/nav.jsx';
import './header.less';
import logo from '@/assets/img/logo.png';

export default class Header extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="header">
        <div className="logo">
          <img src={logo} alt=""/>
        </div>
        <Nav />
      </div>
    )
  }
}