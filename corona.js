const request = require("request");
const cheerio = require("cheerio");
console.log("Before");
request("https://www.worldometers.info/coronavirus", cb);
function cb(error, response, body) {
  console.log("status code", response.statusCode);
  if (error) {
    console.error(" eroor", error);
  } else handlHTML(body);
}

console.log("after");

function handlHTML(html) {
  let selTool = cheerio.load(HTML);
}
