/**
 * 团队介绍
 */
import React from 'react'
import bg from '@/assets/img/bg_project.png'
import logo from '@/assets/img/logo.png';
import { Link } from 'react-router'
import ListHeader from '@/views/common/listHeader/listHeader.jsx'
import TeamList from './components/teamlist.jsx'
import TeamCaption from './components/teamCaption.jsx'
import './team.less';
export default class Team extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        listContent:{
            title:'我们的团队',
            page:'TEAM'
        },
        teamList:[
            {name:'xxx',way:'实验室负责人',college:'重庆邮电大学软件学院',tel:'123123123123',href:'/teamDetail?id=1'},
            {name:'xxx',way:'实验室负责人',college:'重庆邮电大学软件学院',tel:'123123123123',href:'/teamDetail?id=2'},
            {name:'xxx',way:'实验室负责人',college:'重庆邮电大学软件学院',tel:'123123123123',href:'/teamDetail?id=3'},
            {name:'xxx',way:'实验室负责人',college:'重庆邮电大学软件学院',tel:'123123123123',href:'/teamDetail?id=4'},
            {name:'xxx',way:'实验室负责人',college:'重庆邮电大学软件学院',tel:'123123123123',href:'/teamDetail?id=5'},
            {name:'xxx',way:'实验室负责人',college:'重庆邮电大学软件学院',tel:'123123123123',href:'/teamDetail?id=6'},
            {name:'xxx',way:'实验室负责人',college:'重庆邮电大学软件学院',tel:'123123123123',href:'/teamDetail?id=7'},
            {name:'xxx',way:'实验室负责人',college:'重庆邮电大学软件学院',tel:'123123123123',href:'/teamDetail?id=8'}
        ],
        teamCaption:{
            arriveTime:'2000年11月成立',
            teamContent:'测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试',
            main:'主要内容主要内容主要内容主要内容主要内容主要内容主要内容主要内容主要内容主要内容主要内容主要内容主要内容主要内容主要内容'
        }
    }    
  }

  render() {
    return (
      <div className="Team" id='Team'>
          <div className='banner' style={{backgroundImage: `url(${bg})`}}>
          </div>
          <main className='main-box'>
                <ListHeader data = {this.state.listContent} />
                <div className='main-caption'>
                    <TeamCaption teamCaption = {this.state.teamCaption}/>
                    <div className='list-box'>
                        {
                            this.state.teamList.map((item,i)=> (
                                <Link to={item.href} key={i}>
                                    <TeamList data={item} key={i} />
                                </Link>
                            ))
                        }
                    </div>
                </div>
          </main>
      </div>
    )
  }
}