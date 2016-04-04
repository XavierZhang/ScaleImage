"use strict";

const tinify = require("tinify");
const FileHandler = require('./fileHandler');
const baseHandler = require('./baseImageHandler');

module.exports = (function() {
  class Tinify extends baseHandler {
    constructor(imgDir, ftype) {
      super(imgDir, ftype);
      tinify.key = "RtXSfk17a8FHzHR05eu8bwSaIa0KspCy";
    }

    resize() {
      FileHandler.processAllFiles(this.filePath, this.fileType).then(file => {
        console.log("tinify", file);
      });
    }
  }
  return Tinify;
})();
