'use strict'
const Router = require('koa-router')
export const userRoutes = new Router()

userRoutes.prefix('/users')
userRoutes.get('/', (ctx, next) => getUsers(ctx, next))
userRoutes.get('/:id', (ctx, next) => getUser(ctx, next))

const getUsers = (ctx, next) => {
    console.log('GetUsers called')
    next()
}

const getUser = (ctx, next) => {
    console.log(`getUser with param ${ctx.params}`)
    next()
}