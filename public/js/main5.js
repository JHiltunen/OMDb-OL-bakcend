'use strict';
const url = 'http://localhost:3000'; // change url when uploading to server

// select existing html elements
const loginWrapper = document.querySelector('#login-wrapper');
const logOut = document.querySelector('#log-out');
const loginForm = document.querySelector('#login-form');
const addUserForm = document.querySelector('#add-user-form');
const searchBookForm = document.querySelector('#search-book');
const bookInfo = document.querySelector('#bookInfo');
const searchMovieForm = document.querySelector('#search-movie');
const movieInfo = document.querySelector('#movieInfo');
const year = document.querySelector('#year');

year.value = new Date().getFullYear();

// login
loginForm.addEventListener('submit', async (evt) => {
  evt.preventDefault();
  const data = serializeJson(loginForm);
  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  const response = await fetch(url + '/auth/login', fetchOptions);
  const json = await response.json();
  console.log('login response', json);
  if (!json.user) {
    alert(json.message);
  } else {
    // save token
    loginForm.reset();
    loginWrapper.style.display = 'none';
    logOut.style.display = 'block';
    sessionStorage.setItem('token', json.token);
    console.log('Token: ', json.token);
  }
});

// logout
logOut.addEventListener('click', async (evt) => {
  evt.preventDefault();
  try {
    const options = {
      headers: {
        'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
      },
    };
    const response = await fetch(url + '/auth/logout', options);
    console.log("Response", response);
    const json = await response.json();
    console.log(json);
    // remove token
    sessionStorage.removeItem('token');
    alert('You have logged out');
    loginWrapper.style.display = 'flex';
    logOut.style.display = 'none';
  }
  catch (e) {
    console.log(e);
  }
});

// submit register form
addUserForm.addEventListener('submit', async (evt) => {
  evt.preventDefault();
  const data = serializeJson(addUserForm);
  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  const response = await fetch(url + '/user', fetchOptions);
  const json = await response.json();
  console.log('user add response', json);
});

// search book form
searchBookForm.addEventListener('submit', async (evt) => {
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

// when app starts, check if token exists
if (sessionStorage.getItem('token')) {
  loginWrapper.style.display = 'none';
  logOut.style.display = 'block';
}