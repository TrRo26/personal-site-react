import React from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import { HashRouter as Router, Route } from 'react-router-dom'

var App = require('./app.js')
var AboutMain = require('./content/about/about_main.js')
var ProjectsMain = require('./content/projects/projects_main.js')
var BlogMain = require('./content/blog/blog_main.js')

ReactDOM.render(
	<div>
    <div id='main-nav'>
      <h1 id='name-text'> TRAVIS A. ROY </h1>
      <h2 id='title-text'> [ WEB DEVELOPER ] </h2>
    </div>
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
