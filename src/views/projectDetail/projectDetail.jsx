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
import ListHeader from '@/views/common/listHeader/listHeader.jsx'
import ContentList from './commonents/contentList.jsx'
export default class projectDetail extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pageList:[
        {src:design,title:'测试测试'},
        {src:keyissue,title:'测试测试'},
        {src:point,title:'测试测试'},
        {src:diary,title:'测试测试'},
        {src:end,title:'测试测试'},
      ],
      listContent:{
        title:'互联网项目',
        page:'PROJECT'
      },
    }
  }
  render() {
    return (
        <div className ='introductBox' id='introductBox'>
          <div className = 'main-box'>
              <main className='project-box'>
                  <ListHeader data = {this.state.listContent}/>
                  <div className='main-content'>
                        {
                          this.state.pageList.map((item, i) => (
                             <ContentList key={i} pageList = {item}/>
                          ))
                        }
                  </div>
              </main>
          </div>
        </div>
    )
  }
}