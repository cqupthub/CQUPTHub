/**
  *
  */
import React from 'react'
import Contact from './components/contact/contact.jsx';
import Feedback from './components/feedback/feedback.jsx';
import Footer from '../common/footer/footer.jsx'
export default class About extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="about">
        <Contact />
        <Footer/>
      </div>
    )
  }
}