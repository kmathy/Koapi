import { compose } from 'koa-convert'
import logger from 'koa-logger'
import respond from 'koa-respond'
import respondOptions from './respond.options'
import helmet from 'koa-helmet'
import helmetOptions from './helmet.options'
import bodyparser from 'koa-bodyparser'
import bodyparserOptions from './bodyparser.options'
import jwt from 'koa-jwt'
import { options, paths } from './jwt.options'

const middlewares = [
  logger(),
  respond(respondOptions),
  helmet(helmetOptions),
  bodyparser(bodyparserOptions),
  jwt(options).unless(paths)
]

export default () => compose(middlewares)
