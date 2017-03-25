var React = require('react')
var Collapse = require('react-bootstrap').Collapse
var ProgressBar = require('react-bootstrap').ProgressBar

var AboutSkills = React.createClass({
	getInitialState() {
		return(
			this.state = {
				languageSkills: [
	        {type: "JavaScript", level: 50},
	        {type: "Ruby", level: 50},
	        {type: "Swift", level: 15}
      	],
      	frameworkSkills: [
      		{type: "React", level: 30},
      		{type: "JQuery", level: 30},
      		{type: "Rails", level: 20},
      		{type: "Sinatra", level: 70},
      		{type: "Xcode", level: 15},
      	],
      	everythingElseSkills: [
      		{type: "MySQL", level: 50},
      		{type: "PostgreSQL", level: 50},
      		{type: "HTML", level: 80},
      		{type: "CSS", level: 40},
      		{type: "RSpec", level: 50},
      		{type: "Jasmine", level: 30},
      		{type: "JSON", level: 50},
      		{type: "AJAX", level: 50},
      		{type: "Agile", level: 25},
      	]
			}
		)
	},
	getLanguageSkills() {
    return this.state.languageSkills
  },
  getFrameworkSkills() {
  	return this.state.frameworkSkills
  },
  getEverythingElseSkills() {
  	return this.state.everythingElseSkills
  },
  componentDidMount() {
    setTimeout(function() {
      document.getElementById('languages').classList.remove('collapsed')
    }, 1000);
  },
  setShade(input) {
    return 100 / (input.index + 3.5) ;
  },
	render() {
		var container = {
      border: '1px solid black',
      margin: '1%',
      marginLeft: '5%',
      marginRight: '5%',
      padding: '10px'
    }
    var hiddenContainer = {
    	margin: '1%',
      marginLeft: '2%',
      marginRight: '2%',
      padding: '10px'
    }
    var skillBar = {
    	color: 'white',
    	marginLeft: '10px'
    }
    var skillStyle = {
  		margin: '0 0 30px 0',
		  padding: 0,
		  width: 'calc(100% - 50px)'
  	}	
		return(
			<div id='techSkills'>
				<div style={container}>
					<h2 onClick={ ()=> this.setState({ open: !this.state.open })}>Tech Skills</h2>
					<Collapse in={this.state.open}>

						<div>
							<div id='languages' style={hiddenContainer}>
								<h3>Languages</h3>						
								<ul className="skillStyle">
          				{this.getLanguageSkills().map((skill, index) => 
            			<div key={skill.type} style={ {
                    width: skill.level + '%',
                    backgroundColor: 'hsl(' + this.props.hue + ', ' + this.props.saturation + '%, ' + this.setShade({ index }) + '%)'
                  	} }>
              			<p style={skillBar}>{skill.type}</p>
            			</div>
          				)}
        				</ul>
							</div>

							<div id='frameworks' style={hiddenContainer}>
								<h3>Frameworks/Libraries</h3>
								<ul className="skillStyle">
          				{this.getFrameworkSkills().map((skill, index) => 
            			<div key={skill.type} style={ {
                    width: skill.level + '%',
                    backgroundColor: 'hsl(' + this.props.hue + ', ' + this.props.saturation + '%, ' + this.setShade({ index }) + '%)'
                  	} }>
              			<p style={skillBar}>{skill.type}</p>
            			</div>
          				)}
        				</ul>
							</div>

							<div id='everythingElse' style={hiddenContainer}>
								<h3>Everything else</h3>
								<ul className="skillStyle">
          				{this.getEverythingElseSkills().map((skill, index) => 
            			<div key={skill.type} style={ {
                    width: skill.level + '%',
                    backgroundColor: 'hsl(' + this.props.hue + ', ' + this.props.saturation + '%, ' + this.setShade({ index }) + '%)'
                  	} }>
              			<p style={skillBar}>{skill.type}</p>
            			</div>
          				)}
        				</ul>
							</div>

						</div>
					</Collapse>
				</div>
			</div>
		)
	}
})

module.exports = AboutSkills

// SKILL BAR EXAMPLE: http://codepen.io/ajaykarwal/pen/bqwWNy
// An HSL color value is specified with: hsl(hue, saturation, lightness). 
// Hue is a degree on the color wheel (from 0 to 360) - 0 (or 360) is red, 120 is green, 240 is blue. 
// Saturation is a percentage value; 0% means a shade of gray and 100% is the full color.
// Lightness is also a percentage; 0% is black, 100% is white.
