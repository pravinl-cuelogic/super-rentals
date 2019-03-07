import Route from '@ember/routing/route';

export default Route.extend({
	model() {
		// When we call findAll, Ember Data will attempt to fetch rentals from /api/rentals.
		// console.log('routes rental=>', this._environment.location);
    return this.store.findAll('rental');
  }
});

