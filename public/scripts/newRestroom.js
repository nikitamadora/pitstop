const formEl = document.querySelector('.newRestroom');

formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  const newRestroom = {
    locationName: location_name.value,
    streetAddress: street_name.value,
    cityState: city_name.value,
    directions: directions.value,
    hours: hours.value,
    accessible: accessible.value,
    genderNeutral: gender_neutral.value,
    changingStation: changing_station.value,
    reqPurchase: req_purchase.value,
    sanitaryProducts: sanitary_products.value,
    // starRating: star_rating.value
  };

  // When this form submits, we are fetching data
  // The data is fetched when we post {something} to an endpoint
  // We are posting to the api/v1/restrooms/new endpoint
  // a JSON.stringified(this just means it's a formal string)
  // of the newRestroom obj. we made above.
  // fetch is a promise object, so we can invoke .then()s
  fetch(`/api/v1/restrooms/new`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newRestroom)
  })
  // Whatever the fetch returns, THEN do something with it.
  // In this case, then, with that stream, return the jsonified version
  // of that stream.
  .then((stream) => stream.json())
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));

});


// [] TODO : find a way to get value of checkboxes
// [] TODO : Define what we need to see when form is submitted:
// - Modal to thank the user for submission
// - Back button to go back to index