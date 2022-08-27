//Streams work on a concept called buffer. A buffer is a temporary memory that a stream takes to hold some data until it is consumed.
const fs = require("fs");
// fs.writeFile("demo.txt", "Hello content!", function (err) {
//   if (err) throw err;
//   console.log("Saved!");
// });
const readStream = fs.createReadStream("./demo.txt");
readStream.on("data", (chunk) => {
  console.log(".....................");
  console.log(chunk);
});
readStream.on("open", () => {
  //This block will run before the event on
  console.log("Stream is opened");
});
//lets pause the stream
setTimeout(() => {
  readStream.pause();
  console.log("Stream is paused");
}, 10);
setTimeout(() => {
  readStream.resume(), console.log("Stream is resumed");
}, 8000);
