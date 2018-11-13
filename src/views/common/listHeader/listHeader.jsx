import React from 'react'
import './listHeader.less'
export default class ListHeader extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <header className='project-header'>
          
          <span className='header-tit'>{this.props.data.title}</span>
          <div className='header-box'>
              <span className='header-line'></span>
              <span className='header-content'>{this.props.data.page}</span>
              <span className='header-line'></span>
          </div>
      </header>
    )
  }
}