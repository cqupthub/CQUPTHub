import React, { Component } from 'react';
import './contact.less'
import Title from '../../../common/title/title.jsx';

const contactWays = [
  {
    icon: require('../../../../assets/img/icon/youxiang.png'),
    detail: '8141234567@163.com',
    name: 'email',
  },
  {
    icon: require('../../../../assets/img/icon/shijian.png'),
    detail: '07:00AM-22:00PM',
    name: 'time',
  },
  {
    icon: require('../../../../assets/img/icon/weibiaoti.png'),
    detail: '13677890987',
    name: 'tel',
  },
  {
    icon: require('../../../../assets/img/icon/wangzhan.png'),
    detail: 'http://cqupthub.com',
    name: 'website',
  },
]

class Contact extends Component {
  render() {
    return (
      <div className='contact'>
        <div className="contact-header">
          <Title 
            content='联系我们'
          />
        </div>
        <div className="contact-body">
          <div className="contact-bd-left">
            <div className="contact-bd-left-address">
              <h1>CQUPTHub</h1>
              <p>重庆市南岸区崇文路2号重庆邮电大学数字图书馆T2301, T2303</p>
            </div>
            <div className="contact-bd-left-contactways">
            {
              contactWays.map((val, i) => (
                <div key={i} className='contact-bd-left-cw-item'>
                  <div className='contact-bd-left-cw-item-icon'><img src={val.icon} alt=""/></div>
                  <div className='contact-bd-left-cw-item-detail'>{val.detail}</div>
                </div>
              ))
            }
            </div>
          </div>
          <div className="contact-bd-mid" />

        </div>
      </div>
    );
  }
}

export default Contact;
