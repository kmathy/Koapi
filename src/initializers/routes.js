'use strict'
import Router from 'koa-router'
import { userRoutes } from '../models/user.model'

const router = new Router()
router.prefix('/api')
router.use(userRoutes.routes(), userRoutes.allowedMethods())

export const loadRoutes = (app) => {
    app
        .use(router.routes())
        .use(router.allowedMethods())
    console.success('Routes Loaded!')
}

