'use strict'
const Router = require('koa-router')
import Boom from 'boom'
export const userRoutes = new Router()

userRoutes.prefix('/users')
userRoutes.get('/', (ctx, next) => getUsers(ctx, next))
userRoutes.get('/:id', (ctx, next) => getUser(ctx, next))

const getUsers = (ctx, next) => {
    ctx.response.status = 200
    ctx.response.body = ['test', 'toto']
    next()
}

const getUser = (ctx, next) => {
    const error = Boom.notImplemented().output
    ctx.response.status = error.statusCode
    ctx.response.body = error.payload
    next()
}