import React from 'react'
import Categories from './layout/categories.js'
import { Link } from 'react-router'

var App = React.createClass({
  render: function() {
    return (
      <div id='main-content'>
        <Categories />
      </div>
    )
  }
})

export default App

// <h4><Link to='/about'>Dis work?</Link></h4>