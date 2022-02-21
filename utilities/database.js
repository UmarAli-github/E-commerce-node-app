const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let _db;

const mongodbConnection = callback => {

    //MongoDb client url: insert username and password and database of your Db connection

    MongoClient.connect('mongodb+srv://<username>:<password>@cluster0.t0nch.mongodb.net/<database>?retryWrites=true&w=majority')
    .then(client =>{
        console.log('MongoDb Client connected !!!');
        
        _db = client.db();
        callback();

    }).catch( err => { 

        console.log(err);
        throw err;
    });
}

const getdbClient = () => {

    if(_db){

        return _db;
    }

    throw "No Database Connection Found";
}

exports.mongodbConnection = mongodbConnection;

exports.getdbClient = getdbClient;
