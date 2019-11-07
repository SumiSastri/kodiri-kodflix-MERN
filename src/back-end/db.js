const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';
// const dbUrl = 'mongodb://kodflix:kodflix@localhost:27017/admin';

MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	var dbo = db.db('kodflix');
	dbo.collection('shows').findOne({}, function(err, result) {
		if (err) throw err;
		console.log(result.name);
		db.close();
	});
});

// RICARDO
// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');

// // Connection URL
// const url = 'mongodb://$[username]:$[password]@$[hostlist]/$[database]?authSource=$[authSource]';

// // Use connect method to connect to the Server
// MongoClient.connect(url, function(err, client) {
//   assert.equal(null, err);
//   client.close();
// });
// VINCE
// const MongoClient = require('mongodb').MongoClient;
// require('dotenv').config();

// const dbUrl = 'mongodb://kodflix:kodflix@localhost:27017/admin';
// const dbUrl = 'mongodb+srv://kodflix:kodflix@kodflix-ymvgn.mongodb.net/kodflix?retryWrites=true&w=majority';
// const dbUrl = process.env[`DB_URL_${process.env.NODE_ENV}`];

// const dbUrl = process.env.NODE_ENV === 'production' ?
//     process.env.DB_URL_PRD :
//     process.env.DB_URL_DEV;

// const dbName = dbUrl.substr(dbUrl.lastIndexOf('/') + 1);

// function connect() {
//     return new Promise((resolve, reject) => {
//         MongoClient.connect(dbUrl, { useNewUrlParser: true }, function (err, client) {
//             if (err) throw(err);
//             const dbo = client.db(dbName);
//             resolve(dbo);
//         });
//     });
// }

// module.exports = {connect};
