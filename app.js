const express = require("express");
const app = express();
// Helmet
const helmet = require("helmet");
app.use(helmet());

const port = 3001;
// Body parser - can now access data in body of HTTP requests - i.e. req.body.title
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Fetch artist and item(song, book etc) from iTunes
app.post("/iTunes", (req, resp) => {
  console.log(req.body); // REMOVE - FOR TESTING!
  let fetchUrl =
    "https://itunes.apple.com/search?limit=5&media=" +
    req.body[0] +
    "&term=" +
    req.body[1];
  fetch(fetchUrl)
    .then((res) => res.json())
    .then((result) => {
      let searchResultsArr = [];
      // limiting to 5 results - pushed to an array sent back to frontend
      for (i = 0; i < 5; i++) {
        let searchResult = {};
        searchResult.id = i;
        searchResult.artist = result.results[i].artistName;
        searchResult.item = result.results[i].trackName;
        searchResultsArr.push(searchResult);
      }
      resp.send(JSON.stringify(searchResultsArr));
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
