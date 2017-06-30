import { compose } from 'koa-convert'
import logger from 'koa-logger'
import helmet from 'koa-helmet'
import helmetOptions from './helmet.options'

const middlewares = [
  logger(),
  helmet(helmetOptions)
]

export default () => compose(middlewares)
