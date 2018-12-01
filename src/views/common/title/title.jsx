import React, { Component } from 'react';
import './title.less'

class Title extends Component {

  constructor (props) {
    super (props)
    this.state = {
      fontSize: props.fontSize,
    }
  }

  render() {
    return (
      <div className='title'>
        <div 
          style={{fontSize: this.props.fontSize,}}
          className="title-text">{this.props.content}</div>
      </div>
    );
  }
}

export default Title;
