'use strict';

var pkg = require('../package');
var lets = require('lets');
var Connection = require('./Connection');


module.exports = exports = function connect (options, next) {
  var c;

  //## Guards/validation

  c = new Connection();

  this.setConnection(c);

  c.on('ready', next);
  c.on('end', lets.logger.debug.bind(lets.logger,
    pkg.name, 'Connection to ' + options.host + ' ended'));
  c.on('close', lets.logger.debug.bind(lets.logger,
    pkg.name, 'Connection to ' + options.host + ' closed'));
  c.on('greeting', lets.logger.debug.bind(lets.logger, pkg.name, 'Greeting:'));
  c.on('error', lets.logger.error.bind(lets.logger, pkg.name));

  c.connect({
    host: options.host,
    port: options.port,
    user: options.username,
    password: options.password,
    secure: options.secure,
    secureOptions: options.secureOptions,
    connTimeout: options.connTimeout,
    pasvTimeout: options.pasvTimeout,
    keepalive: options.keepalive
  });
};
