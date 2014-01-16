module.exports = function(app,port,superagent,base_url){
    app.get('/',function(req, res){
        return res.render('index',{"title":"Moco Store","app":"index","controller":"indexController"});
    });
    
    app.get('/halaman1',function(req, res){
        return res.render('h1',{"title":"Moco Store","app":"index","controller":"indexController"});  
    });
    
    app.get('/halaman2',function(req, res){
        return res.render('h2',{"title":"Moco Store","app":"index","controller":"indexController"}); 
    });
};