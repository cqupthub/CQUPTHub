import React from 'react'

export default class ContentList extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
    	<div className='content-box'>
	     	<div className='left-box'>
	            <img src={this.props.pageList.src} className='content-img'></img>
	            <span className='img-tit'>架构设计</span>
	        </div>
	        
	        <div className='content-page'>
	            <p className='mycontent'>
	               	{this.props.pageList.title}
	            </p>
	        </div>
		</div>
    )
  }
}