var React = require('react')
var Collapse = require('react-bootstrap').Collapse;

var AboutSkills = React.createClass({
	getInitialState() {
		return(
			this.state = {}
		)
	},
	render() {
		var aboutContainer = {
      border: '1px solid black',
      margin: '1%',
      marginLeft: '5%',
      marginRight: '5%',
      padding: '10px'
    }
		return(
			<div id='techSkills'>
				<div style={aboutContainer}>
					<h2 onClick={ ()=> this.setState({ open: !this.state.open })}>Tech Skills</h2>
					<Collapse in={this.state.open}>
						<div>
							<div id='languages' style={aboutContainer}>
								<h3>Languages</h3>						
								<li>JavaScript</li>
								<li>Ruby</li>
								<li>Swift</li>
							</div>
							<div id='frameworks' style={aboutContainer}>
								<h3>Frameworks/Libraries</h3>
								<li>React</li>
								<li>JQuery</li>
								<li>Rails</li>
								<li>Sinatra</li>
								<li>Xcode</li>
							</div>
							<div id='everythingElse' style={aboutContainer}>
								<h3>Everything else</h3>
								<li>MySQL</li>
								<li>PostgreSQL</li>
								<li>HTML</li>
								<li>CSS</li>
								<li>Rspec</li>
								<li>Jasmine</li>
								<li>JSON</li>
								<li>AJAX</li>
								<li>Agile</li>
							</div>
						</div>
					</Collapse>
				</div>
			</div>
		)
	}
})

module.exports = AboutSkills
