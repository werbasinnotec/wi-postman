'use strict';

var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
var req = new XMLHttpRequest();

var execErrorRequst = require('./execErrorRequst');

var execRequest = function (options, callback) {
  if (!options.entrypoint) {
    throw new Error('Entrypoint is missing');
  }

  if (!options.werbasdebitorid) {
    throw new Error('Werbasdebitorid is missing');
  }

  if (!options.ressource) {
    throw new Error('No Ressource is defined');
  }

  if (options.ActivityLoggerURL && !options.m2mtoken) {
    throw new Error('M2M-Token is missing when using activityLogger');
  }

  req.open(options.method, options.entrypoint + options.ressource, false);
  req.setRequestHeader('Content-Type', 'application/json');

  if (options.token) {
    req.setRequestHeader('Authorization', options.token);
  }

  req.send(JSON.stringify(options.send));

  if (req.status === 500 || req.status === 404) {
    execErrorRequst(options);
    return callback(req);
  }

  callback(req);
};

module.exports = execRequest;
