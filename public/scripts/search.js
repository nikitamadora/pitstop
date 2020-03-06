const submitBtn = document.querySelector('.searchRestrooms')
submitBtn.addEventListener('submit', (event) => {
  event.preventDefault();
  window.location = 'restrooms/view';
})