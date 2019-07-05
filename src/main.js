import './styles.css';
import $ from 'jquery';
import 'bootstrap';

$(document).ready(function() {
  $('#doctors').click(function() {
    let request = new XMLHttpRequest();
    const url = `https://api.betterdoctor.com/2016-03-01/doctors?location=wa-seattle&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=2ac8627f15744eae8b7df8480f224360`;
    let response;
    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);

      }
    };
    request.open("GET", url, true);
    request.send();
    const getElements = function(response) {
      $('.results').text(`The doctors are ${response.meta}`);
    };
  });
})
