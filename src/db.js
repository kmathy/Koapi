'use strict'
import mongoose from 'mongoose'
mongoose.Promise = global.Promise
export let db

mongoose.connect('mongodb://kmathy:Capricorne95@ds139122.mlab.com:39122/koapi-db', { useMongoClient: true });
mongoose.set('debug', true)
db = mongoose.connection
db.on('error', function(err) {
  if(err) throw err;
});
