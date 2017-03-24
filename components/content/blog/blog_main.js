var React = require('react')

var BlogMain = React.createClass({	
	render() {
		var title = {
			textAlign: 'center',
			fontSize: 30
		}
		var aboutContainer = {
      margin: '1%',
      marginLeft: '5%',
      marginRight: '5%',
      padding: '10px'
    }
		return(
			<div>

				<h1 style={title}>BLOG</h1>

				<div id='summary' style={aboutContainer}>
					<p>Eventually...blog posts will go here.</p>
				</div>
				
			</div>
		)
	}
})

module.exports = BlogMain
