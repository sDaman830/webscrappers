const request = require("request");
console.log("Before");
request("https://www.google.com", cb);
function cb(error, response, body) {
  console.log("status code", response.statusCode);
  console.error(" eroor", error);
  console.log("Body", body);
}

console.log("after");
