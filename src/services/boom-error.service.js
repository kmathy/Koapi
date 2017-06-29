import Boom from 'boom'

const setResponse = (ctx, boomObject) => {
  ctx.response.status = boomObject.statusCode
  ctx.response.body = boomObject.payload
}

export default {
  notFound: (ctx, message = 'No message', data = {}) => {
    setResponse(ctx, Boom.notFound(message, data).output)
  },

  dbError: (ctx, message = 'No message', data = {}) => {
    console.error(`DB ERROR ${message}`)
    setResponse(ctx, Boom.badImplementation(message, data).output)
  }
}
