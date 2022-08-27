//Javascript window object== NodeJS global object

//Modules:In Node. js, Modules are the blocks of encapsulated code that communicates with an external application on the basis of their related functionality.

//If we declare any variable in js by var, it get attached to the window object but in node js it does not get attached to the global object.

//Node js works in modular system means we can not use any variable from another file without export import mechanism.

//In node js modules are divided into three parts:
// 1.Core module (Node.js has many built-in modules that are part of the        platform and comes with Node.js installation.) Such AS: 1. http, 2.assert, 3.fs, 4.path, 5.process, 6.os, 7.querystring, 8.url, 9.events,
// 2.Local module (Unlike built-in and external modules, local modules are created locally in your Node.js application. )
// 3. Third party module (Third-party modules are modules that are available online using the Node Package Manager(NPM).) such as: 1.underscore

const add = require("./other"); //local module

const http = require("http"); //core module

http
  .createServer(function (req, res) {
    console.log("Surver is running...");
  })
  .listen(3000);
