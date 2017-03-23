// var React = require('react')
// var ReactDOM = require('react-dom')
// import React from 'react';

var Categories = React.createClass({
	
  getInitialState() {
    return {
      vis: 'visible'
    }
  },

  handleClick() {
    var newState = {
      vis: 'hidden'
    }
    this.setState(newState)
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

    // Need to find DRY way of adding individual category css:
    // var projectImage = {
    //   backgroundColor: '#FDF3E7',
    //   // backgroundImage: "url('./cat_project_bw.jpg')",  //find proper syntax for this to work
    //   backgroundSize: 'contain',
    //   backgroundRepeat: 'no-repeat'
    // }

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

export default Categories;

// Use for multiple styles:
// style={Object.assign(categoryBorderStyle, categoryLetterStyle)}
