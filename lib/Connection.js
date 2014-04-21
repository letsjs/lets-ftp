'use strict';

var
    util = require('util'),
    Ftp = require('ftp'),
    lets = require('lets'),
    pkg = require('../package'),
    Connection;


/**
 * Extends ftp, so anything ftp does is possible. However some methods might
 * be altered to expose a more sane API.
 *
 * @constructor
 * @api public
 */

module.exports = exports = Connection = function Connection () {
  Ftp.call(this);
};

util.inherits(Connection, Ftp);


/* Public methods
============================================================================= */

/**
 * Connect to host. Intercepts ftp's built-in #connect.
 */

exports.prototype._connect = exports.prototype.connect;
exports.prototype.connect = function(options) {
  lets.logger.info(pkg.name, 'Connecting to ' + options.host);
  this._connect(options);
};
