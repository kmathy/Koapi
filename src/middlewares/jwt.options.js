'use strict'
import conf from '../config'
// options include the shared secret

export const options = {
  secret: conf.get('jwtSecret')
}

// exclude jwt to check these routes

export const paths = {
  path: [
    '/api/users/login',
    '/api/users/register',
    '/favicon.ico'
  ]
}
