'use strict'
import mongoose from 'mongoose'
mongoose.Promise = global.Promise

export default (uri) => {
  mongoose.connect(uri, { useMongoClient: true })
    .then(({ db: { databaseName } }) => console.success(`Connected to ${databaseName}`))
    .catch((err) => console.error(`Failed to connect to Database. Error - ${err}`))
}
