const Router = require('koa-router')
export const userRoutes = new Router()

userRoutes.prefix('/users')
userRoutes.get('/', getUsers())
userRoutes.get('/:id', getUser())

const getUsers = (ctx, next) => {
    console.log('GetUsers called')
    next()
}

const getUser = (ctx, next) => {
    console.log(`getUser with param ${ctx.params}`)
    next()
}