var React = require('react')
var Categories = require('./layout/categories.js')

var App = React.createClass({
  render: function() {
    return (
      <div id='main-content'>
        <Categories />
      </div>
    )
  }
})

module.exports = App
