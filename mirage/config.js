/* 
  Mirage works by overriding the JavaScript code that makes network requests and instead returns the JSON you specify. 
  We should note that this means you will not see any network requests in your development tools but will instead see the JSON logged in your console. 
  Our update to mirage/config.js configures Mirage so that whenever Ember Data makes a GET request to /api/rentals, 
  Mirage will return this JavaScript object as JSON and no network request is actually made. 
  We also specified a namespace of /api in our mirage configuration. 
  Without this change, navigation to /rentals in our application would conflict with Mirage.
*/



export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.4.x/shorthands/
  */

  this.namespace = '/api';

  let rentals = [
    {
      type: 'rentals',
      id: 'grand-old-mansion',
      attributes: {
        title: 'Grand Old Mansion',
        owner: 'Veruca Salt',
        city: 'San Francisco',
        category: 'Estate',
        bedrooms: 15,
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
        description: "This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests."
      }
    }, {
      type: 'rentals',
      id: 'urban-living',
      attributes: {
        title: 'Urban Living',
        owner: 'Mike Teavee',
        city: 'Seattle',
        category: 'Condo',
        bedrooms: 1,
        image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg',
        description: "A commuters dream. This rental is within walking distance of 2 bus stops and the Metro."
      }
    }, {
      type: 'rentals',
      id: 'downtown-charm',
      attributes: {
        title: 'Downtown Charm',
        owner: 'Violet Beauregarde',
        city: 'Portland',
        category: 'Apartment',
        bedrooms: 3,
        image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
        description: "Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet."
      }
    }, {
      type: 'rentals',
      id: 'shanivar-wada',
      attributes: {
        title: 'Shanivar Wada',
        owner: 'Peshawa',
        city: 'Pune',
        category: 'Apartment',
        bedrooms: 30,
        image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
        description: "Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet."
      }
    }, {
      type: 'rentals',
      id: 'purandar-fort',
      attributes: {
        title: 'Purandar Fort',
        owner: 'Shivaji Bhosale',
        city: 'Purandar',
        category: 'Estate',
        bedrooms: 4,
        image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
        description: "Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet."
      }
    }, {
      type: 'rentals',
      id: 'bhagawant-temple',
      attributes: {
        title: 'Bhagawant Temple',
        owner: 'Bhagawant Temple Trust',
        city: 'Barshi',
        category: 'Townhouse',
        bedrooms: 50,
        image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
        description: "Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet."
      }
    }
  ]
  
  this.get('/rentals',function(db, request) {
    console.log('Mirage/config.js===>',request.queryParams);
    if (request.queryParams.city !== undefined) {
      let filteredRentals = rentals.filter(function (i) {
        return i.attributes.city.toLowerCase().indexOf(request.queryParams.city.toLowerCase()) !== -1;
      });
      return {data: filteredRentals};
    } else if (request.queryParams.title && request.queryParams.title !== undefined) {
      let filteredRentals = rentals.filter(function (i) {
        return i.attributes.title.toLowerCase().indexOf(request.queryParams.title.toLowerCase()) !== -1;
      });
      return {data: filteredRentals};
    } else {
      return {data: rentals};
    }
  });
}
