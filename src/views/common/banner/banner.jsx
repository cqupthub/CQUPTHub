/**
  *
  */
import React from 'react';
import { Carousel } from 'antd';

export default class Banner extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imgUrl :["/usr/hubweb_qiantai/app/templates/static/img/2.png",'/usr/hubweb_qiantai/app/templates/static/img/4.jpg'],
    }
  }

  render() {
    return (
      <div className="banner">
          
      </div>
    )
  }
}