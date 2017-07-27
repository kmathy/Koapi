'use strict'
import BoomError from '../services/boom-error.service'
import { User } from '../models/user.model'
import SessionService from '../services/session.service'
import bcrypt from 'bcrypt'

export default {
  getUsers: async (ctx, next) => {
    try {
      let users = await User.find({})
      ctx.response.body = users
      ctx.response.status = 200
    } catch (err) {
      BoomError.sendError(500, ctx, err.message)
    }
  },

  getUser: async (ctx, next) => {
    try {
      let user = await User.findById(ctx.params.id)
      if (user) {
        ctx.response.body = user
        ctx.response.status = 200
      } else BoomError.sendError(404, ctx, `User with ID ${ctx.params.id} not found`)
    } catch (err) {
      BoomError.sendError(500, ctx, err.message)
    }
  },

  login: async (ctx, next) => {
    try {
      const email = ctx.request.body.email
      const user = await User.findOne({ email: email })
      if (!user) {
        BoomError.sendError(404, ctx, 'Authentication Failed: User not found')
      } else if (user) {
        if (!user.comparePassword(ctx.request.body.password)) {
          BoomError.sendError(404, ctx, 'Authentication Failed: Wrong password')
        } else {
          ctx.response.body = SessionService.createToken(user)
          ctx.response.status = 200
        }
      }
    } catch (err) {
      BoomError.sendError(500, ctx, err.message)
    }
  },

  register: async (ctx, next) => {
    try {
      let newUser = new User(ctx.request.body)
      newUser.hash_password = bcrypt.hashSync(ctx.request.body.password, 10)
      let userSaved = await newUser.save()
      if (userSaved) {
        userSaved.hash_password = undefined
        ctx.response.status = 200
        ctx.response.body = userSaved
      } else BoomError.sendError(422, ctx, 'DB: Problem to register the user')
    } catch (err) {
      BoomError.sendError(500, ctx, err)
    }
  }
}
