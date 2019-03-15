import Controller from '@ember/controller';

/*
To implement the filter function to do the actual filter of rentals by city, 
we'll create a rentals controller. Controllers contain actions and properties available to the template of its corresponding route. 
In our case we want to generate a controller called rentals. 
Ember will know that a controller with the name of rentals will apply to the route with the same name.
*/

export default Controller.extend({
	actions: {
		filterByTitle(title){
			// debugger;
			console.log('Controller-filterByTitle(param)--->',title);
			if (title !== '') {
				return this.store
		      .query('rental', { title: title }).then((results) => {
		        return { query: title, results: results };
		      });
				} else {
					return this.store
		      .findAll('rental').then((results) => {
		        return { query: title, results: results };
		      });
			}
		},
		filterByCity(city){
			// debugger;
			console.log('Controller-filterByCity(param)--->',city);
			if (city !== '') {
				return this.store
	          .query('rental', { city: city }).then((results) => {
	            return { query: city, results: results };
	          });
				} else {
					return this.store
	          .findAll('rental').then((results) => {
	            return { query: city, results: results };
	          });
			}
		}
	}
});
