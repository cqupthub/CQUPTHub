import React from 'react'
import MemberContent from './memberContent.jsx'
import MemberImg from './memberImg.jsx'
export default class teamDetailInformation extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className = 'member-information'>
          <MemberImg/>
          <MemberContent information = {this.props.information}/>
      </div>
    )
  }
}