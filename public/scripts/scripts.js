// ----- Variables ----- //
const API_BASE = '/api/v1';
const cardContainerEl = document.querySelector('#restroom-cards');

// ----- Script to list the restrooms into show.html
function getRestrooms() {
  fetch(`${API_BASE}/restrooms`)
  .then(res => res.json())
  .then(json => render(json))
  .catch(err => console.log(err))
};
getRestrooms();

function render(restrooms) {
  restrooms.forEach(restroom => {
    cardContainerEl.insertAdjacentHTML('beforeend', getRestroomTemplate(restroom))
  });
};

function getRestroomTemplate(restroom) {
  return `
    <div class="card">

      <div class="card waves-effect waves-block waves-light"> 
      </div>
          
      <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">${restroom.locationName}<i class="material-icons right">more_vert</i></span>
          <p>${restroom.streetAddress}, ${restroom.neighborhood}</p>
      </div>

      <div class="card-reveal">
          <div class="row">

                <div class="col s6"> 
                  PLACEHOLDER FOR MAPS
                </div>

                <div class="col s6">
                    <span class="card-title grey-text text-darken-4">${restroom.locationName}<i class="material-icons right">close</i></span>
                    <p>${restroom.streetAddress}, ${restroom.neighborhood}</p>
                    <p>Directions: ${restroom.directions}</p>
                    <p>Hours of operation: ${restroom.hours}</p>
                    <p>Gender Neutral: ${restroom.genderNeutral}</p>
                    <p>Changing Station: ${restroom.changingStation}</p>
                    <p>Require Purchase: ${restroom.reqPurchase}</p>
                    <p>Sanitary Products Available: ${restroom.sanitaryProducts}</p>
                    <p>Star Rating: ${restroom.starRating}/5</p>
                </div>
          </div>    
      </div>    
    </div>
  `
};

// <img class="activator" src="https://picsum.photos/1200/200">


// ----- Script to create a restroom into new.html

const 
