const formEl = document.querySelector('.newRestroom');

formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  const newRestroom = {
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

  fetch(`/api/v1/restrooms/new`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newRestroom)
  })
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