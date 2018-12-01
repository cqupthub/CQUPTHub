/**
 * 首页
 */

import React from 'react';
import './index.less';

import Banner from './components/banner/banner.jsx'
import Projects from './components/projects/projects.jsx';
import Articles from './components/articles/articles.jsx';

export default class Index extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="index">
        <Banner />
        <Projects />
        <Articles titleShown />
      </div>
    )
  }
}