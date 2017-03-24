import React from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import { HashRouter as Router, Route } from 'react-router-dom'

var App = require('./app.js')
var AboutDetails = require('./content/about_details.js')
var ProjectsDetails = require('./content/projects_details.js')
var BlogDetails = require('./content/blog_details.js')

ReactDOM.render(
	<div>
		<Headroom>
	    <div id='main-nav'>
	      <h1 id='name-text'> TRAVIS A. ROY </h1>
	      <h2 id='title-text'> [ WEB DEVELOPER ] </h2>
	    </div>
	  </Headroom>
  	<Router>
	  	<div>
	  		<Route exact path='/' component={App} />
	  		<Route path='/about' component={AboutDetails} />
	  		<Route path='/projects' component={ProjectsDetails} />
	  		<Route path='/blog' component={BlogDetails} />
	   	</div>
  	</Router>
  </div>,
  document.getElementById("root")
)



// import React from 'react'
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom'

// const BasicExample = () => (
//   <Router>
//     <div>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/topics">Topics</Link></li>
//       </ul>

//       <hr/>

//       <Route exact path="/" component={Home}/>
//       <Route path="/about" component={About}/>
//       <Route path="/topics" component={Topics}/>
//     </div>
//   </Router>
// )






// JUSTIN'S CODE

// INDEX JS

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { browserHistory } from 'react-router';

// import Routes from './routes';
// import './index.css';

// ReactDOM.render(
//   <Routes history={browserHistory} />,
//   document.getElementById('root')
// );



// import React from 'react';
// import { Router, Route } from 'react-router';
// import App from './App';
// import About from './pages/Home/About';
// import Contact from './pages/Contact/Contact';
// import Portfolio from './pages/Portfolio/Portfolio';
// import NotFound from './pages/NotFound/NotFound';

// const Routes = (props) => (
//   <Router {...props}>
//     <Route path="/" component={App}>
//       <Route path="/about" component={About} />
//       <Route path="/contact" component={Contact} />
//       <Route path="/portfolio" component={Portfolio} />
//       <Route path="*" component={NotFound} />
//     </Route>
//   </Router>
// );

// export default Routes;




// APP JS

// import React, { Component } from 'react';
// import Banner from './components/Banner';
// import Contact from './pages/Contact/Contact';
// import About from './pages/Home/About';
// import Portfolio from './pages/Portfolio/Portfolio'
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="app">

//         <Banner />
//           <main>
//             {this.props.children}
//             < Portfolio />
//             < About />
//             < Contact />
//           </main>
//       </div>
//     );
//   }
// }

// export default App;
