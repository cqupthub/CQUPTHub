/**
 * 项目
 */

import React from 'react';
import { Link } from 'react-router'
import './project.less';
import bg from '@/assets/img/bg_project.png'
import ProjectList from './commonents/list.jsx'
import ListHeader from '@/views/common/listHeader/listHeader.jsx'
export default class Projects extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      listLink:[
        {id:1,href:'/projectDetail?id=1'},
        {id:2,href:'/projectDetail?id=2'},
        {id:3,href:'/projectDetail?id=3'},
        {id:4,href:'/projectDetail?id=4'},
        {id:5,href:'/projectDetail?id=5'},
        {id:6,href:'/projectDetail?id=6'},
        {id:7,href:'/projectDetail?id=7'},
        {id:8,href:'/projectDetail?id=8'},
      ],
      listContent:{
        title:'我们的项目',
        page:'PROJECT'
      },
    }
  }
  render(){
    return (
      <div className="projects" id='projects'>
          <div className='banner' style={{backgroundImage: `url(${bg})`}}>
          </div>
          <div className = 'main-box'>
              <main className='project-box'>
                  <ListHeader data = {this.state.listContent} />
                  <div className='main-content  '>
                    <div className = 'project-list-box'>
                        {
                          this.state.listLink.map((item, i) => (
                            <Link to={item.href} key={i}>
                                <ProjectList/>
                            </Link>
                          ))
                        }
                    </div>
                  </div>
              </main>
          </div>
      </div>
    )
  }
}