// Select form data from form on new.html, which has a class of newRestroom
// const editForm = document.querySelector('.editRestroom');

// 1. Select location name input
const locationName = document.querySelector("#location_name");
console.log(locationName);

// 2. Select street name input
const streetName = document.querySelector("#street_name");
console.log(streetName);

// 3. Select remaining inputs...
const neighborhoodName = document.querySelector("#neighborhood");
console.log(neighborhoodName.value);
neighborhoodName.value = "pikachu";
console.log(neighborhoodName.value);

// 4. Get data from DB
// Split the id off of the URL path
const restroomId = window.location.pathname.split('/')[3];

fetch(`/api/v1/restrooms/${restroomId}`)
  .then((stream) => stream.json())
  .then((data) => {
    // Set locationName.value to data.location
    locationName.value = data.locationName;
    console.log(locationName.value);
  })
  .catch((err) => console.log(err));

// 5. Use the returned object to populate the form
// Change the locationName's value to the locationName in the returned object



  // CALLBACK: newRestroom is an object that we're going to submit to the db

  const editRestroom = {
    locationName: location_name.value,
    streetAddress: street_name.value,
    neighborhood: neighborhood.value,
    //hours: hours.value,
    //accessible: accessible.value,
    //genderNeutral: gender_neutral.value,
    //reqPurchase: req_purchase.value,
    //sanitaryProducts: sanitary_products.value,
    //starRating: star_rating.value
  };

  // ... Use fetch to post a new entry
  // fetch(`/api/v1/restrooms/new`, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(newRestroom)
  // })
  // .then((stream) => stream.json())
  // .then((res) => {
  //   console.log(res);
  // })
  // .catch((err) => console.log(err));



// [] TODO : find a way to get value of checkboxes
// [] TODO : Define what we need to see when form is submitted:
// - Modal to thank the user for submission
// - Back button to go back to index