var levelup = require('levelup')

if(process.argv.length != 3) {
  console.log("Syntax: node print-ldb.js /path/to/db");
  return;
}

var db_path = process.argv[2];
var db = levelup(db_path, {'keyEncoding': 'binary'})

db.createKeyStream().on('data', function (data) {
  db.get(data, function (err, value) {
    console.log("=====================");
    console.log("key=" + data);
    console.log("=====================\n");
  })
})


