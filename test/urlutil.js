var assert = require('better-assert');

var UrlUtil = require('../dist/jscore-urlutil-transpiled');


describe('UrlUtil.getUrlFromInput', function() {
  it('localhost should return http://localhost', function (done) {

    assert(UrlUtil.getUrlFromInput('localhost') === 'http://localhost');

    done();

  });

  it('view-source:http://google.com should remain the same', function (done) {

    assert(UrlUtil.getUrlFromInput('view-source:http://google.com') === 'view-source:http://google.com');

    done();

  });

  it('127.0.0.1 should return http://127.0.0.1', function (done) {

    done();

  });

  it('127.0.0.1:8000 should return http://127.0.0.1:8000', function (done) {

    done();

  });

});
