const mongoose = require('mongoose');
const { db } = require('../app-setting')

url = `mongodb://${db.mongo.main.address}/${db.mongo.main.name}`;
mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true });

mongoose.Promise = Promise;

module.exports = mongoose;
