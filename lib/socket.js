var sockjs = require("sockjs");
var Elm = require("elm-loader");

var sockjsOpts = { sockjs_url: "http://cdn.sockjs.org/sockjs-0.3.4.min.js" }
var socket = sockjs.createServer(sockjsOpts);

module.exports = function(config) {
  var elmApp = Elm(config.filename, config.basePath, config.portDefaults);

  return function(server) {
    server.addListener("upgrade", function(_, res) {
      res.end();
    });

    socket.on("connection", config.onConnection(elmApp));

    socket.installHandlers(server, { prefix: "/socket" });
  };
};
