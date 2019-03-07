import Route from '@ember/routing/route';

export default Route.extend({
	// All we want to do when a user visits the root (/) URL is transition to /rentals. To do this we will add code to our index route handler by implementing a route lifecycle hook called beforeModel.
	beforeModel() {
		//The replaceWith function is similar to the route's transitionTo() function, the difference being that replaceWith will replace the current URL in the browser's history, while transitionTo will add to the history. Since we want our rentals route to serve as our home page, we will use the replaceWith function.
		this.replaceWith('rentals')
	}
});
