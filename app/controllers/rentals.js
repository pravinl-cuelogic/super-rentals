import Controller from '@ember/controller';

/*
To implement the filter function to do the actual filter of rentals by city, 
we'll create a rentals controller. Controllers contain actions and properties available to the template of its corresponding route. 
In our case we want to generate a controller called rentals. 
Ember will know that a controller with the name of rentals will apply to the route with the same name.
*/

export default Controller.extend({
	actions: {
		filterByCity(param){
			if (param !== '') {
				return this.store.query('rental',{city: param});
			} else {
				return this.store.findAll('rental');
			}
		}
	}
});
