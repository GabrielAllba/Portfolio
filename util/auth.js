const {sign, verify} = require('jsonwebtoken')


const KEY = "supersecret";

function createJSONToken(email){
    const payload = {
        email: email
    }
    const options = {
        expiresIn: '1h'
    }
    var token = sign(payload, KEY, options)

    return token
}

function validateJSONToken(token){
    return verify(token, KEY)
}

function getTokenDuration() {
  const storedExpirationDate = localStorage.getItem("expiration");
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
}

function getAuthToken() {
  const token = localStorage.getItem("token");


  if (!token) {
    return null;
  }

  const tokenDuration = getTokenDuration();

  if (tokenDuration < 0) {
    return "EXPIRED";
  }

  return token;
}

exports.createJSONToken = createJSONToken
exports.getAuthToken = getAuthToken