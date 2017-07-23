'use strict'
import mongoose from 'mongoose'
import isEmail from 'validator/lib/isEmail'
import bcrypt from 'bcrypt'
const Schema = mongoose.Schema

let UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  hash_password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: true,
    validate: {
      isAsync: false,
      validator: isEmail,
      message: 'Invalid email' }
  },
  created: {
    type: Date,
    default: Date.now
  }
}, { runSettersOnQuery: true })

UserSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.hash_password)
}

let db = mongoose.createConnection(process.env.MONGO_URI)
export const User = db.model('users', UserSchema)
