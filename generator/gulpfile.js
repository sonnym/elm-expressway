var gulp = require("gulp");

require("elm-expressway/gulpfile")(gulp, "<%= appName %>/Client.elm");

gulp.task("default", ["elm-expressway_default"]);
