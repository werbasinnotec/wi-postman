'use strict';

var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
var req = new XMLHttpRequest();
var moment = require('moment');
var logger = require('console-browserify');

var execErrorRequst = function (options) {
  var timestamp = moment().unix();
  var request;

  if (options.ActivityLoggerURL) {
    request = { httpstatuscode: req.status, werbasuser: options.username, werbasdebitorid: options.werbasdebitorid, M2Mtoken: options.m2mtoken,
                token: options.token, timestamp: timestamp, ressource: options.ressource, event: req };

    req.open('POST', options.ActivityLoggerURL, false);
    req.setRequestHeader('Content-Type', 'application/json');
    req.setRequestHeader('Authorization', options.m2mtoken);

    logger.log('Error in API:', request);
    req.send(JSON.stringify(request));
  }
};

module.exports = execErrorRequst;
