'use strict'
import BoomError from '../services/boom-error.service'
import { User } from '../models/user.model'
import LoginService from '../services/session.service'

export default {
  getUsers: async (ctx, next) => {
    try {
      let users = await User.find({})
      ctx.response.body = users
      ctx.response.status = 200
    } catch (err) {
      BoomError.dbError(ctx, err.message)
    }
  },

  getUser: async (ctx, next) => {
    try {
      let user = await User.findById(ctx.params.id)
      if (user) {
        ctx.response.body = user
        ctx.response.status = 200
      } else BoomError.notFound(ctx, `User with ID ${ctx.params.id} not found`)
    } catch (err) {
      BoomError.dbError(ctx, err.message)
    }
  },

  login: async (ctx, next) => {
    try {
      const username = ctx.request.body.username
      const password = ctx.request.body.password
      const user = await User.findOne({ username: username, password: password })
        .select('firstName lastName username email')
      ctx.response.body = LoginService.login(user)
      ctx.response.status = 200
    } catch (err) {
      BoomError.dbError(ctx, err.message)
    }
  }
}
