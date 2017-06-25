'use strict'
const Router = require('koa-router')
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
    console.log(`param ID: ${ctx.params.id}`)
    ctx.response.status = 501
    next()
}