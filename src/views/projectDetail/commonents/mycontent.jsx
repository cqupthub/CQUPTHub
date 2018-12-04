import React from 'react'

export default class Mycontent extends React.Component{
  constructor(props){
    super(props);
  }
  componentWillMount(){
   	console.log(this.props)
  }
  render(){
    return (
    	 <div  dangerouslySetInnerHTML = {{__html:this.props.content}}>
    	 	
    	 </div>
    )
  }
}