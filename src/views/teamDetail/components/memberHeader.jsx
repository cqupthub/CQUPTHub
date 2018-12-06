import React from 'react'
export default class MemberHeader extends React.Component{
  constructor(props){
    super(props)
  }
  back(){
    history.back()
  }
  render(){
    return (
        <header className ='member-box'>
            <span style={{cursor:'pointer'}} onClick = {this.back.bind(this)}>
                <img className = 'leftarrow' src={require('../../../assets/img/icon/zuojian.png')}/>            
            </span>  
            <span className='member-name'>{this.props.name}</span>
        </header>
    )
  }
}