const eventEmitter = require("events");
const express = require('express');
const Joi = require('joi');

const parser = require('body-parser');
let urlParser = parser.urlencoded({extended : true});

const MG = require('mongodb').MongoClient;
const MongoClient = new MG("mongodb://localhost:27017/",{useNewUrlParser : true});

const route = require("./router/route.js");
const ext = require('./funcs.js');


let listenApp = (app) =>{
    const port = process.env.port || 3000;
    app.listen(port, () => {
        console.log('Listening on port ' + port);
    });
    console.log('127.0.0.1:'+port);
};


let app = express();
app.use(urlParser);
app.use(express.json());
app.set('view engine','ejs');

ext.addListeners(app,MongoClient);
 
app.post('/add', (req , res) => {   
    MongoClient.connect((err ,client) => {
        if(err){
            return console.log(err);
        }
        const db = client.db("test");
        const collection = db.collection("users");
        collection.insertOne({"name": req.body.name}, (err ,res) =>{
            if(err){
                return console.log(err);
            }
            console.log(res.ops);
    });
    client.close();
    });
    res.render('index',{name : req.body.name});
});   

listenApp(app);



