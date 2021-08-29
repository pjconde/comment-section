const express = require('express'),
path = require('path'),
bodyParser = require('body-parser'),
cors = require('cors'),
sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database(':memory:');

db.serialize(function () {
    const intializeTable = `
    CREATE TABLE IF NOT EXISTS comments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      message TEXT,
      created DATETIME DEFAULT CURRENT_TIMESTAMP)`;
    db.run(intializeTable);

    var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
    for (var i = 0; i < 10; i++) {
        stmt.run("Ipsum " + i);
    }

    stmt.finalize();

    db.each("SELECT rowid AS id, info FROM lorem", function (err, row) {
        console.log(row.id + ": " + row.info);
    });
});

db.close();

const app = express();
let port = process.env.PORT || 8080;

const server = app.listen(function () {
    console.log('Listening on port ' + port);
});