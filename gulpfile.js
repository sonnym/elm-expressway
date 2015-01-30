var path = require("path");

var elm = require("gulp-elm");
var nodemon = require("gulp-nodemon");

module.exports = function(gulp, appName, elmClientFile) {
  gulp.task("elm-expressway_default", [
    "elm-expressway_server",
    "elm-expressway_compile"
  ]);

  gulp.task("elm-expressway_server", function () {
    return nodemon({
      watch: ["index.js", path.join(appName, "**", "*")],
    });
  });

  gulp.task("elm-expressway_compile", function() {
    return gulp.src(path.join(appName, elmClientFile))
      .pipe(elm())
      .on("error", function(err) {
        console.error(err.message);
      })
      .pipe(gulp.dest("public"));
  });

  gulp.watch(path.join(appName, "**", "*.*"), ["elm-expressway_compile"]);
};
