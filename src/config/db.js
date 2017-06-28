'use strict'
import mongoose from 'mongoose'
mongoose.Promise = global.Promise
export let db

mongoose.connect(process.env.MONGO_URI, { useMongoClient: true })
mongoose.set('debug', true)
db = mongoose.connection
db.on('error', function (err) {
  if (err) throw err
})
