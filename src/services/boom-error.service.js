import Boom from 'boom'

const setResponse = (ctx, boomObject) => {
  ctx.response.status = boomObject.statusCode
  ctx.response.body = boomObject.payload
}

export default {
  notFound: (ctx, message = 'No message', data = {}) => {
    setResponse(ctx, Boom.notFound(message, data).output)
  },

  internalError: (ctx, message = 'No message', data = {}) => {
    console.error(`INTERNAL ERROR ${message}`)
    setResponse(ctx, Boom.badImplementation(message, data).output)
  },

  dbSaveError: (ctx, message = 'No message', data = {}) => {
    setResponse(ctx, Boom.badData(message, data).output)
  }
}
