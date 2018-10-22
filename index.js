var express = require('express'),
        app = express(),
       port = process.env.PORT,
 bodyParser = require('body-parser'),
 todoRoutes = require('./routes/todos');
 
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/views'))
app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html')
});

app.use('/api/todos', todoRoutes)



app.listen(port, function(){
    console.log("you're in business")
})