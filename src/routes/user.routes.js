'use strict'
import { User } from '../controllers'
import Router from 'koa-router'

const router = new Router({prefix: '/users'})
  .get('/', (ctx, next) => User.getUsers(ctx, next))
  .get('/:id', (ctx, next) => User.getUser(ctx, next))

export default () => router.routes()
