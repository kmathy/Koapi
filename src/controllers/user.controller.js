'use strict'
import Boom from 'boom'
import { User } from '../models/user.model'

export default {
  getUsers: async (ctx, next) => {
    try {
      let users = await User.find({})
      ctx.response.body = users
      ctx.response.statusCode = 200
    } catch (err) {
      ctx.response.statusCode = 404
      ctx.response.body = err
    }
  },

  getUser: async (ctx, next) => {
    try {
      let user = await User.findById(ctx.params.id, 'firstName lastName')
      if (user) {
        ctx.response.body = user
        ctx.response.statusCode = 200
      } else {
        const error = Boom.notFound(`User with ID = ${ctx.params.id} not found`).output
        ctx.response.statusCode = error.statusCode
        ctx.response.body = error.payload
      }
    } catch (err) {
      ctx.response.statusCode = 404
      ctx.response.body = err
    }
  }
}
