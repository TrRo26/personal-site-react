import React from 'react'
import { Collapse, ProgressBar } from 'react-bootstrap'

var AboutEducation = React.createClass({
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
			<div id='education' style={container}>
				<h2 onClick={ ()=> this.setState({ open: !this.state.open })}>Education</h2>
				<Collapse in={this.state.open}>
					<div>
						<div id='devBootcamp' style={container}>
							<h3>Dev Bootcamp Graduate</h3>
							<h4>Dev Bootcamp - Chicago, Illinois</h4>
						</div>
						<div id='stockholmUniversity' style={container}>
							<h3>Master of Science in International and Comparative Education</h3>
							<h4>Stockholm University - Stockholm, Sweden</h4>
						</div>
						<div id='michiganStateUniversity' style={container}>
							<h3>Bachelor of Arts in Hospitality Business</h3>
							<h4>Michigan State University - East Lansing, Michigan</h4>
						</div>
					</div>
				</Collapse>
			</div>
		)
	}
})

export default AboutEducation
