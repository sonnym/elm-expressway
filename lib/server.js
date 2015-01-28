var http = require("http");
var path = require("path");

var express = require("express");

var app = express();
var server = http.createServer(app);

app.use(express.static(path.join(process.cwd(), "public")));

module.exports = server;
