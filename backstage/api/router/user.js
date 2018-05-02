const jwt = require('jsonwebtoken')
const db = require('../db/dbhelper')
const apiResult = require('../utils/apiResult')

module.exports = {
    reg(app){
        app.post('/login', async (req, res) => {
            // console.log(req.body)
            let username = req.body.username;
            let password = req.body.pwd;
            
            let result = await db.select('users', {username, password});
            if(result.status){
                let token = jwt.sign({username}, '123456', {expiresIn: 60 * 60});
                let ar = apiResult(result.status, token);
                res.send(ar);
            } else {
                res.send(result);
            }
        })
    }
}