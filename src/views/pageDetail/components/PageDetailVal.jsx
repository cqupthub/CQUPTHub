
import React from 'react'

export default class PageDetailVal extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="PageDetailVal">
          <div className='detail-tit clearfix'>
              <div className = 'alltit'>
                  <div className='alltit-img'>
                      <img  onClick = {this.props.back}src={require('../../../assets/img/icon/fanhui.png')} />
                  </div>
                  <div className='alltit-de'>
                      <span className ='tit-first'>
                        {this.props.articlList.title}
                    </span>
                  </div>
              </div>
              <div className = 'stit'>
                  {this.props.articlList.EssayTit}
              </div>
          </div>
          <div className = 'detail-content' dangerouslySetInnerHTML = {{__html:this.props.articlList.content}}>
              
          </div>
      </div>
    )
  }
}