/**
  *
  */
import React from 'react';
import { Carousel } from 'antd';

export default class Banner extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imgPaths: [
        require('../../../../assets/img/通屏banner2jpg.jpg'),
        require('../../../../assets/img/通屏banner.png'),
      ]
    }
  }

  render() {
    return (
      <div className="banner">
        <img src={this.state.imgPaths[0]} alt=""/>
      </div>
    )
  }
}