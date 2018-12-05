/**
 * 
 */
import React from 'react';
import './teamDetail.less'
import MemberHeader from './components/memberHeader.jsx'
import Loading from '../common/loading/loading.jsx'
import TeamDetailExperence from './components/teamDetailExperence.jsx'
import TeamDetailInformation from './components/teamDetailInformation.jsx'
import axios from 'axios'
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
        }],
        finsh:false,
    }
  }
  componentWillMount(){
    this.getData()
  }
  getData(){
    axios.get('http://119.23.233.196:1234/editMember?id='+ this.props.location.query.id )
    .then((res)=>{
        if(res.data.skill.language && res.data.skill.software){
          res.data.skill = res.data.skill.language.concat(res.data.skill.software);
        }
        else{
          res.data.skill = []; 
        }
        console.log(res.data.skill);
        this.setState({
          information:res.data, //获取所有
          finsh:true,
        })
    })
  }
  render(){
    return (
      <div id='teamDetail' className="teamDetail">
          <main className='main-box'>
          {
            this.state.finsh ?
              <div>
                <MemberHeader name = {this.state.information.name}/>
                <div className ='member-information-box'>
                    <TeamDetailInformation information = {this.state.information}/>
                    <TeamDetailExperence experence = {this.state.information.experience}/>
                </div>
              </div>
            : <Loading size='36'/>
          }
          </main>
      </div>
    )
  }
}