'use strict';

var assert = require('assertthat');
var postman = require('../lib/app.js');

describe('Test module wi-postman', function () {
  describe('Errorhandling', function () {
    it('.. throws an error when entrypoint is missing in options', function (done) {
      assert.that(function () {
        postman.post({ foo: 'bar' });
      }).is.throwing('Entrypoint is missing');
      done();
    });

    it('.. throws an error when werbasdebitorid is missing in options', function (done) {
      assert.that(function () {
        postman.post({ entrypoint: 'http://localhost/' });
      }).is.throwing('Werbasdebitorid is missing');
      done();
    });

    it('.. throws an error when ressource is missing in options', function (done) {
      assert.that(function () {
        postman.post({ entrypoint: 'http://localhost/', werbasdebitorid: 123456 });
      }).is.throwing('No Ressource is defined');
      done();
    });

    it('.. throws an error when activitylogger URL is defined and m2mtoken is missing in options', function (done) {
      assert.that(function () {
        postman.post({ entrypoint: 'http://localhost/', werbasdebitorid: 123456, ressource: 'http://localhost', ActivityLoggerURL: 'http://localhost' });
      }).is.throwing('M2M-Token is missing when using activityLogger');
      done();
    });
  });

  describe('Test postman.get', function () {
    it('.. is a function', function (done) {
      assert.that(postman.get).is.ofType('function');
      done();
    });

    it('.. response a object', function (done) {
      var options = { entrypoint: 'http://jsonplaceholder.typicode.com', werbasdebitorid: 123456, ressource: '/posts/1' };

      this.timeout(5 * 1000);

      postman.get(options, function (cb) {
        assert.that(cb).is.ofType('object');
        done();
      });
    });
  });

  describe('Test postman.post', function () {
    it('.. is a function', function (done) {
      assert.that(postman.post).is.ofType('function');
      done();
    });

    it('.. response 201 when post is done', function (done) {
      var options = { entrypoint: 'http://jsonplaceholder.typicode.com', werbasdebitorid: 123456, ressource: '/posts', send: { foo: 'bar' }, token: 'ABCDE' };

      this.timeout(5 * 1000);

      postman.post(options, function (cb) {
        assert.that(cb.status).is.equalTo(201);
        done();
      });
    });
  });

  describe('Test postman.put', function () {
    it('.. is a function', function (done) {
      assert.that(postman.put).is.ofType('function');
      done();
    });

    it('.. response 200 when put is done', function (done) {
      var options = { entrypoint: 'http://jsonplaceholder.typicode.com', werbasdebitorid: 123456, ressource: '/posts/1', send: { foo: 'bar' }};

      this.timeout(5 * 1000);

      postman.put(options, function (cb) {
        assert.that(cb.status).is.equalTo(200);
        done();
      });
    });
  });

  describe('Test postman.patch', function () {
    it('.. is a function', function (done) {
      assert.that(postman.patch).is.ofType('function');
      done();
    });

    it('.. response 200 when patch is done', function (done) {
      var options = { entrypoint: 'http://jsonplaceholder.typicode.com', werbasdebitorid: 123456, ressource: '/posts/1', send: { foo: 'bar' }};

      this.timeout(5 * 1000);

      postman.patch(options, function (cb) {
        assert.that(cb.status).is.equalTo(200);
        done();
      });
    });
  });

  describe('Test postman.delete', function () {
    it('.. is a function', function (done) {
      assert.that(postman.delete).is.ofType('function');
      done();
    });

    it('.. response 200 when delete is done', function (done) {
      var options = { entrypoint: 'http://jsonplaceholder.typicode.com', werbasdebitorid: 123456, ressource: '/posts/1', send: { foo: 'bar' }};

      this.timeout(5 * 1000);

      postman.delete(options, function (cb) {
        assert.that(cb.status).is.equalTo(200);
        done();
      });
    });
  });

  describe('.. Error over ActivityLogger', function () {
    it('.. send request to activityLogger URL on server-error', function (done) {
      var options = { entrypoint: 'http://jsonplaceholder.typicode.com', werbasdebitorid: 123456, ressource: '/po', send: { foo: 'bar' },
                      ActivityLoggerURL: 'http://jsonplaceholder.typicode.com/posts', m2mtoken: 'ABC' };

      this.timeout(5 * 1000);

      postman.post(options, function (cb) {
        assert.that(cb.status).is.equalTo(404);
        done();
      });
    });
  });
});
