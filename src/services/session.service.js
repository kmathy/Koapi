import jwt from 'jsonwebtoken'
import conf from '../config'

export default {
  createToken: (user) => {
    return jwt.sign({
      id: user._id,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName
    }, conf.get('jwtSecret'), {
      expiresIn: '1h'
    })
  }
}
