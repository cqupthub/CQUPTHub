import React, { Component } from 'react';
import './articledetails.less'

class ArticleDetails extends Component {

  render() {
    return (
      <div className='articledetails'>
        <div className="ad-head">
          <div 
            onClick={() => this.props.goBack()}
            className="ad-hd-goback">
            <img src={require('../../../../assets/img/icon/fanhui.png')} alt=""/>
          </div>
          <div className="ad-hd-mid">
            <div className="ad-hd-mid-title">{this.props.article.title}</div></div>
          <div className="ad-hd-right"/>
        </div>
        <div className="ad-body">
          <div className="ad-totop">
            <img src={require('../../../../assets/img/icon/fanhuidingduan.png')} alt=""/>
          </div>
          <div className="ad-bd-author">{this.props.article.author}</div>
          <div className='ad-bd-content'>
            <div className="ad-bd-content-img"></div>
            <div className="ad-bd-content-text">{this.props.article.content}</div>
          </div>
        </div>
        <div className="ad-foot">
          <div className="ad-ft-left">
            <div className="ad-ft-left-publish">{this.props.article.publish}</div>
            <div className="ad-ft-left-info">
              <div className="ad-ft-left-info-views">
                <img src={require('../../../../assets/img/icon/liulanliang.png')} alt=""/>
                <span>{this.props.article.views}</span>
              </div>
              <div className="ad-ft-left-info-likes">
                <img src={require('../../../../assets/img/icon/dianzan1.png')} alt=""/>
                <span>{this.props.article.likes}</span>
              </div>
            </div>
          </div>
          <div className="ad-ft-right">
            <div className="ad-ft-right-share">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleDetails;
