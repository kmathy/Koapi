'use strict'
import Router from 'koa-router'

const router = new Router()
router.get('/', (ctx, next) => {
    ctx.body = 'Hello world from root Path'
})

export const loadRoutes = (app) => {
    console.log('Load Routes')
    app
        .use(router.routes())
        .use(router.allowedMethods())
}

