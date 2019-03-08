import Component from '@ember/component';

// The init hook to seed our initial listings by calling the filter action with an empty value.
// handleFilterEntry action calls a function called filter based on the value attribute set by the input helper.
// The filter function is passed in by the calling object. This is a pattern known as closure actions.

export default Component.extend({
	classNames: ['list-filter'],
	value: '',
	init(){
		this._super(...arguments);
		this.filter('').then((results) => this.set('results',results));
	},
	actions: {
		handleFilterEntry(){
			let filterInputValue = this.value;
			let filterAction = this.filter;
			filterAction(filterInputValue).then((filterResults)=> this.set('results',filterResults));
		}
	}
});
