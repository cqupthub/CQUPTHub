/**
 * 团队介绍
 */
import React from 'react'
import bg from '@/assets/img/bg_project.png'
import logo from '@/assets/img/logo.png';
import { Link } from 'react-router'
import ListHeader from '@/views/common/listHeader/listHeader.jsx'
import TeamList from './components/teamlist.jsx'
import Footer from '../common/footer/footer.jsx'
import Loading from '../common/loading/loading.jsx'
import TeamCaption from './components/teamCaption.jsx'
import axios from 'axios'
import { Pagination } from 'antd';
import './team.less';
export default class Team extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        listContent:{
            title:'我们的团队',
            page:'TEAM'
        },
        teamlist:[],
        teamCaption:{
            arriveTime:'2000年11月成立',
            teamContent:'测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试',
            main:'主要内容主要内容主要内容主要内容主要内容主要内容主要内容主要内容主要内容主要内容主要内容主要内容主要内容主要内容主要内容'
        },
        total:'',
        show:1,
        showItem:8,
        current:1,//当前页面
    }    
  }
  componentWillMount(){
    this.getData()
  }
  getData(){
    console.log(this.state.current);
    axios.get('http://119.23.233.196:1234/getMember?name=&college=&direction=&page=' + this.state.current)
    .then((res)=>{
      console.log(res);
      this.setState({
        total:res.data.totalAll,
        teamList:res.data.member,
        show:2,
      })
    })
  }
  onChange(page){
    this.setState({
      current:page,
    },function(){this.getData()}) //setState是异步的
  }
  render() {
    return (
      <div className="Team" id='Team'>
          <div className='banner' style={{backgroundImage: `url(${bg})`}}>
          </div>
          {
            this.state.show == 2?
              <main className='main-box'>
                <div>
                  <ListHeader data = {this.state.listContent} />
                  <div className='main-caption'>
                      
                      <div className='list-box'>
                          {
                              this.state.teamList.map((item,i)=> (
                                  <TeamList data={item} key={i} />
                              ))
                          }
                      </div>
                  </div>
                </div>
                <div className = 'pagination'> 
                  <Pagination pageSize = {this.state.showItem} current={this.state.current} onChange={this.onChange.bind(this)}  total={this.state.total}/>
                </div>
            </main>

            :<Loading size='36'/>
          }
          {
            this.state.show == 2?
              <Footer/>
            :''
          }
          
      </div>
    )
  }
}