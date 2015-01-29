#!/usr/bin/env node

var path = require("path");

var execSync = require("execSync");

var generatorFactory = require("yeoman-generator");
var env = generatorFactory();

var generator = generatorFactory.Base.extend({
  constructor: function () {
    generatorFactory.Base.apply(this, arguments);
  },

  paths: function() {
    this.sourceRoot(path.resolve(__dirname, "generator"));
  },

  prompting: function () {
    var done = this.async();

    this.prompt({
      type: "input",
      name: "elmApplicationName",
      message: "Name of the Elm application/directory (one, CamelCase word).",
      default : "Elm",
    }, function (answers) {
      this._answers = answers;
      done();
    }.bind(this));
  },

  writing: function() {
    this.log("Copying files...");

    var appName = this._answers.elmApplicationName

    this.fs.copyTpl(
      this.templatePath("gulpfile.js"),
      this.destinationPath("gulpfile.js"),
      { appName: appName, appNameLowerCase: appName.toLowerCase() }
    );

    this.fs.copyTpl(
      this.templatePath("index.html"),
      this.destinationPath("public/index.html"),
      { appName: appName, appNameLowerCase: appName.toLowerCase() }
    );

    this.fs.copyTpl(
      this.templatePath("index.js"),
      this.destinationPath("index.js"),
      { appName: appName, appNameLowerCase: appName.toLowerCase() }
    );

    this.fs.copyTpl(
      this.templatePath("Server.elm"),
      this.destinationPath(path.join(appName, "Server.elm")),
      { appName: appName }
    );

    this.fs.copyTpl(
      this.templatePath("Client.elm"),
      this.destinationPath(path.join(appName, "Client.elm")),
      { appName: appName }
    );
  },

  installGulp: function() {
    this.log("\nInstalling 'gulp'...\n");
    execSync.exec("npm install --save-dev gulp");
  }
});

env.registerStub(generator, "elm-expressway");

var instance = env.create("elm-expressway");

instance.run();
