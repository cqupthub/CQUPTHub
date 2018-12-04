/**
 * 首页
 */
import React from 'react';
import './pageDetail.less';
import axios from 'axios';
import PageList from './components/list.jsx'
import PageDetailVal from './components/PageDetailVal.jsx'
export default class Index extends React.Component{
  constructor(props){
    super(props);
    this.state={
      articlList:[],
      show:false,
      projectid:this.props.location.query.projectid,
      type:this.props.location.query.type,
      listShow:null, //具体文章的showID
    }
  }
  getData(){
    axios.get('http://119.23.233.196:1234/getTypeProject?Projectid=' + this.state.projectid)
    .then((res)=>{
        var  article = [];  
        article = res.data[this.state.type];
        this.setState({
          show:true,
          articlList:article,
         })
        console.log(article);
    })
  }
  back(){
    this.setState({
      listShow:null
    })
  }
  showMylist(id){
    this.setState({
      listShow : id
    })
  }
  componentWillMount(){
    this.getData()
  }
  render(){
    return (
      <div className="pageDetail" id='pageDetail'>
          <main className='main-box'>
            {
              this.state.show?
                <div>
                  {
                    this.state.listShow !==null?
                     <PageDetailVal articlList = {this.state.articlList[this.state.listShow]} back={this.back.bind(this)} />
                    : 
                      <div className='myBox'>
                          {
                            this.state.articlList.map((item, i) => (
                                <PageList id = {i} showMylist={this.showMylist.bind(this)} articlList = {item} key={i}></PageList> 
                            ))
                          }
                      </div>
                  }
                </div>
                :''
            }

          </main>
      </div>
    )
  }
}