var React = require('react')
var Collapse = require('react-bootstrap').Collapse;

var AboutExperience = React.createClass({
	getInitialState() {
		return(
			this.state = {}
		)
	},
	render() {
		var container = {
      border: '1px solid black',
      margin: '1%',
      marginLeft: '5%',
      marginRight: '5%',
      padding: '10px'
    }
		return(
			<div id='experience' style={container}>
				<h2 onClick={ ()=> this.setState({ open: !this.state.open })}>Experience</h2>
				<Collapse in={this.state.open}>
					<div>
						<p>For more details on previous experience, please feel free to take a look at my LinkedIn profile: https://www.linkedin.com/in/travisroy/</p>
					</div>
				</Collapse>
			</div>
		)
	}
})

module.exports = AboutExperience
