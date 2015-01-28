var elm = require("gulp-elm");
var server = require("gulp-express");

module.exports = function(gulp) {
  gulp.task("elm-expressway_default", [
    "elm-expressway_server",
    "elm-expressway_compile"
  ]);

  gulp.task("elm-expressway_server", function () {
    server.run({
      file: "lib/server.js"
    });
  });

  gulp.task("elm-expressway_compile", function() {
    return gulp.src("Pong/Client.elm")
      .pipe(elm())
      .pipe(gulp.dest("public"));
  });
};
