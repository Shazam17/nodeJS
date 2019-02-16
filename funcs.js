
let checkStr = () =>{
    const schema = {
        name : Joi.string().min(3).required()
    };
    const result = Joi.validate(req.body,schema);
    return result;
}

var addListeners = (app, MongoClient) => {
    app.get('/main',(req ,res) => {
        res.render('index',{name : ''});
     });
     app.get('/add', (req , res) => {
        res.render('index',{name : ''});
    });
    
};

module.exports.addListeners = addListeners;
