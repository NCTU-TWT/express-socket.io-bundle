# Install

    $ npm install git://github.com/NCTU-TWT/express-socket.io-bundle.git
    
# Usage

createStaticServer(port, staticPath)

    
    
    var app = require('express-socket.io-bundle').createStaticServer(3000, 'public');
    
    app.server // express
    app.io     // socket.io
