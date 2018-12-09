import React from 'react';
import './App.less';
import Header from '../common/header/header.jsx'
import Banner from '../common/banner/banner.jsx'
// import Footer from '../common/footer/footer.jsx'

export default class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="app">
        <Header />
        <Banner/>
        {this.props.children}
      </div>
    )
  }
}