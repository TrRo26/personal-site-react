// CANNOT GET RAILS TO RECOGNIZE REACT-ROUTER - TREATS IT AS IT DOESN'T EXIST

var Router = window.ReactRouter.Router,
    Route = window.ReactRouter.Route,
    Link = window.ReactRouter.Link
    browserHistory = window.ReactRouter.browserHistory;

var App = React.createClass({
	render() {
		return(
	   	<Router history={hashHistory}>
				<Route path='/categories' component={Categories} />
			</Router>)
	}
})


// var App = React.createClass({
	
// 	render() {
// 		return(
// 			<div>
// 				<Categories />
// 			</div>
// 		)
// 	}
// })

// ONLY THE FOLLOWING ON THE PAGE CORRECTLY RENDERS Categories 




			// <ReactRouter.Router history={hashHistory}>
			// 	<ReactRouter.Route path='/categories' component={Categories} />
			// </ReactRouter.Router>