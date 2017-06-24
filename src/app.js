'use strict'
require('babel-register')({
    sourceMaps: true
})
import Koa from 'koa'
import { loadInitializers } from './initializers/_loadInitializers'

const app = new Koa()
const PORT = 3000

loadInitializers(app)

app.listen(PORT, () => {
    console.log(`App listening on localhost:${PORT}`)
})