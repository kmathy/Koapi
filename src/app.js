const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
const PORT = 3000

const router = new Router()

router.get('/', (ctx, next) => {
    ctx.body = 'Hello world from root Path'
})

app
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(PORT, () => {
    console.log(`App listening on localhost:${PORT}`)
})