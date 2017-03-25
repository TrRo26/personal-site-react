var React = require('react')

var ProjectMain = React.createClass({
	render() {
		var title = {
			textAlign: 'center',
			fontSize: 30
		}
		var container = {
			border: '1px solid black',
      margin: '1%',
      marginLeft: '5%',
      marginRight: '5%',
      padding: '10px'
    }
		return(
			<div>

				<h1 style={title}>PROJECTS</h1>
			
				<div id='projectRemind' style={container}>
					<h2>Remind</h2>
					<h3>Tech:</h3>
					<p>Ruby on Rails, Xcode, Swift, Google Maps API and Heroku</p>
					<h3>Timeframe:</h3>
					<p>7 days building; 2 days finalizing features, prep and presentation</p>
					<h3>Notable constraints:</h3>
					<p>Zero previous Swift or Xcode experience for the collective team</p>
					<h3>Description</h3>
					<p>Remind is an iOS application that notifies users when they are near a business/location that offers any of the items entered on their personal and customizable list.</p>
					<p>My main focus throughout the project was in researching and implementing the Core Motion Framework used to constrain push notifications to a set distance moved by the user, preventing extraneous notifications. As a result, I gained a solid foundation in Xcode and Swift and a broader understanding of mobile development as a whole.</p>
				</div>
			
				<div id='projectBattleship' style={container}>
					<h2>Battleship Clone</h2>
					<h3>Tech:</h3>
					<p>Ruby, Rails, JQuery, AJAX</p>
					<h3>Timeframe:</h3>
					<p>3 days</p>
					<h3>Notable constraints:</h3>
					<p>Time</p>
					<h3>Description</h3>
					<p>A rudimentary clone of the classic game, Battleship. This remake allows two players to play one another using two separate devices.</p>
					<p>My main contribution to this project was in setting up both backend and frontend support for user stats as well as aiding in the development of needed asynchronous requests.</p>
				</div>

			</div>
		)
	}
})

module.exports = ProjectMain
