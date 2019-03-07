import DS from 'ember-data';

/* 
  An Adapter is an object that Ember Data uses to determine how we communicate with our backend.
  This adapter will extend the JSONAPIAdapter base class from Ember Data
*/
export default DS.JSONAPIAdapter.extend({
	namespace: 'api'
});
