
let checkStr = () =>{
    const schema = {
        name : Joi.string().min(3).required()
    };
    const result = Joi.validate(req.body,schema);
    return result;
}

var addListeners = (app) => {
    app.get('/main',(req ,res) => {
        res.render('index',{name : ''});
     });
     app.get('/add', (req , res)=>{
        res.render('index',{name : ''});
    });
    app.post('/add', (req , res)=>{   
        MongoClient.connect((err ,client) => {
            if(err){
                return console.log(err);
            }
            const db = client.db("test");
            const collection = db.collection("users");
            collection.insertOne({name: req.body.name}, (err ,res) =>{
                if(err){
                    return console.log(err);
                }
                console.log(res.ops);
            });
        
        
            client.close();
        });
        res.render('index',{name : req.body.name});
    });   
};

module.exports.addListeners = addListeners;
