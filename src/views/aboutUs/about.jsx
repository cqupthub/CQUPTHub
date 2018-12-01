/**
  *
  */
import React from 'react'
import Contact from './components/contact/contact.jsx';
import Feedback from './components/feedback/feedback.jsx';

export default class About extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="about">
        <Feedback />
        <Contact />
      </div>
    )
  }
}