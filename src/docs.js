// export class DoctorFinder {
//   findDoctors() {
//     return new Promise(function(resolve, reject) {
//           let request = new XMLHttpRequest();
//           let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&query=${issue}&location=${city}&user_location=37.773%2C-122.413&sort=distance-asc&fields=data%2Cpractices%2Cprofile&skip=0&limit=10&user_key=${process.env.API_KEY}`;
//           request.onload = function () {
//             if (this.status === 200) {
//               resolve(request.responseText);
//             } else {
//               reject(Error(request.statusText));
//             }
//           }
//           request.open("GET", url, true);
//           request.send();
//     });
//   }
// }
