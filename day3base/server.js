const path = require('path');
const express = require('express');
const apiResult = require('./utils/apiResult')
const bp = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const db = require('./utils/db')
const app = express();
const bparser = bp.urlencoded({extends: false});
app.use(express.static(path.join(__dirname, '/web/')));
app.post('/productsadd',bparser,async (req,res)=>{
    let pronameE = req.body.pronameE;
    let pronameC = req.body.pronameC;
    let price = req.body.price;
    let url = req.body.url;
    let describe = req.body.describe;
    let result = await db.insert('lc_products',pronameE,pronameC,price,url,describe);
    res.send(result);   
})
app.post('/productsupdate', (req, res) => {
    res.send(result)
})
app.post('/productsdelete', bparser, async (req, res) => {
    let proid = req.body.proid;
    let result = await db.remove('lc_products',proid );
    console.log(proid)
    res.send(result);
})
app.get('/showproducts',async (req, res) => {    
        let result = await db.select('lc_products');
        res.send(result);
})
    
app.listen(88);