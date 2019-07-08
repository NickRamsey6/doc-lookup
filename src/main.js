import './styles.css';
import $ from 'jquery';
import 'bootstrap';



$(document).ready(function() {
  $('#location').click(function() {
    const city = $('#city').val();
    const name = $('#name').val();
    $('#name').val("");
    const issue = $('#issue').val();
    $('#issue').val("");
    let request = new XMLHttpRequest();
  const url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&query=${issue}&location=${city}&user_location=37.773%2C-122.413&sort=distance-asc&fields=data%2Cpractices%2Cprofile&skip=0&limit=10&user_key=${process.env.API_KEY}`;

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
        // return doctor name
        $('.results').append('<br>').append('<ui>' + `Dr. ${response.data[i].profile.first_name} ${response.data[i].profile.last_name}`);
        //return doctor address
        $('.results').append('<br>').append('<li>' + `Address: ${response.data[i].practices[0].visit_address.street} ${response.data[i].practices[0].visit_address.city}, ${response.data[i].practices[0].visit_address.state} ${response.data[i].practices[0].visit_address.zip}`);
        //return doctor phone number
        $('.results').append('<li>' + `Phone: ${response.data[i].practices[0].phones[0].number}`);
        //return doctor website url
        $('.results').append('<li>' + `Website: ${response.data[i].practices[0].website}`);
        //return doctor new patients
        $('.results').append('<li>' + `Accepting New Patients: ${response.data[i].practices[0].accepts_new_patients}`);
      }
    }
  });
});
