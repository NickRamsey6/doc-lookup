import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import {DoctorFinder} from './docs.js';
const drDre = require('./audio/dre.mp3');
const music = new Audio(drDre);

$(document).ready(function() {
  // if (typeof music.loop == 'boolean')
  // {
  //   music.loop = true;
  // }
  // else {
  //   {
  //     music.addEventListener('ended', function() {
  //       this.currentTime = 0;
  //       this.play();
  //     }, false);
  //   }
  // }
  //
  // music.pause();
  // setTimeout(function () {
  //   music.play();
  // }, 150);
  // const playPromise = music.play();
  // if (playPromise !== null) {
  //   playPromise.catch(() => { music.play();} )
  // }
  music.play();
  $('#location').click(function() {
    const city = $('#city').val();
    const name = $('#name').val();
    $('#name').val("");
    const issue = $('#issue').val();
    $('#issue').val("");


    let doctorFinder = new DoctorFinder();
    let promise = doctorFinder.findDoctors(city, name, issue);

    promise.then(function(response) {
      let body = JSON.parse(response);
      for (let i = 0; i < body.data.length; i++) {
        // return doctor name
        $('.results').append('<br>').append('<ui>' + `Dr. ${body.data[i].profile.first_name} ${body.data[i].profile.last_name}`);
        //return doctor address
        $('.results').append('<br>').append('<li>' + `Address: ${body.data[i].practices[0].visit_address.street} ${body.data[i].practices[0].visit_address.city}, ${body.data[i].practices[0].visit_address.state} ${body.data[i].practices[0].visit_address.zip}`);
        //return doctor phone number
        $('.results').append('<li>' + `Phone: ${body.data[i].practices[0].phones[0].number}`);
        //return doctor website url
        $('.results').append('<li>' + `Website: ${body.data[i].practices[0].website}`);
        //return doctor new patients
        $('.results').append('<li>' + `Accepting New Patients: ${body.data[i].practices[0].accepts_new_patients}`);
      }
      if (body.data.length === 0) {
        $('.results').text('Your Search Returned No Results');
      }
    }, function(error) {
        $('.errors').text(`There was an error processing your request: ${error.message}`);
    });
  });

});
