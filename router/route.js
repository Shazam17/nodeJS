class Router{

    add(app , MongoClient,urlParser){
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
;       
    }
}




module.exports.Router = Router;