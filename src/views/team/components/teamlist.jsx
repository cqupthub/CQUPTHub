import React from 'react'
import { Link } from 'react-router'
export default class TeamList extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (

    	<div className = "team-list">
        <Link to={{pathname:'/teamDetail',query:{id:this.props.data.id} }} >
    		  <div className = 'list-img'></div>
        </Link>
    		<div className = 'list-caption'>
				<div className='list-tit'>{this.props.data.name}</div>
				<div className='list-tit'>{this.props.data.direction}</div>
    			<div className = 'list-border'></div>
    			<div className = 'list-pra'>{this.props.data.college}</div>
    		</div>
    	</div>
    )
  }
}