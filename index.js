var Express = require("express");
var bodyParser = require("body-parser");

var app =Express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var MongoClient = require("mongodb").MongoClient;
var CONNECTION_STRING = "mongodb+srv://tichzvidz:<posswords>@cluster0.8a8bb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

var DATABASE = "testdb"
var database;

app.listen(49146, ()=>{

MongoClient.connect(CONNECTION_STRING,{useNewUrlParser:true},(error,client)=>{database=client.db(DATABASE)})

console.log("Mongodb Connection successful 200 OK.");

});
app.get('/', (request, response)=>{

    response.send('Hello TichZvidz is an entry level developer');
})

/*
app.get('/api/happy', (request, response)=>{
  database.collection("happy").find({}).toArray((error, result)=>
  if (error){
      console.log("Oops there is an error "+ error);
  }
  
  response.send(result);
})

*/