/**
  *
  */
import React from 'react'
import {Button} from 'antd'

console.log(Button);
export default class Test extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="about">
          <Button></Button>
      </div>
    )
  }
}