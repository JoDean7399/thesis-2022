const jwt = require('jsonwebtoken');

// Run environmental variables
require('dotenv').config();/* Create token for authentication */
async function makeToken(user) {
    // Get JWT secret from env file
    const { JWT_SECRET } = process.env;
    // Sign and create token
    const token = await jwt.sign({id: user._id}, JWT_SECRET, {
        expiresIn: 86400 // Expires in 24 hours
    });
    console.log(token, 'token')
    return token;
}

module.exports = makeToken;