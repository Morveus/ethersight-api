// Requires
var fs = require("fs");
var express = require("express");

// Defining stuff
var app = express();
var port = 3333;

// Instanciating 
var Web3 = require('web3');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

app.get("/hello", function(request, response){
  response.send("hello");
});

app.listen(port);