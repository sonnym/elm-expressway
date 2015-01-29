var path = require("path");

var server = require("elm-expressway/lib/server");
var socket = require("elm-expressway/lib/socket");

var basePath = path.resolve(process.cwd());
var filename = path.resolve(basePath, "<%= appName %>", "Server.elm");

var <%= appNameLowerCase %>SocketConfig = {
  filename: filename,
  basePath: basePath,
  portDefaults: {
    receiveInput: 0
  },

  onConnection: onConnection
};

var <%= appNameLowerCase %>Socket = socket(<%= appNameLowerCase %>SocketConfig);

<%= appNameLowerCase %>Socket(server);

server.listen(8000, "0.0.0.0");

function onConnection(<%= appNameLowerCase %>Server) {
  return function(connection) {
    <%= appNameLowerCase %>Server.emitter.on("sendState", function(state) {
      connection.write(state);
    });

    connection.on("data", function(input) {
      <%= appNameLowerCase %>Server.emitter.emit("receiveInput", JSON.parse(input));
    });

    connection.on("close", function() { });
  };
}
