export class DoctorFinder {
  findDoctors(city, name, issue) {
    return new Promise(function(resolve, reject) {
          let request = new XMLHttpRequest();
          let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&query=${issue}&location=${city}&user_location=37.773%2C-122.413&sort=distance-asc&fields=data%2Cpractices%2Cprofile&skip=0&limit=10&user_key=2ac8627f15744eae8b7df8480f224360`;
          //Bad API request for testing error message (returns 400, triggering error text)
          // let url = `https://api.betterdoctor.com/2016-03-01/doctors?location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&limit=a&user_key=${process.env.API_KEY}`;
          request.onload = function () {
            if (this.status === 200) {
              resolve(request.responseText);
            } else {
              reject(Error(request.statusText));
            }
          }
          request.open("GET", url, true);
          request.send();
    });
  }
}
