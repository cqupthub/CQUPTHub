import React from 'react'
import ArticleList from './components/articlelist/articlelist.jsx';
import Banner from '../index/components/banner/banner.jsx';
import ArticleDetails from './components/articledetails/articledetails.jsx';

const articles = [
  {
    title: '比阿吉比阿吉比阿吉比阿吉比',
    publish: '2018年11月30日',
    author: '比阿吉',
    id: 1,
    content: 'Python是一种解释型、面向对象、动态数据类型的高级程序设计语言。Python由Guido van Rossum于1989年底发明，第一个公开发行版发行于1991年。像Perl语言一样, Python 源代码同样遵循 GPL(GNU General Public License)协议。本教程主要针对Python 2.x版本的学习，如果你使用的是Python 3.x版本请移步至Python 3.X版本的教程。',
    views: 1234,
    likes: 563,
  },
  {
    title: '比阿吉比阿吉比阿吉比阿吉比',
    publish: '2018年11月30日',
    author: '比阿吉',
    id: 1,
    content: '数据库（Database）是按照数据结构来组织、存储和管理数据的仓库每个数据库都有一个或多个不同的API用于创建，访问，管理，搜索和复制所保存的数据。我们也可以将数据存储在文件中，但是在文件中读写数据速度相对较慢。所以，现在我们使用关系型数据库管理系统（RDBMS）来存储和管理的大数据量。所谓的关系型数据库，是建立在关系模型基础上的数据库，借助于集合代数等数学概念和方法来处理数据库中的数据。RDBMS即关系数据库管理系统(Relational Database Management System)的特点：',
    views: 12345,
    likes: 5663,
  },
  {
    title: '比阿吉比阿吉比阿吉比阿吉比',
    publish: '2018年11月30日',
    author: '比阿吉',
    id: 1,
    content: '数据库（Database）是按照数据结构来组织、存储和管理数据的仓库每个数据库都有一个或多个不同的API用于创建，访问，管理，搜索和复制所保存的数据。我们也可以将数据存储在文件中，但是在文件中读写数据速度相对较慢。所以，现在我们使用关系型数据库管理系统（RDBMS）来存储和管理的大数据量。所谓的关系型数据库，是建立在关系模型基础上的数据库，借助于集合代数等数学概念和方法来处理数据库中的数据。RDBMS即关系数据库管理系统(Relational Database Management System)的特点：',
    views: 12,
    likes: 9,
  },
  {
    title: '比阿吉比阿吉比阿吉比阿吉比',
    publish: '2018年11月30日',
    author: '比阿吉',
    id: 1,
    content: '数据库（Database）是按照数据结构来组织、存储和管理数据的仓库每个数据库都有一个或多个不同的API用于创建，访问，管理，搜索和复制所保存的数据。我们也可以将数据存储在文件中，但是在文件中读写数据速度相对较慢。所以，现在我们使用关系型数据库管理系统（RDBMS）来存储和管理的大数据量。所谓的关系型数据库，是建立在关系模型基础上的数据库，借助于集合代数等数学概念和方法来处理数据库中的数据。RDBMS即关系数据库管理系统(Relational Database Management System)的特点：',
    views: 123,
    likes: 56,
  },
  {
    title: '比阿吉比阿吉比阿吉比阿吉比',
    publish: '2018年11月30日',
    author: '比阿吉',
    id: 1,
    content: '数据库（Database）是按照数据结构来组织、存储和管理数据的仓库每个数据库都有一个或多个不同的API用于创建，访问，管理，搜索和复制所保存的数据。我们也可以将数据存储在文件中，但是在文件中读写数据速度相对较慢。所以，现在我们使用关系型数据库管理系统（RDBMS）来存储和管理的大数据量。所谓的关系型数据库，是建立在关系模型基础上的数据库，借助于集合代数等数学概念和方法来处理数据库中的数据。RDBMS即关系数据库管理系统(Relational Database Management System)的特点：',
    views: 1278,
    likes: 98,
  },
]

export default class Article extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      shownArticleId: null,
    }
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
      <div className="Article">
      {
        this.state.shownArticleId !== null ?
          <ArticleDetails 
            goBack={this.handleArticleIdRemove.bind(this)}
            article={articles[this.state.shownArticleId]} />
        : <div>
            <Banner />
            <ArticleList
              articles={articles}
              getArticleId={this.handleArticleIdGet.bind(this)}
            />
          </div>
      }
      </div>
    )
  }
}