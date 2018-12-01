/**
 * 
 */
import React from 'react';
import './teamDetail.less'
import MemberHeader from './components/memberHeader.jsx'
import TeamDetailExperence from './components/teamDetailExperence.jsx'
import TeamDetailInformation from './components/teamDetailInformation.jsx'
export default class teamDetail extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        information:{
            name:'谭丙章',
            way:'实验室负责人',
            college:'重庆邮电大学软件工程学院',
            tel:'123213123',
            skill:[{
                tit:'c++'
            },{
                tit:'c'
            }]
        },
        experence:[{
            tit:'啦啦啦啦'
        },{
            tit:'啦啦啦啦啦啦啦'
        }]
    }
  }
  render(){
    return (
      <div id='teamDetail' className="teamDetail">
          <main className='main-box'>
                <MemberHeader name = {this.state.information.name}/>
                <div className ='member-information-box'>
                    <TeamDetailInformation information = {this.state.information}/>
                    <TeamDetailExperence experence = {this.state.experence}/>
                </div>
          </main>
      </div>
    )
  }
}