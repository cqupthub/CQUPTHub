import React from 'react'
import { Spin, Icon } from 'antd';
export default class Loading extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const size = Number(this.props.size) || 20;
    const antIcon = <Icon type="loading" style={{ fontSize: size }} spin />;
    return (
        <div className = 'loadingwrapper'>
          <div className = 'loadingbox'>
            <Spin indicator={antIcon}/>
          </div>
        </div>
    )
  }
}