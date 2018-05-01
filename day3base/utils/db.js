const mongodb = require('mongodb');
const apiResult = require('./apiResult')
const mc = mongodb.MongoClient;
var db = null;

mc.connect('mongodb://localhost:27017',(error,client)=>{
    db = client.db('gz1801');
})
module.exports = {
    async select(_collection, _document = {}){
        try{
            let items = await db.collection(_collection).find(_document).toArray();
            let result = apiResult(true,items);
            return result;
        } catch(error){
            return apiResult(false,error);
        }        
    },
    async remove(_collection, _proid){
        try {
            let result = await db.collection(_collection).remove({_id:'_proid'})
            console.log(result)
            return result;
        } catch(error){
            return apiResult(false,error);
        }
    },
    async insert(_collection, pronameE, pronameC, price, url, describe){
        try{
            let result = await db.collection(_collection).insert({pronameE, pronameC, price, url, describe});
            return apiResult(result.insertedCount > 0, result);
        }catch(error){
            return apiResult(false,error);
        }   
    }

    // MongoClient.connect('mongodb://localhost:27017',(error,client)=>{
    //         client.db('gz1801').collection('users').insert({username,password,nickname},(error,items)=>{
    //             res.send(apiResult(true,items));
    //         })
            
    // })
    
}
    









