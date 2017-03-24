var React = require('react')

var ProjectMain = React.createClass({
	render() {
		return(
			<div>
				<h3>PROJECTS</h3>
				<p>
				Remind
				Project descriptionTech: Ruby on Rails, Xcode, Swift, Google Maps API and Heroku
				Timeframe: 7 days building; 2 days finalizing features, prep and presentation
				Notable constraints: Zero previous Swift or Xcode experience for the collective team

				Remind is an iOS application that notifies users when they are near a business/location that offers any of the items entered on their personal and customizable list. 

				My main focus throughout the project was in researching and implementing the Core Motion Framework used to constrain push notifications to a set distance moved by the user, preventing extraneous notifications. As a result, I gained a solid foundation in Xcode and Swift and a broader understanding of mobile development as a whole.


				Battleship Clone
				Project descriptionTech: Ruby, Rails, JQuery, AJAX
				Timeframe: 3 days

				A rudimentary clone of the classic game, Battleship. This remake allows two players to play one another using two separate devices.

				My main contribution to this project was in setting up both backend and frontend support for user stats as well as aiding in the development of needed asynchronous requests.
				</p>
			</div>
		)
	}
})

module.exports = ProjectMain
