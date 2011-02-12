var sys = require('sys'),
    util = require('./lib/mail/util'),
    text = require('./lib/mail/text'),
    mail = require('./lib/mail').Mail({
      domain: 'weaver.coptix.lan',
      host: 'smtp.gmail.com',
      port: 587,
      username: 'ben.weaver@thisismedium.com',
      password: 'c!N3ggLeZmai'
    });

  function wrap(result, line) {
    sys.debug(sys.inspect(line) + ' ==> ' + sys.inspect(text.wrap(line, 78, 998)));
    return result.concat(text.wrap(line, 78, 998));
  }

mail.message({
    from: 'ben.weaver@thisismedium.com',
    to: ['ben.weaver@thisismedium.com'],
    subject: 'Hello from Node.JS'
  })
  .body('.Node speaks SMTP.\n \n\nAnd preserves newlines.')
  .send(function(err) {
    sys.debug('Sent!');
  });
