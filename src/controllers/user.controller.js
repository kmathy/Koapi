'use strict'
import { User } from '../models/user.model'
import SessionService from '../services/session.service'
import bcrypt from 'bcrypt'

export default {
  getUsers: async (ctx, next) => {
    try {
      let users = await User.find({})
      ctx.ok(users)
    } catch (err) {
      ctx.internalServerError(err)
    }
  },

  getUser: async (ctx, next) => {
    try {
      let user = await User.findById(ctx.params.id).select('-hash_password')
      user ? ctx.ok(user) : ctx.notFound({ message: 'User not found. Check ID.', id: ctx.params.id })
    } catch (err) {
      ctx.internalServerError(err)
    }
  },

  login: async (ctx, next) => {
    try {
      const email = ctx.request.body.email
      const user = await User.findOne({ email: email })
      if (!user) {
        ctx.badRequest('Authentication Failed: User not found')
      } else if (user) {
        if (!user.comparePassword(ctx.request.body.password)) {
          ctx.badRequest('Authentication Failed: Wrong password')
        } else {
          ctx.ok({ token: SessionService.createToken(user) })
        }
      }
    } catch (err) {
      ctx.internalServerError(err)
    }
  },

  register: async (ctx, next) => {
    try {
      let newUser = new User(ctx.request.body)
      newUser.hash_password = bcrypt.hashSync(ctx.request.body.password, 10)
      let userSaved = await newUser.save()
      if (userSaved) {
        userSaved.hash_password = undefined
        ctx.ok(userSaved)
      } else ctx.unprocessableEntity('There is a problem to register the user')
    } catch (err) {
      ctx.internalServerError(err)
    }
  }
}
