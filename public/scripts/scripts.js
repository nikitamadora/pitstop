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
// Commented out getRestrooms(); because we don't want to
// invoke it in every instance of scripts.js loading

// Instead, we want to populate the page with restrooms 
// depending on the cityName given during the query.

getRestrooms();

function render(restrooms) {
  restrooms.forEach(restroom => {
    cardContainerEl.insertAdjacentHTML('beforeend', getRestroomTemplate(restroom))
  });
};

// Creates a restroom template
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

                <div class="col s6 restroom-info">
                    <input type="hidden" value=${restroom._id}>
                    <span class="card-title grey-text text-darken-4">${restroom.locationName}<i class="material-icons right">close</i></span>
                    <p>${restroom.streetAddress}, ${restroom.neighborhood}</p>
                    <p>Directions: ${restroom.directions}</p>
                    <p>Hours of operation: ${restroom.hours}</p>
                    <p>Gender Neutral: ${restroom.genderNeutral}</p>
                    <p>Changing Station: ${restroom.changingStation}</p>
                    <p>Require Purchase: ${restroom.reqPurchase}</p>
                    <p>Sanitary Products Available: ${restroom.sanitaryProducts}</p>
                    <p>Star Rating: ${restroom.starRating}/5</p>
                    <button type="button" class="edit-button">Edit This Restroom</button>
                </div>
          </div>    
      </div>    
    </div>
  `
};

// Event Handlers --------------
// Adds event listener to entire document, then if the target is an edit button, the edit page will load

const editBtnClickHandler = document.addEventListener('click', function(e){
  if (e.target.className === "edit-button") {
    // e.target is the edit button
    // thus, e.target.parentNode is the edit button's
    // parent div
    const restroomInfo = e.target.parentNode;
    console.log(restroomInfo);
    console.log(restroomInfo.querySelector("[type=hidden]").value);
    // window.location=`/restrooms/edit/${}`;
  }
});

// <img class="activator" src="https://picsum.photos/1200/200">
