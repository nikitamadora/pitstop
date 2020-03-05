const db = require('./models');

const cities_list = [
  {
    cityState: 'San Francisco, CA',
    country: 'USA',
    restrooms: []
  },
  {
    cityState: 'Walnut Creek, CA',
    country: 'USA',
    restrooms: []
  },
  {
    cityState: 'Boston, MA',
    country: 'USA',
    restrooms: []
  },
  {
    cityState: 'Chicago, IL',
    country: 'USA',
    restrooms: []
  }
];

const restrooms_list = [
  {
    locationName: 'Beachside Cafe',
    streetAddress: '4300 Judah St',
    cityState: 'San Francisco, CA',
    country: 'USA',
    longitude: -122.5098,
    latitude: 37.760274,
    directions: "",
    hours: true,
    accessible: true,
    genderNeutral: true,
    changingStation: true,
    reqPurchase: true,
    sanitaryProducts: false,
    starRating: null
  },
  {
    locationName: 'La Promenade Cafe',
    streetAddress: '3643 Balboa St',
    cityState: 'San Francisco, CA',
    country: 'USA',
    longitude: -122.4992293,
    latitude: 37.7755945,
    directions: "",
    hours: true,
    accessible: true,
    genderNeutral: true,
    changingStation: true,
    reqPurchase: true,
    sanitaryProducts: false,
    starRating: null
  },
  {
    locationName: 'Ferry Building',
    streetAddress: '1 Embarcadero',
    cityState: 'San Francisco, CA',
    country: 'USA',
    longitude: -122.3959707,
    latitude: 37.795838,
    directions: "",
    hours: true,
    accessible: true,
    genderNeutral: true,
    changingStation: true,
    reqPurchase: true,
    sanitaryProducts: false,
    starRating: null
     },
  {
    locationName: 'Comstock Saloon',
    streetAddress: '155 Columbus Avenue',
    cityState: 'San Francisco, CA',
    country: 'USA',
    longitude: -122.4077509,
    latitude: 37.79693,
    directions: "1st floor, back of the bar on the lower side, behind the booths.",
    hours: true,
    accessible: true,
    genderNeutral: true,
    changingStation: true,
    reqPurchase: true,
    sanitaryProducts: false,
    starRating: null
  },
  {
    locationName: 'SF Public Bathroom Union Square',
    streetAddress: '252 Geary St',
    cityState: 'San Francisco, CA',
    country: 'USA',
    longitude: -122.4096695,
    latitude: 37.7876432,
    directions: 'In front of Macy\'s. Costs $.25, and police carry tokens for free.',
    active: true,
    genderNeutral: true,
    changingStation: false,
    reqPurchase: true,
    sanitaryProducts: false,
    starRating: null
  }
];

// TODO This currently works for populating our db with temp data, but we need to figure out how we're going to connect the restroom to the city
db.City.deleteMany({}, (err, cities) => {
     if (err) {
          console.log(err);
          return;
     }
     console.log('Removed all cities');
     db.City.create(cities_list, (err, cities) => {
          if (err) {
               console.log(err);
               return;
          }
          console.log('Recreated all cities');
          console.log(`Created ${cities.length} cities`);
     });
// find a way to push new restrooms into city array
     db.Restroom.deleteMany({}, (err, restrooms) => {
          if (err) {
               console.log(err);
               return;
          }
          console.log('Removed all restrooms');
          db.Restroom.create(restrooms_list, (err, restrooms) => {
               if (err) {
                    console.log(err);
                    return;
               }
               console.log('Recreated all restrooms');
               console.log(`Created ${restrooms.length} restrooms`);
          });
     });
});