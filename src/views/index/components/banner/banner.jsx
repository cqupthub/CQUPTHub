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
        <Carousel autoplay arrows>
        {
          this.state.imgPaths.map((val, i) => (
            <img key={i} src={val} alt=""/>
          ))
        }
        </Carousel>
      </div>
    )
  }
}