/**
 * 项目
 */

import React from 'react';
import { Link } from 'react-router'
import { Pagination } from 'antd';
import Loading from '../common/loading/loading.jsx'
import './project.less';
import ProjectList from './commonents/list.jsx'
import Footer from '../common/footer/footer.jsx'
import ListHeader from '@/views/common/listHeader/listHeader.jsx'
import axios from 'axios';
export default class Projects extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      listLink:[
      ],
      show:1,
      listContent:{
        title:'我们的项目',
        page:'PROJECT'
      },
      current:1,
      total:'',
      showItem:8,
    }
  }
  getData(){
    axios.get("http://119.23.233.196:1234/getProject?name=''&time=''&page=" + this.state.current)
    .then((res)=>{
          console.log(res);
          var list = [];
          res.data.list.map((item,index)=>{
            list[index] = {};
            list[index].projectid = item.Projectid;
            list[index].projectname = item.projectName;
            list[index].projectTit = item.projectTit;
            list[index].projectsrc = item.src;
          })

         this.setState({
            listLink:list,
            total:res.data.totalAll,
            show:2,
         })
    })
  }
  componentWillMount(){
    this.getData()
  }
  onChange(page){

    this.setState({
      current:page,
    },function(){this.getData()}) //setState是异步的
  }
  render(){
    return (
      <div className="projects" id='projects'>
          <div className = 'main-box'>
            {
              this.state.show == 2?
              <div>
                <main className='project-box'>
                    <ListHeader data = {this.state.listContent} />
                      <div className='main-content  '>
                          <div className = 'project-list-box'>
                              {
                                this.state.listLink.map((item, i) => (
                                  <Link to={{pathname:'/projectDetail',query:{projectid:item.projectid} }} key={i}>
                                      <ProjectList item = {item}/>
                                  </Link>
                                ))
                              }
                          </div>
                      </div>
                    <div className = 'pagination'> 
                        <Pagination pageSize = {this.state.showItem} current={this.state.current} onChange={this.onChange.bind(this)}  total={this.state.total}/>
                    </div>
                </main>
                <Footer/>
              </div>
              :<Loading size='36'/>
            }
          </div>
      </div>
    )
  }
}