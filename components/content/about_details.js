var React = require('react')

var AboutDetails = React.createClass({	
	render() {
		var title = {
			textAlign: 'center',
			margin: '10px',
			fontSize: 30
		}
		var aboutContainer = {
      border: '1px solid black',
      margin: '10px',
      padding: '10px'
    }
		return(
			<div>
				<h1 style={title}>ABOUT</h1>
				<div id='summary' style={aboutContainer}>
					<p>
						As a result of several years of intense interest in the field of web development and a strong desire to build and create, I recently attended and graduated from the fully immersive web development program at DevBootcamp in Chicago. Working and studying approximately 60 hours per week, I had the opportunity to build numerous programs utilizing Ruby, Rails, HTML, CSS, JavaScript, JQuery, Sinatra, Xcode, Swift, SQL, and many other development tools.
					</p>
					<p>
						In addition to my current studies at DevBootcamp, I have recently earned a Master's of Science in International and Comparative Education as a result of my intense interest in culture, all things international and, of course, education. I am highly organized and pride myself on the ability to do just about anything and do it well.
					</p>
					<p>
						My past work with CCI Greenheart in the student exchange industry has provided me with invaluable people skills through day-to-day dealings with a multitude of international and domestic partners, employers and students alike. My formal education has afforded me valuable project management skills, an independent work ethic and an acute understanding of educational design and learning techniques.
					</p>
					<p>
						I have also been lucky enough to have had the chance to spend nearly half a year traveling throughout Western and Eastern Europe, a year and a half working and traveling in Australia and New Zealand, and two years studying and working in Sweden for graduate school. I am absolutely fascinated by different cultures and strongly believe that experiencing the differences those cultures have to offer is essential to a healthy perspective in todays world.
					</p>
				</div>
				<div id='techSkills'>
					<div style={aboutContainer}>
						<h2>Tech Skills</h2>
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
				</div>
				<div id='education' style={aboutContainer}>
					<h2>Education</h2>
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
				<div id='experience' style={aboutContainer}>
					<h2>Experience</h2>
					<p>For more details on previous experience, please feel free to take a look at my LinkedIn profile: https://www.linkedin.com/in/travisroy/</p>
				</div>
			</div>
		)
	}
})

module.exports = AboutDetails
