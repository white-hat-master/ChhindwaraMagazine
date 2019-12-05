const db = require('./connection');

function indexModel() {
    
    this.contact = (userDetails) => {
        return new Promise((resolve, reject) => {
           db.collection('msg').insertOne(userDetails,(err,result)=>{
               console.log(userDetails);
               err ? reject(err) : resolve(result);
           })
        })
    }
    this.sub_email = (userDetails) => {
        return new Promise((resolve, reject) => {
           db.collection('sub-email').insertOne(userDetails,(err,result)=>{
               console.log(userDetails);
               err ? reject(err) : resolve(result);
           })
        })
    }
}

module.exports = new indexModel()