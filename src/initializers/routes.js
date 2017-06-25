'use strict'
import Router from 'koa-router'
import { userRoutes } from '../models/user.model'

const router = new Router()
router.prefix('/api')
// DEFINE ROUTES HERE
router.use(userRoutes.routes())

export const loadRoutes = (app) => {
    app
        .use(router.routes())
        .use(router.allowedMethods())
    console.success('Routes Loaded!')
}

