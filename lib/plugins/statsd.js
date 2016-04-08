module.exports = {
    beforeSend: function (req, res, next) {
        var Lynx = require('lynx');
        var hostname = require('os').hostname();
        var metrics = new Lynx('10.23.1.95', 8125, {
            prefix: hostname
        });
        var statusCode = req.prerender.statusCode;
        var ms = new Date().getTime() - req.prerender.start.getTime();

        metrics.increment('status.' + statusCode);
        metrics.timing('response_time.' + statusCode, ms);

        next();
    }
};
