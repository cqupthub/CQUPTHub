import React from 'react';
import axios from 'axios';
export default class PageList extends React.Component{
  constructor(props){
    super(props);

  }
  
  render(){
    return (
        <div className='hash-box' onClick = {()=>{this.props.showMylist(this.props.id)}}>
          <div className='hash-list'>
            <span className='hash-name'>文章标题</span>
            <span className='hash-val'>{this.props.articlList.title}</span>
          </div>
          <div className='hash-list'>
            <span className='hash-name'>文章简介</span>
              <span className='hash-val'>{this.props.articlList.EssayTit}</span>
          </div>
        </div>
    )
  }
}