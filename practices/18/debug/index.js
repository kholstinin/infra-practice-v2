const logA = require("debug")("worker:a");
const logB = require("debug")("worker:b");
const commonLog = require("debug")("common");

commonLog('start');

function work() {
  logA("doing lots of uninteresting work");
  setTimeout(work, Math.random() * 1000);
}
work();

function workb() {
  logB("doing some work");
  setTimeout(workb, Math.random() * 2000);
}
workb();
