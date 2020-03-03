const API_BASE = '/api/v1';
const cardContainerEl = document.querySelector('col s9');

// ----- Script to list restrooms into show.html
function getRestrooms(e) {
  event.preventDefault();
  fetch(`${API_BASE}/restrooms`)
  .then (res => res.json())
  .then (json => render(json))
};
getRestrooms();

function render(restroom) {
  
  cardContainerEl.insertAdjacentHTML('beforeend', getRestroomTemplate(restroom))
};

function getRestroomTemplate(restroom) {
  return `
      <div class="card">
      <div class="card-image waves-effect waves-block waves-light">
          <img class="activator" src="https://picsum.photos/300/400">
      </div>
      <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
          <p><a href="#">This is a link</a></p>
      </div>
      <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
          <p>${restroom.location}</p>
      </div>
    </div>
  `
};