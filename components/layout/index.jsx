import React from 'react';
import ReactDOM from 'react-dom';

// import { browserHistory } from 'react-router';
// import { Router, Route } from 'react-router';

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
	<div>
		<App />
	</div>,
  document.querySelector("#root")
);
