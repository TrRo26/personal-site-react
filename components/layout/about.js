var React = require('react')

var About = React.createClass({
  render() {
    return (
    	<div>
    		<div>a</div>
    		<div>b</div>
    		<div>o</div>
    		<div>u</div>
    		<div>t</div>
      </div>
    )
  }
})

module.exports = About

// Fade in upon image load
// var Image = React.createClass({
// 	getInitialState: fucntion() {
// 		return {
// 			loaded: false
// 		};
// 	},

// 	onImageLoad: function() {
// 		if(this.isMounted()) {
// 			this.setState({ loaded: true });
// 		}
// 	},

// 	componentDidMount: function() {
// 		var imgTag = ReactDOM.findDOMNode(this.refs.img);
// 		var imgSrc = imgTag.getAttribute('src');
// 		var img = new window.image();
// 		img.onload = this.onImageLoad;
// 		img.src = imgSrc;
// 	},

// 	render: function() {
// 		var { className, ...props } = this.props;
// 		// var imgClasses = 'image';
// 		var rootClassName = classNames(className, 'image', {
// 			'image-loaded': this.state.loaded,
// 		});
// 	}
// });
