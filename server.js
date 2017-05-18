var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//Allow all requests from all domains & localhost
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.setHeader("Access-Control-Allow-Origin", "*")
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


var games =  [
  {"id":2323,"game":"Call of duty"},
  {"id":4345,"game":"Days gone"},
  {"id":9909,"game":"God of war"}];

// api endpoint to get list of all games

app.get('/api/games',function(req,res){
   res.send({games});
});

//api endpoint to add a new game

app.post('/api/games',function(req,res){
    games.push(req.body);
    return res.json({
      message:'success',
      error:false
    })
});

// api endpoint to get particular game

app.get('/api/games/:userid',function(req,res){
      var game =  games.filter((game) =>{
         return game.id === parseInt(req.params.userid,10)
       });
       if(game){
           return res.json(game);
         }
         else {
           return res.status(404).json({
             message:"User not found",
             error:true
           })
         }
    });

// api endpoint to search a game

  app.get('/api/gaming', function(req, res) {
      var results = games.filter((game) => {
        return game.game.toLowerCase().match(req.query.game);
      });
    return res.json({results});
  });


app.listen(6060);
