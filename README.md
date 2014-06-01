# lets-ftp

Lets-ftp manages FTP connections and commands in [Lets][lets]. If you want to
deploy over FTP, check out [lets-copy][lets-copy].


## Installation

```bash
npm install lets-ftp
```


## Getting started

**Letsfile.js**

```javascript
var ftp = require('lets-ftp');

module.exports = function(lets) {
  var stage = new lets.Stage({
    host: '1.2.3.4',
    username: 'me'
  });

  // Best practice is to load passwords from a file that isn't checked in
  stage.config(require('./config/stage1'));

  // Use lets-ftp
  stage.plugin(ftp());

  // Do something after connection, maybe upload a file
  stage.after('connect', function (options, done) {
    this.getConnection(function (c) {
      c.put('local-filename', 'remote-filename', done);
    });
  });

  // Add stage to lets and name it
  lets.addStage('stage1', stage);
};
```

Run it using e.g. `$ lets deploy stage1` (a way to add custom "flows" will be
available soon).


## Options

Required: 

* `options.host` – Address to server
* `options.username` – User to log in with
* `options.password` – The user's password

See [node-ftp][node-ftp] for the following options mainly used by that module:

* `options.port`
* `options.secure`
* `options.secureOptions`
* `options.connTimeout`
* `options.pasvTimeout`
* `options.keepalive`

That's also where you can find docs on which methods are available on the
connection object.


## Contribution

See guidelines for [lets][lets].



[lets]: https://github.com/letsjs/lets
[lets-copy]: https://github.com/letsjs/lets-copy
[node-ftp]: https://github.com/mscdex/node-ftp
