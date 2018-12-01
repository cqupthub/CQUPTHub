import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import './assets/css/reset.css';
import './assets/css/app.less';

import App from './views/app/App.jsx'
import index from './views/index/index.jsx'
import projects from './views/projects/projects.jsx';
import team from './views/team/team.jsx';
import article from './views/article/article.jsx';
import aboutUs from './views/aboutUs/about.jsx';



ReactDOM.render(
  <Router history={ hashHistory }>
    <Route path="/" component={App}>
      <IndexRoute component={index} />
      <Route path="index" component={index} />
      <Route path="projects" component={projects} />
      <Route path="team" component={team} />
      <Route path="article" component={article} />
      <Route path="aboutUs" component={aboutUs} />
    </Route>
  </Router>,
  document.getElementById('app')
);