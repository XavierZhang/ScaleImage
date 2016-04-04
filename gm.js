"use strict";

const baseHandler = require('./baseImageHandler');

class GraphicsMagick extends baseHandler {
  constructor(imgDir, ftype) {
    super(imgDir, ftype);
  }
  resize() {
    console.log("gm");
  }
}

module.exports = GraphicsMagick;
