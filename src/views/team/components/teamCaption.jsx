import React from 'react'
import logo from '@/assets/img/logo.png';
export default class teamCaption extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
        <div className='caption-box'>
            <div className='caption-content'>
                <p className='caption-tit'>{this.props.teamCaption.arriveTime}</p>
                <p className='caption-tit'>{this.props.teamCaption.teamContent}</p>
                <p className='caption-main'>{this.props.teamCaption.main}</p>
            </div>
            <div className='caption-logo'>
                <div className='caption-border'></div>
                <img src={logo} alt=""/>
            </div>
        </div>
    )
  }
}