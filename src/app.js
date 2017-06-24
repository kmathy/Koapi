'use strict'
require('babel-register')({
    sourceMaps: true
})
require('manakin').global // output colors in Development
import Koa from 'koa'
import { loadInitializers } from './initializers/_loadInitializers'

const app = new Koa()
const PORT = 3000

// #### LOAD INITIALIZERS ####

loadInitializers(app)

// #### START APP ####

app.listen(PORT, () => {
    console.info(`App listening on localhost:${PORT}`)
})