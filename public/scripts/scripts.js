const API_BASE = '/api/v1';
const cardContainerEl = document.querySelector('#restroom-cards');

// ----- Script to list restrooms into show.html
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
      <div class="card-image waves-effect waves-block waves-light">
          <img class="activator" src="https://picsum.photos/300/400">
      </div>
      <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">${restroom.locationName}<i class="material-icons right">more_vert</i></span>
          <p><a href="#">This is a link</a></p>
      </div>
      <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">${restroom.locationName}<i class="material-icons right">close</i></span>
          <p>blablabla</p>
      </div>
    </div>
  `
};