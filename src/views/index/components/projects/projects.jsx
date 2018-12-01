import React, { Component } from 'react';
import './projects.less'

const projectsInfo = [
  {
    img: require('../../../../assets/img/bitcoin-3698463_640.jpg'),
    name: '区块链技术',
    description: '关于研究区块链，比特币等一系列问题，比阿吉比阿吉比阿吉比阿吉比阿吉比阿吉比阿吉比阿吉比阿吉',
  },
  {
    img: require('../../../../assets/img/ball-63527_640.jpg'),
    name: '取证技术',
    description: '关于研究区块链，比特币等一系列问题，比阿吉比阿吉比阿吉比阿吉比阿吉比阿吉比阿吉比阿吉比阿吉',
  },
  {
    img: require('../../../../assets/img/cell-3089947_640.jpg'),
    name: '生物机器学习技术',
    description: '关于研究区块链，比特币等一系列问题，比阿吉比阿吉比阿吉比阿吉比阿吉比阿吉比阿吉比阿吉比阿吉',
  },
]

class Projects extends Component {
  render() {
    return (
      <div className='pros'>
        <div className='pros-header'>项目展示 Projects</div>
        <div className="pros-body">
        {
          projectsInfo.map((val, i) => (
            <div key={i} className="pros-bd-item">
              <div className="pros-bd-item-img">
                <img alt='' src={val.img}/>
              </div>
              <div className="pros-bd-item-text">
                <div className="pros-bd-item-t-title">{val.name}</div>
                <div className="pros-bd-item-t-desc">{val.description}</div>
              </div>
            </div>
          ))
        }
        </div>
      </div>
    );
  }
}

export default Projects;
