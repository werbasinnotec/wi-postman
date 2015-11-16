'use strict';

var execRequest = require('./execRequest');

var letterman = {
  get: function (options, callback) {
    options.method = 'GET';
    execRequest(options, function (cb) {
      callback(cb);
    });
  },

  post: function (options, callback) {
    options.method = 'POST';
    execRequest(options, function (cb) {
      callback(cb);
    });
  },

  patch: function (options, callback) {
    options.method = 'PATCH';
    execRequest(options, function (cb) {
      callback(cb);
    });
  },

  put: function (options, callback) {
    options.method = 'PUT';
    execRequest(options, function (cb) {
      callback(cb);
    });
  },

  delete: function (options, callback) {
    options.method = 'DELETE';
    execRequest(options, function (cb) {
      callback(cb);
    });
  }
};

module.exports = letterman;
