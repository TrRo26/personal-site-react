var React = require('react')
var Collapse = require('react-bootstrap').Collapse;

var AboutEducation = React.createClass({
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
			<div id='education' style={aboutContainer}>
				<h2 onClick={ ()=> this.setState({ open: !this.state.open })}>Education</h2>
				<Collapse in={this.state.open}>
					<div>
						<div id='devBootcamp' style={aboutContainer}>
							<h3>Dev Bootcamp Graduate</h3>
							<h4>Dev Bootcamp - Chicago, Illinois</h4>
						</div>
						<div id='stockholmUniversity' style={aboutContainer}>
							<h3>Master of Science in International and Comparative Education</h3>
							<h4>Stockholm University - Stockholm, Sweden</h4>
						</div>
						<div id='michiganStateUniversity' style={aboutContainer}>
							<h3>Bachelor of Arts in Hospitality Business</h3>
							<h4>Michigan State University - East Lansing, Michigan</h4>
						</div>
					</div>
				</Collapse>
			</div>
		)
	}
})

module.exports = AboutEducation
