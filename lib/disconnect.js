'use strict';

var logger = require('lets').logger;
var pkg = require('../package');

module.exports = function disconnect (options, done) {
  this.getConnection(function (c) {
    //## Check if the connection has been closed already
    logger.info(pkg.name, 'Disconnecting from', options.host);
    c.end(done);
  });
};

