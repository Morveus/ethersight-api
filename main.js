// Requires
var fs = require('fs');
var express = require('express');
var levelup = require('levelup');
var async = require('async');

// Defining stuff
var app = express();
var port = 3333;
var db = levelup('/root/.ethereum/chaindata');

// Instanciating 
var Web3 = require('web3');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));
var eth = web3.eth;

// function scanBlocks(from, to){
//   if (typeof from === 'undefined') {
//     from = 0;
//   }

//   if (typeof to === 'undefined') {
//     to = eth.blockNumber;
//   }

//   for(i = from ; i <= to ; i++){
//     var txArray = eth.getBlock(i).transactions;
//     processTransactions(txArray);
//   }
// }

// function addTx(address, txdata){
//   db.get(address, function (err, value) {
//     if (err) return console.log('Ooops!', err);
//     console.log('name=' + value);
//   });
// }

// function processTransactions(txArray){
//   txArray.forEach(function(txid){
//     processTransaction(txid);
//   });
// }

// function processTransaction(txid){
//   console.log(eth.getTransaction(txid));
// }

// scanBlocks(1022917, 1022999);

console.log(db.open());

app.get('/hello', function(request, response){
  db.put('name', 'LevelUP', function (err) {
    if (err) return console.log('Ooops!', err);

    db.get('name', function (err, value) {
      if (err) return console.log('Ooops!', err);
      console.log('name=' + value);
    });
  });

  response.send("hello");
});

app.listen(port);