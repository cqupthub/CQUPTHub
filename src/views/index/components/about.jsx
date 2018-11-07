/**
  *
  */
import React from 'react'

export default class About extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="about">
        <h3>WHO AM I?</h3>
        <div className="rows">
          <div className="row">
            <span>最优秀的创新实验室</span>
          </div>
          <div className="row">
            <span>参与多个国家级项目</span>
          </div>
        </div>
        <div className="rows">
          <div className="row">
            <h3>100000000+</h3>
            <h4>投资总额高达上亿元</h4>
          </div>
          <div className="row">
            <h3>TOP 1</h3>
            <h4>多位领导对实验室高度评价</h4>
          </div>
          <div className="row">
            <h3>5132000+</h3>
            <h4>单个项目投资高达5231万元</h4>
          </div>
        </div>
      </div>
    )
  }
}