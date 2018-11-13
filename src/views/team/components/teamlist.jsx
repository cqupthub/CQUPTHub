import React from 'react'

export default class TeamList extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (

    	<div className = "team-list">
    		<div className = 'list-img'>
    		</div>
    		<div className = 'list-caption'>
				<div className='list-tit'>{this.props.data.name}</div>
				<div className='list-tit'>{this.props.data.way}</div>
    			<div className = 'list-border'></div>
    			<div className = 'list-pra'>{this.props.data.college}</div>
    			<div className = 'list-pra'>tel:{this.props.data.tel}</div>
    		</div>
    	</div>
    )
  }
}