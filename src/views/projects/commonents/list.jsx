import React from 'react'

export default class ProjectList extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
    	<div className = "project-list-detail-box">
        <div className = 'project-list-detail-img' >
            <img src=   { 'http://119.23.233.196:1234' + this.props.item.projectsrc} alt=""/>
        </div>
        <div className = 'project-list-detail-tit'>
            <div className ='project-tit'>
              {this.props.item.projectname}
            </div>
          <div className = 'project-reduct'>
              {this.props.item.projectTit}
          </div>
        </div>
    	</div>
    )
  }
}