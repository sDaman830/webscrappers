const url =
  "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary";
const e = require("express");
const cheerio = require("cheerio");
const req = require("request");
req(url, (err, response, html) => {
  if (err) {
    console.log(err);
  } else {
    eHTML(html);
  }
});

function eHTML(html) {
  cheerio.load(html);
}
