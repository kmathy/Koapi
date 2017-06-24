'use strict'
import { loadDB } from './db.config'
import { loadRoutes } from './routes'

export const loadInitializers = (app) => {
    console.info('#### Loading Initializers... ####')
    loadDB(app)
    loadRoutes(app)
}