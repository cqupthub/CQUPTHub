import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft,faArrowRight}  from '@fortawesome/fontawesome-free-solid'
export default class MemberHeader extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
        <header className ='member-box'>
            <FontAwesomeIcon icon = {faArrowLeft} style={{fontSize:30,color:'green',}} />
            <span className='member-name'>{this.props.name}</span>
        </header>
    )
  }
}