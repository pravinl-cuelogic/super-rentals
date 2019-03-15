import Component from '@ember/component';

// The init hook to seed our initial listings by calling the filter action with an empty value.
// handleFilterEntry action calls a function called filter based on the value attribute set by the input helper.
// The filter function is passed in by the calling object. This is a pattern known as closure actions.

export default Component.extend({
	classNames: ['list-filter'],
	value: '',
	title: '',
	city: '',
	init(){
		// debugger;
		this._super(...arguments);
		this.filter('').then((allResults) => {
	        this.set('results', allResults.results);
	    });
	},
	actions: {
	   	handleFilterByTitle(){
			let filterInputValue = this.title;
			let filterAction = this.filter;
			// let controllerMethods = this.get('controller');
			// debugger;
			console.log('Component/list-filter.js By Name===>', this.title, '------->',this);
			filterAction(filterInputValue).then((filterResults) => {
			// controllerMethods.send("filterByTitle", filterInputValue).then((filterResults) => {
				// debugger;
	            if (filterResults.query === this.title) {
	                this.set('results', filterResults.results);
	            }
	        });
		},
		handleFilterByCity(){
	   		// debugger;
			let filterInputValue = this.city;
			let filterAction = this.filter;
			console.log('Component/list-filter.js By City===>', this.city, '------->',this.filter);
			filterAction(filterInputValue).then((filterResults) => {
	            if (filterResults.query === this.city) {
	                this.set('results', filterResults.results);
	            }
	        });
		},
	}
});
