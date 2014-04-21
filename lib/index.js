'use strict';

var lets = require('lets');


module.exports = exports = lets.plugin(function (stage) {
  stage.on('connect', require('./connect'));
  stage.on('disconnect', require('./disconnect'));
});
