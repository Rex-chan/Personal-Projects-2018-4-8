const mc = require('mongodb').MongoClient;
const ar = require('../utils/apiResult')

var db;

mc.connect('mongodb://localhost:27017/gz1801', (_error, _db) => {
    db = _db;
})

module.exports = {
    async select(_collection, _condition = {}){
        const result = await db.collection(_collection).find(_condition).toArray();
        return ar(result.length > 0, result);
    }
}