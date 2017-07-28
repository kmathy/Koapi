import convict from 'convict'
import fs from 'fs'
import dotenv from 'dotenv'

// to load .env file
dotenv.config()

const conf = convict({
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV'
  },
  port: {
    doc: 'The port to bind.',
    format: 'port',
    default: 4000,
    env: 'PORT'
  },
  mongodb: {
    doc: 'URL to mongodb.',
    format: String,
    default: '',
    env: 'MONGO_URI'
  },
  jwtSecret: {
    doc: 'JWT secret.',
    format: String,
    default: 'my-super-secure-secret',
    env: 'JWT_SECRET'
  }
})

const env = conf.get('env')
try {
  const path = `${__dirname}/${env}.json`

  fs.accessSync(path, fs.F_OK)

  conf.loadFile(path)
} catch (error) {
  console.warn('No config file found, use defaults')
}

conf.validate()

export default conf
