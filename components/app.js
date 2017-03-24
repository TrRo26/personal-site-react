var React = require('react')
var Categories = require('./layout/categories.js')

var App = React.createClass({
  render: function() {
    return (
      <div>
        <div id='main-nav'>
          <h1 id='name-text'> TRAVIS A. ROY </h1>
          <h2 id='title-text'> [ WEB DEVELOPER ] </h2>
        </div>
        <div id='main-content'>
          <Categories />
        </div>
      </div>
    )
  }
})

module.exports = App
