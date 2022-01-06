import fetch from 'node-fetch';
var server_echo;
var json = {
  json: JSON.stringify({
    a: 1,
    b: 2
  }),
  delay: 3
};
fetch('/echo/', {
  method: 'post',
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  },
  body: 'json=' + encodeURIComponent(JSON.stringify(json.json)) + '&delay=' + json.delay
})
  .then(function (response) {
    server_echo = response.json().echo
    return response.json();
  })
  .then(function (result) {
    alert(result);
  })
  .catch(function (error) {
    console.log('Request failed', error);
  });
server_echo.forEach(
  element => console.log(element)
)

// server_echo is out of promise since javascript is asynchronous the value of server_echo.forEach would run before the value of server_echo is set.
// we dont have to use JSON.stringify in line 4 where we are setting value for json
// use of async await would make code more readable.
