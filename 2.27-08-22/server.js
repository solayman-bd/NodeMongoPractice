const http = require("http"); //->core module
const url = require("url"); //->core module
const fs = require("fs"); //filesystem module. It works in both sync and async way. read, write,append,delete methods are mostly used->core module
const events = require("events"); //events module->core module

const PORT = {
  port1: "5000",
  port2: "4000",
};
const server = http.createServer((req, res) => {
  const URL =
    "https://www.computerhope.com/jargon/u/url.htm#:~:text=The%20URL%20makes%20it%20possible,for%20the%20Computer%20Hope%20website.";

  const parsedUrl = url.parse(URL);
  console.log("parsed url", parsedUrl);

  if (req.url == "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<p>I am in home page<p/>");
    res.end();
  }
  if (req.url == "/json") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(
      JSON.stringify({
        name: "Solayman",
      })
    );
    res.end();
  }
});

//Events, stream, buffer

//Events
const eventEmitter = new events.EventEmitter();

//Create an event handler:
const myEventHandler = function () {
  console.log("I hear a scream!");
};

//Assign the event handler to an event:
eventEmitter.on("scream", myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit("screaming");

server.listen(PORT.port1);
