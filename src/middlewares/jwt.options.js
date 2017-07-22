'use strict'

// options include the shared secret

export const options = {
  secret: process.env.JWT_SECRET
}

// exclude jwt to check these routes

export const paths = {
  path: [
    /^\/api\/users/,
    '/favicon.ico'
  ]
}
