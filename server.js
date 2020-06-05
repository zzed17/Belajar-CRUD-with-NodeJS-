const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", function (request, response) {
  response.render("index", {
    hello: "Izzat",
  });
});

app.listen(3000, function () {
  console.log("listening on 3000");
});
