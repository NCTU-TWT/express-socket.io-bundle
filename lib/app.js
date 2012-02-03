
/**
 * Module dependencies.
 */


module.exports = {
    createStaticServer: function (port, staticPath) {
                
        var path        = require('path'),
            express     = require('express'),
            socketio    = require('socket.io');

        var app = module.exports = express.createServer();

        var io = socketio.listen(app);

        // Configuration

        app.configure(function(){
          app.use(express.bodyParser());
          app.use(express.methodOverride());
          app.use(app.router);
          app.use(express.static(path.join(process.cwd(), staticPath)));
        });

        app.configure('development', function(){
          app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
        });

        app.configure('production', function(){
          app.use(express.errorHandler()); 
        });
        

        app.listen(port);
        console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
        console.log("Serving static files in " + path.join(process.cwd(), staticPath));


        return {
            server: app,
            io: io
        };

    }
};
