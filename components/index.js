import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import App from './app.js'
import AboutMain from './content/about/about_main.js'
import ProjectsMain from './content/projects/projects_main.js'
import BlogMain from './content/blog/blog_main.js'

ReactDOM.render(
	<div>
    <nav id='main-nav'>
      <h1 id='name-text'> TRAVIS A. ROY </h1>
      <h2 id='title-text'> [ WEB DEVELOPER ] </h2>
    </nav>
  	<Router>
	  	<div>
	  		<Route exact path='/' component={App} />
	  		<Route path='/about' component={AboutMain} />
	  		<Route path='/projects' component={ProjectsMain} />
	  		<Route path='/blog' component={BlogMain} />
	   	</div>
  	</Router>
  </div>,
  document.getElementById("root")
)
