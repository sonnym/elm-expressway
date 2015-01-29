Elm Expressway
==============

Installation
------------

`npm init` your project

`npm install --save-dependency elm-expressway`

`./node_modules/.bin/expressway`

This creates a barebones application upon which you can build. It sets up:

1. An Express application in `index.js` that interoperates between websockets and Elm.
2. A base Elm application, fatored into `Client.elm` and `Server.elm`.
3. Markup and client-side socket handling in `public/index.html`.
4. A `gulpfile` that compiles the application and runs the server.

The files created, using the default Elm namespace, will be:

```
├── Elm
│   ├── Client.elm
│   └── Server.elm
├── gulpfile.js
├── index.js
└── public
    └── index.html
```

Usage
-----

Start your application: `./node_modules/.bin/gulp`.  It is recommended to add this as the start script in your `package.json`.

Open `localhost:8000` in a browser!
