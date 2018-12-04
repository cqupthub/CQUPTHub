import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import './assets/css/reset.css';
import './assets/css/app.less';
// import App from './views/app/App.jsx'
// import index from './views/index/index.jsx'
// import projects from './views/projects/projects.jsx';
// import projectDetail from './views/projectDetail/projectDetail.jsx'
// import team from './views/team/team.jsx'
// import teamDetail from './views/teamDetail/teamDetail.jsx'
// import article from './views/article/article.jsx'
// import aboutUs from './views/aboutUs/about.jsx'
// import pageDetail from './views/pageDetail/pageDetail.jsx'


const rootRouter = {
  path:'/',
  getComponent(nextState,callback){
    require.ensure([],require=>{
      callback(null,require('./views/app/App.jsx').default);
    },'App');
  },
  indexRoute:{
    path: 'index',
    getComponent(nextState,callback){
      require.ensure([],require=>{
        callback(null,require('./views/index/index.jsx').default);
      },'index');
    }
  },
  childRoutes: [
    {
      path:'index',
      getComponent(nextState,callback){
        require.ensure([],require=>{
        callback(null,require('./views/index/index.jsx').default);
        },'index');
      }
    },
    {
      path:'projects',
      getComponent(nextState,callback){
        require.ensure([],require=>{
        callback(null,require('./views/projects/projects.jsx').default);
        },'projects');
      }
    },
    {
      path:'projectDetail',
      getComponent(nextState,callback){
        require.ensure([],require=>{
        callback(null,require('./views/projectDetail/projectDetail.jsx').default);
        },'projectDetail');
      }
    },
    {
      path:'team',
      getComponent(nextState,callback){
        require.ensure([],require=>{
        callback(null,require('./views/team/team.jsx').default);
        },'team');
      }
    },
    {
      path:'teamDetail',
      getComponent(nextState,callback){
        require.ensure([],require=>{
        callback(null,require('./views/teamDetail/teamDetail.jsx').default);
        },'teamDetail');
      }
    },
    {
      path:'pageDetail',
      getComponent(nextState,callback){
        require.ensure([],require=>{
        callback(null,require('./views/pageDetail/pageDetail.jsx').default);
        },'pageDetail');
      }
    },
    {
      path:'article',
      getComponent(nextState,callback){
        require.ensure([],require=>{
        callback(null,require('./views/article/article.jsx').default);
        },'article');
      }
    },
    {
      path:'aboutUs',
      getComponent(nextState,callback){
        require.ensure([],require=>{
        callback(null,require('./views/aboutUs/about.jsx').default);
        },'aboutUs');
      }
    }
  ]
}
ReactDOM.render(
  // <Router history={ hashHistory }>
  //   <Route path="/" component={App}>
  //     <IndexRoute component={index} />
  //     <Route path="index" component={index} />
  //     <Route path="projects" component={projects}/>
  //     <Route path="projectDetail" component = {projectDetail} />
  //     <Route path="team" component={team} />
  //     <Route path='teamDetail' component = {teamDetail} />
  //     <Route path='pageDetail' component = {pageDetail} />
  //     <Route path="article" component={article} />
  //     <Route path="aboutUs" component={aboutUs} />
  //   </Route>
  // </Router>,
  // document.getElementById('app')
  (
    <Router
      history={hashHistory}
      routes={rootRouter}
    />
  ), document.getElementById('app')
);