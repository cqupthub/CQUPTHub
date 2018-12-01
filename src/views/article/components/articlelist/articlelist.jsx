import React, { Component } from 'react';
import Title from '../../../common/title/title.jsx';
import './articlelist.less'

class ArticleList extends Component {

  handleSearchBarDisplay () {
    const searchBar = this.refs.SearchBar
    searchBar.style.transform = 'scaleX(1)'
    searchBar.focus()
  }

  handleSearchBarVanish () {
    const searchBar = this.refs.SearchBar
    searchBar.style.transform = 'scaleX(0)'
  }

  render() {
    return (
      <div className='articlelist'>
        <div className="al-head">
          <div className="al-hd-title">我们的文章</div>
          <div className="al-hd-search">
            <input
              onBlur={this.handleSearchBarVanish.bind(this)}
              ref='SearchBar' type="text" className="al-hd-search-input" placeholder='搜索'/>
            <img 
              onClick={this.handleSearchBarDisplay.bind(this)}
              className='al-hd-search-icon' src={require('../../../../assets/img/icon/sousuo.png')} alt=""/>
          </div>
          <Title content='ARTICLE' />
        </div>
        <div className="al-body">
        {
          this.props.articles.map((val, i) => (
            <div 
              onClick={() => this.props.getArticleId(i)}
              key={i} className='al-bd-item'>
              <div className='al-bd-item-title'>{val.title}</div>
              <div className='al-bd-item-publish'>{val.publish}</div>
            </div>
          ))
        }
        </div>
      </div>
    );
  }
}

export default ArticleList;
