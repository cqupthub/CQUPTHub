/**
 * 首页
 */

import React from 'react';
import './index.less';

import Banner from './components/banner.jsx'
import About from './components/about.jsx'

export default class Index extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="index">
        <Banner />
        <About />
      </div>
    )
  }
}