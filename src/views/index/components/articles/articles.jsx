import React, { Component } from 'react';
import './articles.less'

const articles = [
  {
    title: '比阿吉比阿吉比阿吉比阿吉比',
    publish: '2018年11月30日',
    author: '比阿吉',
    id: 1,
  },
  {
    title: '比阿吉比阿吉比阿吉比阿吉比',
    publish: '2018年11月30日',
    author: '比阿吉',
    id: 1,
  },
  {
    title: '比阿吉比阿吉比阿吉比阿吉比',
    publish: '2018年11月30日',
    author: '比阿吉',
    id: 1,
  },
  {
    title: '比阿吉比阿吉比阿吉比阿吉比',
    publish: '2018年11月30日',
    author: '比阿吉',
    id: 1,
  },
  {
    title: '比阿吉比阿吉比阿吉比阿吉比',
    publish: '2018年11月30日',
    author: '比阿吉',
    id: 1,
  },
  {
    title: '比阿吉比阿吉比阿吉比阿吉比',
    publish: '2018年11月30日',
    author: '比阿吉',
    id: 1,
  },
]

class Articles extends Component {
  render() {
    return (
      <div className='articles'>
      {
        this.props.titleShown ? 
          <div className="articles-header">技术文章 Archieves</div>
        : ''
      }
        <div className="articles-body">
        {
          articles.map((val, i) => (
            <div key={i} className='articles-bd-item'>
              <div className='articles-bd-item-title'>{val.title}</div>
              <div className='articles-bd-item-publish'>{val.publish}</div>
            </div>
          ))
        }
        </div>
      </div>
    );
  }
}

export default Articles;
