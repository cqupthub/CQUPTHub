/**
  *
  */
import React from 'react';
import { Carousel } from 'antd';

export default class Banner extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="banner">
        <Carousel autoplay>
          <div><img src="https://cqupthub-1252092265.cos.ap-chengdu.myqcloud.com/banner.png" alt=""/></div>
          <div><img src="https://cqupthub-1252092265.cos.ap-chengdu.myqcloud.com/banner2.jpg" alt=""/></div>
        </Carousel>
      </div>
    )
  }
}