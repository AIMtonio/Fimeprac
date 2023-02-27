const express = require('express');
const serverless = require("serverless-http");
const cors = require('cors');
const { routerAuth } = require('../../routes/auth/auth.js');
const { routerstockout }  = require('../../routes/stockout/stockout.js');
const { routerLogin }  = require('../../routes/login/login.js');
class Server {
    constructor(){
        this.app  = express();
        this.port = process.env.PORT || 3000;
        this.authPath = '/api/auth'
        this.stockoutPath = '/api/stockout'
        this.loginPath = '/api/login'
        this.middlewares();
        this.routes();
        this.srv = serverless(this.app);
    }

    middlewares() {
        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( express.static('public') );
    }

    routes() {
        this.app.use(this.authPath, routerAuth);
        this.app.use(this.stockoutPath, routerstockout);
        this.app.use(this.loginPath, routerLogin);
    }

    returnSrv(){
        return this.srv;
    }

    listen() {
        this.app.listen( 3000, () => console.log(`Servidor corriendo en puerto`, 3000));
    }

    

}

module.exports = Server;