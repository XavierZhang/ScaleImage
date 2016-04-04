"use strict";

const Q = require('q');
const fs = require('fs');
const _ = require('lodash');
const path = require('path');

module.exports = (function() {
  let map = new Map();

  for (let p in fs) {
    if (fs.hasOwnProperty(p)) {
      map.set(p, Q.denodeify(fs[p]));
    }
  }

  class Handler {
    constructor() {}

    static processAllFiles(filePath, fileType) {
      var defered = Q.defer();
      map.get("readdir")(filePath)
        .then(files => {
          _.forEach(files, file => {
            let fp = path.join(filePath, file);

            map.get("stat")(fp).then(stat => {
              if (stat.isFile()) {
                let regex = new RegExp("^.+\." + fileType + "$", "i");
                if (regex.test(file)) {
                  defered.resolve(fp);
                }
              }
              if (stat.isDirectory()) {
                processAllFiles(fp, fileType);
              }
            }, error => {
              defered.reject(error.toString().red);
              console.error("get file stat", error);
            });
          });
        }, error => {
          defered.reject(error.toString().red);
          console.error("callback error=====", error);
        });
      return defered.promise;
    }
  }

  return Handler;
})();
