const add = require("./utils");

const path = import('./utils.js');

console.log(add(5, 5), path);

class CLI {
  build() {
    const startCommand = require('build');

  }

  start() {
    const startCommand = require('start');
    startCommand();
  }

  analyze() {

  }
}

new CLI().start();