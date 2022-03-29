const searchBookForm = document.querySelector('#search-book');
const bookInfo = document.querySelector('#bookInfo');
const searchMovieForm = document.querySelector('#search-movie');
const movieInfo = document.querySelector('#movieInfo');


// search book form
searchBookForm.addEventListener('submit', async (evt) => {
  bookInfo.innerHTML = "";
    evt.preventDefault();
    const data = serializeJson(searchBookForm);
    const fetchOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
      },
    };
    console.log('Token from storage: ', sessionStorage.getItem('token'));
    const response = await fetch(url + '/getBook?isbn=' + searchBookForm.elements['isbn'].value, fetchOptions);
    const json = await response.json();
    bookInfo.innerHTML = JSON.stringify(json);
    console.log('search book response', json);
  });
  
  // search movie form
  searchMovieForm.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    movieInfo.innerHTML = "";
    const data = serializeJson(searchBookForm);
    const fetchOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
      },
    };
    console.log('Token from storage: ', sessionStorage.getItem('token'));
    const response = await fetch(url + '/getMovie?t=' + searchMovieForm.elements['t'].value + '&year=' + searchMovieForm.elements['year'].value + '&plot=' + searchMovieForm.elements['plot'].value, fetchOptions);
    const json = await response.json();
    movieInfo.innerHTML = JSON.stringify(json);
    console.log('search book response', json);
  });