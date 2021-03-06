var path = require("path");
var express = require("express");
var api = require("./api");
var bodyParser = require("body-parser");
var port = 3010;

var app = express();

app.use(bodyParser.json());
app.use("/api", api);

app.listen(port, "localhost", function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Listening on http://localhost:" + port);
});
