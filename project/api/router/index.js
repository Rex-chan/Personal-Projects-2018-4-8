const express = require ('express');
const app = express();
const bp = require('body-parser');
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") {
      res.send(200);/*让options请求快速返回*/
    } else{
      next();
    }
});
app.use(bp.urlencoded({extended: false}));

const user = require('./user.js');
user.register(app);

module.exports = {
    start(_port = 88){
        app.listen(_port);
    }
}