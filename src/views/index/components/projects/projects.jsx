import React, { Component } from 'react';
import './projects.less'
import { Link } from 'react-router'
const projectsInfo = [
  {
    name: '区块链征信系统联盟链',
    description: '项目1',
    src:'http://119.23.233.196:1234/usr/hubweb_qiantai/app/templates/static/img/3.jpg'
  },
  {
    name: '互联网检测与取证技术',
    description: '项目2',
    src:'http://119.23.233.196:1234/usr/hubweb_qiantai/app/templates/static/img/1.jpg'
  },
  {
    name: '区块链保全系统私链',
    description: '项目3',
    src:'http://119.23.233.196:1234/usr/hubweb_qiantai/app/templates/static/img/5.jpg'
  },
]

class Projects extends Component {
  render() {
    return (
      <div className='pros'>
        <div className='props-header-box'>
          <div className='pros-header'>项目展示 Projects</div>
          <Link className='toprops' to={{pathname:'/projects'}}>更多</Link>
        </div>
        <div className="pros-body">
        {
          projectsInfo.map((val, i) => (
            <div key={i} className="pros-bd-item">
               <Link to={{pathname:'/projectDetail',query:{projectid:i + 1} }}>
                  <div className="pros-bd-item-img">
                      <img alt=''  src={val.src}/>
                  </div>
                  <div className="pros-bd-item-text">
                    <div className="pros-bd-item-t-title">{val.name}</div>
                  </div>
                </Link>
            </div>
          ))
        }
        </div>
      </div>
    );
  }
}

export default Projects;
