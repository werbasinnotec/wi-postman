'use strict';

var flaschenpost = require('flaschenpost');

var logger = flaschenpost.getLogger();

var letterman = {
  get: function () {
    logger.info('It is a Get');
  },

  post: function () {
    logger.info('It is a Post');
  },

  patch: function () {
    logger.info('It is a get');
  },

  delete: function () {
    logger.info('It is a delete');
  }
};

module.exports = letterman;
