import jwt from 'jsonwebtoken'

export default {
  createToken: (user) => {
    console.log(process.env.JWT_SECRET)
    return jwt.sign({
      id: user._id,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName
    }, process.env.JWT_SECRET, {
      expiresIn: '1h'
    })
  }
}
