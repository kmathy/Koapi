import Boom from 'boom'

const setResponse = (ctx, boomObject) => {
  ctx.response.status = boomObject.statusCode
  ctx.response.body = boomObject.payload
}

export default {
  sendError: (statusCode, ctx, message = 'No message', data = {}) => {
    switch (statusCode) {
      case 404:
        setResponse(ctx, Boom.notFound(message, data).output)
        break
      case 422:
        setResponse(ctx, Boom.badData(message, data).output)
        break
      case 500:
        console.error(`INTERNAL ERROR ${message}`)
        setResponse(ctx, Boom.badImplementation(message, data).output)
        break
      default:
        setResponse(ctx, Boom.create(statusCode, message, data).output)
    }
  }
}
