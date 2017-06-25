'use strict'
import Router from 'koa-router'
import { User } from '../models/user.model'

export const userRoutes = new Router()
userRoutes.prefix('/users')
userRoutes.get('/', (ctx, next) => getUsers(ctx, next))
userRoutes.get('/:email', (ctx, next) => getUser(ctx, next))

const getUsers = async (ctx, next) => {
    try {
        let users = await User.find({})
        ctx.response.body = users
        ctx.response.statusCode = 200
    } catch(err) {
        err => ctx.response.body = err
    }
    
}

const getUser = async (ctx, next) => {
    try {
        let user = await User.findOne({'email': 'kmathy@adneom.com'},'firstName lastName')
        if(user) {
            ctx.response.body = user
            ctx.response.statusCode = 200
        }
    } catch(err) {
        err => ctx.response.body = err
    }
}
