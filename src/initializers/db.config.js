'use strict'
import mongo from 'koa-mongo'

export const loadDB = (app) => {
    // app.use(mongo())
    console.log('No DB installed. Please take a look')
}

// OPTIONS default

// mongo({
//     host: 'localhost',
//     port: 27017,
//     user: 'admin',
//     pass: '123456',
//     db: 'test',
//     max: 100,
//     min: 1
// })