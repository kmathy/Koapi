'use strict'
import mongoose from 'mongoose'
mongoose.Promise = global.Promise

mongoose.connect(process.env.MONGO_URI, { useMongoClient: true })
mongoose.set('debug', true)

export default mongoose.connection
  .on('error', (err) => { if (err) throw err })
  .on('disconnected', () => console.info('MONGO is DISCONNECTED'))
