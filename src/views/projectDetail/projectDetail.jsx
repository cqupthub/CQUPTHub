/**
  *实验室具体项目页
  */
import React from 'react';
import {Link} from 'react-router';
import './projectDetail.less'
import design from '@/assets/img/design.png'
import diary from '@/assets/img/diary.png'
import end from '@/assets/img/end.png'
import keyissue from '@/assets/img/keyissue.png'
import point from '@/assets/img/point.png'
import Loading from '../common/loading/loading.jsx'
import ListHeader from '@/views/common/listHeader/listHeader.jsx'
import ContentList from './commonents/contentList.jsx'
import axios from 'axios'
const type = [design,keyissue,point,diary];
const name = ['架构设计','关键问题','技术要点','过程日记']
const typeDetail = ['design','keyissue','point','process']
export default class projectDetail extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      show:false,
      projectid:this.props.location.query.projectid,
      pageList:[],
      listContent:{
        title:'互联网项目',
        page:'PROJECT'
      },
    }
  }
  getData(){
    axios.get(`http://119.23.233.196:1234/getTypeProject?Projectid=${this.state.projectid}`)
    .then((res)=>{
      console.log(res);
        let i = 0;
        let show =  [];
        for(var index in res.data){
          if(res.data[index].length != 0){
              show[i] = res.data[index][0];
              i++;
          }
        }
        show.map((item,index)=>{
          item.src = type[index]
          item.mytype = name[index]
        })
        console.log(show);
         this.setState({
          show:true,
          pageList:show,
         })
    })

  }
  componentWillMount(){
    this.getData()
  }
  render() {
    return (
        <div className ='introductBox' id='introductBox'>
          <div className = 'main-box'>
              <main className='project-box'>
                  <ListHeader data = {this.state.listContent}/>
                  {
                    this.state.show?
                      <div className='main-content'>
                        {
                          this.state.pageList.map((item, i) => (
                             <ContentList type = {typeDetail[i]} key={i} pageList = {item} id = {this.state.projectid}/>
                          ))
                        }
                      </div>
                    : <Loading size='36'/>
                  }
              </main>
          </div>
        </div>
    )
  }
}