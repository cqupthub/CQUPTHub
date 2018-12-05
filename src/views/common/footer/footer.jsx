/**
  *
  */
import React from 'react'
import './footer.less'
import logo from '@/assets/img/logo.png';

export default class Footer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      links: [
        {name: '帮助', link: ''},
        {name: '招聘', link: ''},
        {name: '加入我们', link: ''},
        {name: '关于我们', link: ''},
        {name: '友情链接', link: ''},
        {name: '法律申明', link: ''},
        {name: '代理合作', link: ''},
        {name: '服务条款', link: ''},
        {name: '友情链接', link: ''},
        {name: '友情链接', link: ''},
        {name: '友情链接', link: ''},
      ]
    }
  }
  render() {
    return (
      <div className="footer">
        <div className="wrapper">
          
          <div className="links">
          {
            this.state.links.map((item, i) => (
              <span key={i} className="link">{item.name}</span>
            ))
          }
          </div>
        </div>
        <h3>@copyright cqupthub版权所有 渝ICP号：123456789</h3>
      </div>
    )
  }
}