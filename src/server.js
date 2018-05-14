var express = require("express");
var assets = require("../dist/webpack-assets.json");

var app = express();

app.get("/", function(req, res) {
  const mainUrl = assets.main.js;
  const vendorsMainUrl = assets["vendors~main"].js;

  const scripts = `<script src='${mainUrl}'></script><script src='${vendorsMainUrl}'></script>`;

  res.send(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>React</title>
  </head>
  
  <body>
    <div id="root"></div>
  </body>
  ${scripts}
  
  </html>`);
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
