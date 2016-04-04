"use strict";

// var sourcePath = ""
// process.argv.splice(2).forEach((val, index, array) => {
//   console.log(`${index}: ${val}`);
// });

const args = process.argv.splice(2);
const Tinify = require("./tinify");
const GM = require("./gm");

(function() {
  let map = new Map();
  map.set("tinify", new Tinify(args[1], args[2]));
  map.set("gm", new GM(args[1], args[2]));

  map.get(args[0]).resize();
})();
