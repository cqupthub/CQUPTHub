import React, { Component } from 'react';
import './articles.less'
import {Link} from 'react-router';

class Articles extends Component {
   constructor (props) {
    super(props)
  }
  componentWillMount(){
    console.log(this.props.articlList);
  }
  render() {
    return (
      <div className='articles'>
        {
          this.props.titleShown ? 
            <div className="articles-header">技术文章 Archieves</div>
          : ''
        }
        <div className = 'header'>
          <span className='tit'>
              文章标题
          </span>
        </div>
          <div className="articles-body">
            {
              this.props.articlList.map((val, i) => (
                <Link key={i} to={{pathname:'/pageDetail',query:{type:val.type,projectid:val.Projectid}}}>
                    <div  className='articles-bd-item'>
                      <div className='articles-bd-item-title'>{val.title}</div>
                    </div>
                 </Link>
              ))
            }
          </div>
      </div>
    );
  }
}

export default Articles;
