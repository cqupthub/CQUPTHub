import React from 'react'
import Mycontent from './mycontent.jsx'
import { Link } from 'react-router'
export default class ContentList extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
    	<div className='content-box'>	
	     	<Link to={{pathname:'/pageDetail',query:{type:this.props.type,projectid:this.props.id}}}>
		     	<div className='left-box'>
		            <img src={this.props.pageList.src} className='content-img'></img>
		            <span className='img-tit'>{this.props.pageList.mytype}</span>
		        </div>
	        </Link>
	        <div className='content-page'>
	        	<div>
	        		文章标题
		            <p className='mycontent'>
		               	{this.props.pageList.title}
		            </p>
	        	</div>
	        	<div>
	        		文章简介
		            <p className='mycontent'>
		               	{this.props.pageList.EssayTit}
		            </p>
	        	</div>
	        </div>
		</div>
    )
  }
}