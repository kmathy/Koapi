import { loadDB } from './db.config'
import { loadRoutes } from './routes'

export const loadInitializers = (app) => {
    console.log('Loading Initializers...')
    loadDB(app)
    loadRoutes(app)
}