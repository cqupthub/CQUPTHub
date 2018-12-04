import React from 'react';
export default class teamDetailExperence extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    	
    }
  }
  render(){
  	return (
        <div className = 'member-experence'>
	        <span className='experence-tit'>个人经历</span>
	        <div className = 'experence-detail'>
	            <ul className ='experence-list-box'>
	            	<div>
	            		{this.props.experence}
	            	</div>
	            </ul>
	        </div>
	    </div>

  	)
  }
}