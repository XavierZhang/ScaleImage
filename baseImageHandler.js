"use strict";

const path = require('path');

class BaseImageHandler {
  constructor(imgDir, ftype) {
    this.filePath = path.resolve(imgDir ? imgDir : "/Users/admin/Documents/AirPackage");
    this.fileType = ftype ? ftype : "png|jpg";
  }

  resize() {}
}

module.exports = BaseImageHandler;
