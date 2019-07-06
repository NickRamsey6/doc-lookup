import './styles.css';
import $ from 'jquery';
import 'bootstrap';



$(document).ready(function() {
  $('#doctors').click(function() {
    let request = new XMLHttpRequest();
    const url = `https://api.betterdoctor.com/2016-03-01/doctors?location=wa-seattle&user_location=37.773%2C-122.413&sort=full-name-asc&skip=0&limit=10&user_key=2ac8627f15744eae8b7df8480f224360`;

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
        console.log(response.data.length);
        $('.results').append('<br>').append('<li>' + `The doctors are: ${response.data[i].profile.last_name}`);
      }

    }
  });
});


////BIKES EXAMPLE////////////////////
// $(document).ready(function() {
//   $('#doctors').click(function() {
//     let request = new XMLHttpRequest();
//     const url = `https://bikeindex.org:443/api/v3/search?page=1&per_page=100&location=%E2%80%9CPortland%2C%20OR%E2%80%9D&distance=10&stolenness=proximity&access_token=api_key`;
//     request.onreadystatechange = function() {
//       if (this.readyState === 4 && this.status === 200) {
//         const response = JSON.parse(this.responseText);
//         getElements(response);
//       }
//     };
//     request.open("GET", url, true);
//     request.send();
//     const getElements = function(response) {
//       console.log(response.bikes);
//     }
//   });
// });

// let docs = [];
  // for(let i = 0; i < response.data.length; i++) {
  //   console.log(response.data.length);
