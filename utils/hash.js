const bcrypt = require('bcrypt')

async function hashPassword(password) {
    const salt = await bcrypt.genSalt(10)
    const hashed = await bcrypt.hash(password,salt)
    console.log(salt)
    console.log("Hashed password ",hashed)
    return hashed
}
hashPassword('1453')
module.exports = hashPassword;