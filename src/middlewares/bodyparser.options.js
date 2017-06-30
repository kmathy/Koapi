'use strict'

// See https://github.com/koajs/bodyparser#options for reference

export default {
  enableTypes: ['json', 'form'],
  formLimit: '56kb',
  jsonLimit: '1mb',
  textLimit: '1mb',
  strict: true
}
