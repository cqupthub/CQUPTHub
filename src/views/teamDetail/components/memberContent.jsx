import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft,faArrowRight}  from '@fortawesome/fontawesome-free-solid'
export default class memberContent extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
        <div className = 'member-content'>
            <div className='member-tit'>{this.props.information.name}</div>
            <div className='member-stit'>{this.props.information.direction}</div>
            <div className = 'member-border'></div>
            <div className = 'member-pra'>{this.props.information.college}</div>
            <div className = 'member-skill-box'>
                <p className='member-skill-tit'>个人技能</p>
                <ul className ='member-skill-detail'>
                  {
                    this.props.information.skill.map((item,index)=>(
                      <li className ='skill-list' key = {index}>
                        <FontAwesomeIcon icon = {faArrowRight} className ='skill-icon' />
                        <span className = 'skill-detail'>{item}</span>
                      </li>
                    ))
                  }
                </ul>
            </div>
        </div>
    )
  }
}