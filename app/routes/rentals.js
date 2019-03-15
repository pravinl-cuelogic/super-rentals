import Route from '@ember/routing/route';

export default Route.extend({
	model() {
		// When we call findAll, Ember Data will attempt to fetch rentals from /api/rentals.
		// console.log('routes rental=>', this._environment.location);
		this.store.createRecord('review', {
		    reviewText: 'First review text.',
		    id: 10
		});
		this.store.createRecord('review', {
		    reviewText: 'Second review text.',
		    id: 20
		});
    return this.store.findAll('rental');
  }
});

