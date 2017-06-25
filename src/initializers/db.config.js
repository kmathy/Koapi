'use strict'
import mongoose from 'mongoose'
mongoose.Promise = global.Promise

export const loadDB = (app) => {
    // TODO: How to hide this?
    mongoose.connect('mongodb://kmathy:Capricorne95@ds139122.mlab.com:39122/koapi-db', { useMongoClient: true })
        .then(() => {
            console.success('Connection DB established')
        }).catch(err => {
            console.error(new Error(err))
            process.exit(1)
        })
}
