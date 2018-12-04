import React from 'react'

export default class ProjectList extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
    	<div className = "project-list">
    		<div className ='project-tit'>
    		    {this.props.item.projectname}
    		</div>
    		<div className = 'project-reduct'>
    		    {this.props.item.projectTit}
    		</div>
    	</div>
    )
  }
}