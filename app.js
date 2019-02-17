const eventEmitter = require("events");
const express = require('express');
const Joi = require('joi');

const parser = require('body-parser');
let urlParser = parser.urlencoded({extended : true});

const MG = require('mongodb').MongoClient;
const MongoClient = new MG("mongodb://localhost:27017/",{useNewUrlParser : true});

const route = require("./router/route.js");
const ext = require('./funcs.js');





let app = express();
ext.initApp(app , urlParser , express.json);
let Router = new route.Router().add(app , MongoClient , urlParser);
ext.listen(app);


