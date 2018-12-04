import React from 'react'
import ArticleList from './components/articlelist/articlelist.jsx';
import Banner from '../index/components/banner/banner.jsx';
import ArticleDetails from './components/articledetails/articledetails.jsx';
import { Pagination } from 'antd';
import Footer from '../common/footer/footer.jsx'
import axios from 'axios';
import './article.less'

export default class Article extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      shownArticleId: null,
      articles:[],
      show:1,
      current:1,
      total:'',
      showItem:8,
    }
  }
  getData(){
    axios.get("http://119.23.233.196:1234/getAllPage?title=&time=&page="+ this.state.current)
    .then((res)=>{

          var myarticles = [
            {
              title: '比阿吉比阿吉比阿吉比阿吉比',
              publish: '2018年11月30日',
              author: '比阿吉',
              id: 1,
              content: 'Python是一种解释型、面向对象、动态数据类型的高级程序设计语言。Python由Guido van Rossum于1989年底发明，第一个公开发行版发行于1991年。像Perl语言一样, Python 源代码同样遵循 GPL(GNU General Public License)协议。本教程主要针对Python 2.x版本的学习，如果你使用的是Python 3.x版本请移步至Python 3.X版本的教程。',
              views: 1234,
              likes: 563,
            },
          ]
          res.data.pageAll.map((item,index)=>{
            myarticles[index] = {};
            myarticles[index].title = item.title;
            myarticles[index].id = item.id;
            myarticles[index].projectid = item.Projectid;
            myarticles[index].jianjie = item.jianjie;
            myarticles[index].time = item.time;
            myarticles[index].content  = item.content;
            myarticles[index].views = 1234;
            myarticles[index].likes = 563;
          })
          this.setState({
            articles:myarticles,
            show:2,
            total:res.data.totalAll
          })
    })
  }
  componentWillMount(){
    this.getData()
  }
  onChange(page){
    this.setState({
      current:page,
    },function(){this.getData()}) //setState是异步的
  }
  handleArticleIdGet (id) {
    this.setState({
      shownArticleId: id,
    })
  }

  handleArticleIdRemove () {
    this.setState({
      shownArticleId: null,
    })
  }
  render() {
    return (
      <div>
              <div className="Article">
                <Banner />
                {
                  this.state.show  == 2 ?
                    <div className='myBox'>
                      {
                        this.state.shownArticleId !== null ?
                          <ArticleDetails 
                            goBack={this.handleArticleIdRemove.bind(this)}
                            article={this.state.articles[this.state.shownArticleId]} />
                        : 
                          <div>
                            <ArticleList
                              articles={this.state.articles}
                              getArticleId={this.handleArticleIdGet.bind(this)}
                            />
                            <div className = 'pagination'> 
                              <Pagination pageSize = {this.state.showItem} current={this.state.current} onChange={this.onChange.bind(this)}  total={this.state.total}/>
                            </div>
                          </div>

                      }
                    </div>
                  :''
                }
                {
                  this.state.show == 2?
                  <Footer/>
                  :''
                }
              </div>
      </div>
    )
  }
}