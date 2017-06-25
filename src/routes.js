'use strict'
import Router from 'koa-router'
import { userRoutes } from './controllers/user.controller'

export const router = new Router()
router.prefix('/api')
// DEFINE ROUTES HERE
router.use(userRoutes.routes())
