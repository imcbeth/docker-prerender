var url = require('url');
module.exports = {
  beforePhantomRequest: function(req, res, next) {
    var parsed = url.parse(req.prerender.url);

    if (parsed.hostname === null && req.method === 'HEAD') {
      return res.send(200, '');
    }

    next();
  }
};
