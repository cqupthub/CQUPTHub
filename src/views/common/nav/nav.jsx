/**
  *
  */
import React from 'react';
import './nav.less';
import {Link} from 'react-router';

export default class Nav extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      linkData: [
        {name: '首页', href: '/index'},
        {name: '实验室项目', href: '/projects'},
        {name: '团队介绍', href: '/team'},
        {name: '技术文章', href: '/article'},
        {name: '联系我们', href: '/aboutUs'}
      ]
    }
  }
  render() {
    return (
      <div className="Nav">
        <ul>
          {
            this.state.linkData.map((item, i) => (
              <li key={i}>
                <Link activeClassName="active" to={item.href}>{item.name}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}