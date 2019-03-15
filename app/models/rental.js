import DS from 'ember-data';

// Define attributes by giving them the result of the function DS.attr().
export default DS.Model.extend({
  title: DS.attr(), //implied data type
  owner: DS.attr(),
  city: DS.attr(),
  category: DS.attr(),
  image: DS.attr(),
  bedrooms: DS.attr(),
  description: DS.attr(),
  reviews: DS.hasMany("review") //, {async: true}) //async for lazy loading. rental property has many reviews.
});
