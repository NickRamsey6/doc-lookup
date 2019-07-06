import './styles.css';
import $ from 'jquery';
import 'bootstrap';



$(document).ready(function() {
  $('#doctors').click(function() {
    let request = new XMLHttpRequest();
    const url = `https://api.betterdoctor.com/2016-03-01/doctors?location=or-portland&user_location=37.773%2C-122.413&sort=distance-asc&fields=data%2Cpractices%2Cprofile&skip=0&limit=10&user_key=2ac8627f15744eae8b7df8480f224360`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    }
    request.open("GET", url, true);
    request.send();

    const getElements = function(response) {
      for (let i = 0; i < response.data.length; i++) {
        // console.log(response.data.length);
        $('.results').append('<br>').append('<ui>' + `Dr. ${response.data[i].profile.first_name} ${response.data[i].profile.last_name}`);
        // if (response.data[i].practices.length > 1) {
          // for (let x = 0; x < response.data[i].practices.length; x++) {
            $('.results').append('<br>').append('<li>' + `Address: ${response.data[i].practices[0].visit_address.street}`);
          // }
        // } else {
        //   $('.results').append('<br>').append('<li>' + `Address: ${response.data.[i].practices[0].visit_address.street}`);
        // }
      }
    }
  });
});
