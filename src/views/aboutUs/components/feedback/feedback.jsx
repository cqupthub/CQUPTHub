import React, { Component } from 'react';
import './feedback.less'
import Title from '../../../common/title/title.jsx';

class Feedback extends Component {
  render() {
    return (
      <div className='feedback'>
        <div className='feedback-head'>
          <div className="feedback-hd-title">HAVE ANY QUESTION?</div>
          <Title 
            content={(
              <div className="feedback-hd-subtitle">
                <div>非常感谢您对我们实验室关注,</div>
                <div>如果您有任何问题，请给我们留言吧!</div>
              </div>
            )}
          />
        </div>
        <div className="feedback-body">
          <div className="feedback-bd-inputs">
            <input type="text" className="feedback-bd-input-name" placeholder='你的名字'/>
            <input type="text" className="feedback-bd-input-email" placeholder='你的邮箱'/>
          </div>
          <div className="feedback-bd-textarea">
            <textarea className='feedback-bd-textarea-fdb' id="" cols="30" rows="10" placeholder='你的意见和建议'></textarea>
          </div>
          <div className="feedback-bd-submit">提交信息</div>
        </div>
      </div>
    );
  }
}

export default Feedback;
