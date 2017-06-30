import { compose } from 'koa-convert'
import logger from 'koa-logger'
import helmet from 'koa-helmet'
import helmetOptions from './helmet.options'
import bodyparser from 'koa-bodyparser'
import bodyparserOptions from './bodyparser.options'

const middlewares = [
  logger(),
  helmet(helmetOptions),
  bodyparser(bodyparserOptions)
]

export default () => compose(middlewares)
