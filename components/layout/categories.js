import React from 'react'
import About from './about.js'
import Projects from './projects.js'
import Blog from './blog.js'

var Categories = React.createClass({
  getInitialState() {
    return {
      vis: 'visible'
    }
  },
  handleClick(e) {
    e.preventDefault()
    var newState = {
      vis: 'hidden'
    }
    this.setState(newState)
    // this.context.router.push('/about')
  },
  render() {
    var categoryStyle = {
      position: 'relative',
      border: '1px solid black',
      height: 800,
      width: 'calc(33.33% - 2px)',
      float: 'left',
      fontSize: 50,
      textAlign: 'center',
      lineHeight: '7vh',
      visibility: this.state.vis
    }
    return (
    	<div>
        <div onClick={this.handleClick} style={categoryStyle}>
          <About />
        </div>
        <div style={categoryStyle}>
          <Projects />
        </div>
        <div style={categoryStyle}>
          <Blog />
        </div>
    	</div>
    )
	}
})

export default Categories
