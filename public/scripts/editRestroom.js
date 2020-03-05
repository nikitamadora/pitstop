// import { STATES } from "mongoose";

// const editForm = document.querySelector('.editRestroom');

const locationName = document.querySelector("#location_name");
const streetName = document.querySelector("#street_name");
const neighborhoodName = document.querySelector("#neighborhood");
const cityName = document.querySelector("#city_name");
const stateName = document.querySelector("#state");
const countryName = document.querySelector("#country");
const changingStation = document.querySelector("#changing_station");
const genderNeutral = document.querySelector("#gender_neutral");
const accessible = document.querySelector("#accessible");

// 4. Get data from DB
// Split the id off of the URL path
const restroomId = window.location.pathname.split('/')[3];

fetch(`/api/v1/restrooms/${restroomId}`)
  .then((stream) => stream.json())
  .then((data) => {
    locationName.value = data.locationName;
    streetName.value = data.streetAddress;
    console.log(data);
    neighborhoodName.value = data.neighborhood;
    cityName.value = data.cityName;
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