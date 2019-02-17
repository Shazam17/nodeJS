
let checkStr = () =>{
    const schema = {
        name : Joi.string().min(3).required()
    };
    const result = Joi.validate(req.body,schema);
    return result;
}

module.exports.initApp = (app , urlParser , json) =>{
    app.use(urlParser);
    app.use(json);
    app.set('view engine','ejs');
};
module.exports.listen = (app) =>{
    //PORT
    const port = process.env.port || 3000;
    app.listen(port, () => {
        console.log('Listening on port ' + port);
    });
    console.log('127.0.0.1:'+port);
};