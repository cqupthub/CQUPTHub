/**
  *
  */
import React from 'react';
import './banner.less'
import { Carousel } from 'antd';
import Loading from '../loading/loading.jsx'
export default class Banner extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      finsh:0,
      imgBox:[],
      imgUrl :["http://119.23.233.196:1234/usr/hubweb_qiantai/app/templates/static/img/2.png",'http://119.23.233.196:1234/usr/hubweb_qiantai/app/templates/static/img/4.jpg'],
    }
  }
  componentWillMount(){
    var imgBox = [];
    var _this = this;
    this.state.imgUrl.map((item,index)=>{
        imgBox[index] = new Image();
        imgBox[index].src = item;
        imgBox[index].onload = this.loadFinsh.bind(_this);
    })
    this.setState({
      imgBox:imgBox,
    })
  }
  loadFinsh(){
    this.setState({
      finsh:this.state.finsh + 1,
    },function(){
      console.log(this.state.finsh);
    })
  }
  render() {
    return (
      <div className="banner">
        {
          this.state.finsh == this.state.imgUrl.length ?
            <Carousel autoplay>
                <img src={this.state.imgUrl[0]}/>
                <img src={this.state.imgUrl[1]} />
            </Carousel>
          :<Loading size='40'/>
        }
      </div>
    )
  }
}