import React from 'react';
import ReactDOM from 'react-dom';

// import { browserHistory } from 'react-router';

// import { Router, Route } from 'react-router';
// import About from './pages/Home/About';
// import Contact from './pages/Contact/Contact';
// import Portfolio from './pages/Portfolio/Portfolio';
// import NotFound from './pages/NotFound/NotFound';

var App = React.createClass({
  render: function() {
    return (
      <div>
        <div id='main-nav'>
          <h1 id='name-text'>TRAVIS A. ROY</h1>
          <h2 id='title-text'>[ WEB DEVELOPER ]</h2>
        </div>
        <div id='main-content'>
        
        </div>
      </div>
    )
  }
});

ReactDOM.render(
  <Router history={ReactRouter.hashHistory}>
    <Route path="/" component={App}>
    </Route>
  </Router>,
  document.querySelector("#root")
);





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









// <h2>HELLO</h2>

// <script type="text/babel">
//   var destination = document.querySelector("#container");

//   ReactDOM.render(
//     <div>
//       Hello!
//     </div>,
//     destination
//   );
// </script>
