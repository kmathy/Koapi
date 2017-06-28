'use strict'
import mongoose from 'mongoose'
import isEmail from 'validator/lib/isEmail'
const Schema = mongoose.Schema

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: true,
    validate: [isEmail, 'invalid email']
  }
})

let db = mongoose.createConnection('mongodb://kmathy:Capricorne95@ds139122.mlab.com:39122/koapi-db')
export const User = db.model('users', UserSchema)
